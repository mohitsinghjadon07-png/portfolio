export default function HeroGraphic() {
  return (
    <div className="hg" aria-hidden="true">
      <svg viewBox="0 0 400 400">
        <defs>
          <linearGradient id="hgG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
          <radialGradient id="hgC" cx=".5" cy=".5" r=".5">
            <stop offset="0" stopColor="#7c3aed" stopOpacity=".5" />
            <stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="195" fill="url(#hgC)" />

        <g className="hg-ring hg-ring--a">
          <circle cx="200" cy="200" r="172" fill="none" stroke="url(#hgG)" strokeWidth="1" strokeDasharray="2 9" />
          <circle cx="200" cy="28" r="5" fill="#22d3ee" />
          <circle cx="321" cy="321" r="3.5" fill="#a78bfa" />
        </g>
        <g className="hg-ring hg-ring--b">
          <circle cx="200" cy="200" r="136" fill="none" stroke="#a78bfa" strokeOpacity=".35" strokeWidth="1" />
          <circle cx="336" cy="200" r="4.5" fill="#a78bfa" />
          <circle cx="104" cy="104" r="3.5" fill="#22d3ee" />
        </g>
        <g className="hg-ring hg-ring--c">
          <polygon points="200,92 293,146 293,254 200,308 107,254 107,146" fill="none" stroke="#22d3ee" strokeOpacity=".35" strokeWidth="1" />
          <circle cx="200" cy="92" r="3" fill="#22d3ee" />
        </g>

        <g className="hg-shield">
          <path d="M200 118 L264 143 V207 C264 248 236 276 200 292 C164 276 136 248 136 207 V143 Z" fill="rgba(124,58,237,.2)" stroke="url(#hgG)" strokeWidth="2.5" />
          <path d="M200 140 L244 157 V205 C244 232 225 252 200 263 C175 252 156 232 156 205 V157 Z" fill="none" stroke="#a78bfa" strokeOpacity=".4" strokeWidth="1" />
          <circle cx="200" cy="197" r="13" fill="url(#hgG)" />
          <rect x="196" y="205" width="8" height="28" rx="4" fill="url(#hgG)" />
        </g>
      </svg>
      <span className="hg-chip hg-chip--1">Python</span>
      <span className="hg-chip hg-chip--2">AWS</span>
      <span className="hg-chip hg-chip--3">Cryptography</span>
      <span className="hg-chip hg-chip--4">Ethical hacking</span>
    </div>
  )
}
