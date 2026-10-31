import test from 'node:test';
import assert from 'node:assert/strict';
import { buildPayload, normalizeIndianMobile, validateAll } from '../src/features/internship/application.js';
import { DOMAIN_NAMES } from '../src/features/internship/content.js';
import { YEAR_OPTIONS, DURATION_OPTIONS } from '../src/features/internship/config.js';
import { sendContactEnquiry } from '../src/lib/contact.js';

const valid = () => ({fullName:'Sample Student',email:'sample@example.com',whatsapp:'+91 98765 43210',college:'Sample College',course:'Computer Science',year:YEAR_OPTIONS[0],domain:DOMAIN_NAMES[0],duration:DURATION_OPTIONS[0]});

test('Indian mobile input normalizes supported formats and rejects invalid numbers',()=>{
 for(const input of ['9876543210','+91 98765 43210','09876543210','91-98765-43210'])assert.equal(normalizeIndianMobile(input),'9876543210');
 for(const input of ['12345','1234567890','+1 9876543210'])assert.equal(normalizeIndianMobile(input),'');
});
test('application accepts Unicode names and trims/normalizes payload values',()=>{
 const values={...valid(),fullName:'  மாணவன் குமார்  ',email:' sample@example.com '};
 assert.deepEqual(validateAll(values),{});
 const payload=buildPayload(values);assert.equal(payload.fullName,'மாணவன் குமார்');assert.equal(payload.email,'sample@example.com');assert.equal(payload.whatsapp,'+919876543210');
});
test('invalid email and unconfigured options block application payload creation',()=>{
 for(const patch of [{email:'broken'},{year:'Unknown Year'},{domain:'Unknown Domain'},{duration:'Unknown Duration'},{college:''}]){
  const values={...valid(),...patch};assert.ok(Object.keys(validateAll(values)).length>0);assert.equal(buildPayload(values),null);
 }
});
test('contact provider rejection and network failure propagate without claiming success',async()=>{
 const original=globalThis.fetch;
 try{
  globalThis.fetch=async()=>({ok:false});await assert.rejects(sendContactEnquiry({}),/rejected/);
  globalThis.fetch=async()=>{throw new Error('offline');};await assert.rejects(sendContactEnquiry({}),/offline/);
 }finally{globalThis.fetch=original;}
});
test('contact submission uses POST and does not put personal information in URL',async()=>{
 const original=globalThis.fetch;let request;
 try{
  globalThis.fetch=async(url,options)=>{request={url,options};return {ok:true};};
  await sendContactEnquiry({name:'Sample',email:'sample@example.com',message:'A sample enquiry'});
  assert.equal(request.options.method,'POST');assert.ok(!request.url.includes('sample@example.com'));assert.ok(request.options.signal);assert.equal(JSON.parse(request.options.body).name,'Sample');
 }finally{globalThis.fetch=original;}
});
