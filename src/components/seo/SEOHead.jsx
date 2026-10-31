import { useSEO } from '../../hooks/useSEO.js';

// Compatibility wrapper: new pages should call useSEO(path) directly.
export default function SEOHead(options) {
 useSEO(options);
 return null;
}
