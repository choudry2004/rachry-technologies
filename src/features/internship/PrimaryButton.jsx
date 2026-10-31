import { ArrowRight, Loader2 } from 'lucide-react';
export default function PrimaryButton({ children, onClick, type = 'button', full = false, className = '', disabled = false, loading = false }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-busy={loading || undefined}
            className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 ${
                full ? 'w-full' : 'w-full sm:w-auto'
            } ${className}`}
        >
            {children}
            {loading ? (
                <Loader2 className="h-4 w-4 shrink-0 animate-spin" strokeWidth={2} aria-hidden="true" />
            ) : (
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
            )}
        </button>
    );
}
