"use client";

export function HeroSignatureReveal() {
  return (
    <div className="signature-visual" aria-hidden="true">
      <svg viewBox="0 0 500 330" role="presentation">
        <defs>
          <linearGradient id="gold-stroke" x1="0" x2="1">
            <stop stopColor="#8f6f14" />
            <stop offset=".45" stopColor="#F5D76E" />
            <stop offset="1" stopColor="#D4AF37" />
          </linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="3.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <path
          d="M58 194 C108 124, 132 241, 181 158 C204 119, 206 219, 245 170 C267 142, 274 188, 304 164 C328 145, 350 162, 375 178 C398 193, 419 169, 447 142"
          fill="none" stroke="url(#gold-stroke)" strokeWidth="4" strokeLinecap="round" filter="url(#glow)"
        />
        <path
          d="M199 202 L235 235 L318 131"
          fill="none" stroke="#F5D76E" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"
        />
        <circle
          cx="260" cy="183" r="88" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="5 9"
        />
      </svg>
      <div className="signature-label">
        <span>Certificado digital</span><strong>IDENTIDAD VALIDADA</strong>
      </div>
    </div>
  );
}
