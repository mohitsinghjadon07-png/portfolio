/* Custom SVG illustrations, one per project. */
function Road() {
  return (
    <svg viewBox="0 0 400 220" role="img" aria-label="Road with sensor cone, obstacles and planned path">
      <defs>
        <linearGradient id="rmCar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="rmRoad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a1535" />
          <stop offset="1" stopColor="#120e28" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="#0b091a" />
      <polygon points="160,0 240,0 392,220 8,220" fill="url(#rmRoad)" />
      <line x1="160" y1="0" x2="8" y2="220" stroke="#a78bfa" strokeOpacity=".4" />
      <line x1="240" y1="0" x2="392" y2="220" stroke="#a78bfa" strokeOpacity=".4" />
      <line x1="200" y1="0" x2="200" y2="220" stroke="#e9e7f7" strokeOpacity=".35" strokeDasharray="10 12" className="art-dash" />
      <path d="M200 160 L112 38 A110 110 0 0 1 288 38 Z" fill="#22d3ee" fillOpacity=".1" stroke="#22d3ee" strokeOpacity=".5" />
      <path d="M200 160 C200 120 218 84 244 30" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeDasharray="6 6" className="art-dash" />
      <g className="art-pulse">
        <circle cx="158" cy="76" r="9" fill="#f472b6" fillOpacity=".25" />
        <circle cx="158" cy="76" r="4.5" fill="#f472b6" />
      </g>
      <g className="art-pulse art-pulse--b">
        <circle cx="248" cy="104" r="9" fill="#fbbf24" fillOpacity=".25" />
        <circle cx="248" cy="104" r="4.5" fill="#fbbf24" />
      </g>
      <rect x="184" y="158" width="32" height="48" rx="8" fill="url(#rmCar)" />
      <rect x="190" y="166" width="20" height="12" rx="3" fill="#0b091a" fillOpacity=".7" />
    </svg>
  )
}

function Eco() {
  return (
    <svg viewBox="0 0 400 220" role="img" aria-label="Scan frame around a leaf inside a recycling loop">
      <defs>
        <linearGradient id="ecG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34d399" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="#0b091a" />
      <g className="art-spin" style={{ transformOrigin: '200px 110px' }}>
        <circle cx="200" cy="110" r="74" fill="none" stroke="url(#ecG)" strokeWidth="5" strokeLinecap="round" strokeDasharray="110 28" />
        <circle cx="200" cy="110" r="90" fill="none" stroke="#a78bfa" strokeOpacity=".35" strokeDasharray="3 8" />
      </g>
      <path d="M200 66 C246 76 254 128 200 152 C150 130 154 88 200 66 Z" fill="#34d399" fillOpacity=".2" stroke="url(#ecG)" strokeWidth="2.5" />
      <path d="M200 76 V148 M200 110 L224 94 M200 128 L178 112" stroke="url(#ecG)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <g stroke="#22d3ee" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M122 54 V38 H138" /><path d="M278 38 H294 V54" />
        <path d="M122 166 V182 H138" /><path d="M278 182 H294 V166" />
      </g>
      <line x1="126" y1="110" x2="274" y2="110" stroke="#22d3ee" strokeOpacity=".7" strokeWidth="1.5" className="art-scan" />
      <circle cx="330" cy="60" r="4" fill="#fbbf24" className="art-pulse" />
      <circle cx="70" cy="150" r="3" fill="#a78bfa" className="art-pulse art-pulse--b" />
    </svg>
  )
}

function Radar() {
  return (
    <svg viewBox="0 0 400 220" role="img" aria-label="Radar sweep with alert markers">
      <defs>
        <linearGradient id="rkS" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity=".5" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="#0b091a" />
      <g fill="none" stroke="#a78bfa" strokeOpacity=".35">
        <circle cx="200" cy="110" r="30" /><circle cx="200" cy="110" r="62" /><circle cx="200" cy="110" r="94" />
        <line x1="96" y1="110" x2="304" y2="110" /><line x1="200" y1="6" x2="200" y2="214" />
      </g>
      <g className="art-spin art-spin--slow" style={{ transformOrigin: '200px 110px' }}>
        <path d="M200 110 L200 16 A94 94 0 0 1 266 43 Z" fill="url(#rkS)" />
        <line x1="200" y1="110" x2="200" y2="16" stroke="#22d3ee" strokeWidth="1.5" />
      </g>
      <g className="art-pulse"><circle cx="246" cy="70" r="12" fill="#f472b6" fillOpacity=".22" /><circle cx="246" cy="70" r="4.5" fill="#f472b6" /></g>
      <g className="art-pulse art-pulse--b"><circle cx="160" cy="138" r="12" fill="#fbbf24" fillOpacity=".22" /><circle cx="160" cy="138" r="4.5" fill="#fbbf24" /></g>
      <circle cx="222" cy="150" r="3.5" fill="#34d399" />
      <rect x="318" y="40" width="56" height="8" rx="4" fill="#a78bfa" fillOpacity=".5" />
      <rect x="318" y="58" width="40" height="8" rx="4" fill="#22d3ee" fillOpacity=".4" />
      <rect x="318" y="76" width="48" height="8" rx="4" fill="#a78bfa" fillOpacity=".3" />
    </svg>
  )
}

function Bars() {
  const heights = [60, 112, 40, 150, 86, 126, 30, 100, 70, 140]
  return (
    <svg viewBox="0 0 400 220" role="img" aria-label="Bar chart mid-sort with two bars being compared">
      <defs>
        <linearGradient id="pgB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#5b21b6" />
        </linearGradient>
        <linearGradient id="pgC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="#0b091a" />
      <line x1="30" y1="190" x2="370" y2="190" stroke="#a78bfa" strokeOpacity=".4" />
      {heights.map((h, i) => {
        const compared = i === 3 || i === 4
        return (
          <rect
            key={i}
            x={42 + i * 33}
            y={190 - h}
            width="24"
            height={h}
            rx="5"
            fill={compared ? 'url(#pgC)' : 'url(#pgB)'}
            className={compared ? 'art-pulse' : ''}
          />
        )
      })}
      <text x="200" y="210" textAnchor="middle" fill="#9d99bd" fontSize="11" fontFamily="Manrope, sans-serif">
        comparing index 3 and 4
      </text>
    </svg>
  )
}

const arts = { road: Road, eco: Eco, radar: Radar, bars: Bars }

export default function ProjectArt({ kind }) {
  const Art = arts[kind] || Road
  return <Art />
}
