interface DombyraIconProps {
  className?: string;
}

export function DombyraIcon({ className = "" }: DombyraIconProps) {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 blur-md opacity-50 bg-[#FFD700] rounded-full"></div>
      
      <svg
        viewBox="0 0 100 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Traditional Kazakh Dombyra - two-stringed instrument */}
        
        {/* Body - pear-shaped */}
        <ellipse
          cx="50"
          cy="130"
          rx="35"
          ry="45"
          fill="#8B4513"
          stroke="#654321"
          strokeWidth="2"
        />
        
        {/* Sound hole */}
        <ellipse
          cx="50"
          cy="130"
          rx="12"
          ry="15"
          fill="#2C1810"
          opacity="0.8"
        />
        
        {/* Decorative rosette */}
        <circle cx="50" cy="130" r="18" stroke="#D4A373" strokeWidth="1" fill="none" opacity="0.6" />
        <circle cx="50" cy="130" r="22" stroke="#D4A373" strokeWidth="1" fill="none" opacity="0.4" />
        
        {/* Neck - long and thin */}
        <rect
          x="43"
          y="20"
          width="14"
          height="90"
          fill="#A0522D"
          stroke="#654321"
          strokeWidth="2"
          rx="2"
        />
        
        {/* Frets */}
        <line x1="43" y1="40" x2="57" y2="40" stroke="#654321" strokeWidth="1.5" />
        <line x1="43" y1="55" x2="57" y2="55" stroke="#654321" strokeWidth="1.5" />
        <line x1="43" y1="70" x2="57" y2="70" stroke="#654321" strokeWidth="1.5" />
        <line x1="43" y1="85" x2="57" y2="85" stroke="#654321" strokeWidth="1.5" />
        
        {/* Head/Pegbox */}
        <ellipse
          cx="50"
          cy="15"
          rx="12"
          ry="8"
          fill="#8B4513"
          stroke="#654321"
          strokeWidth="2"
        />
        
        {/* Tuning pegs */}
        <circle cx="42" cy="12" r="3" fill="#2C1810" stroke="#654321" strokeWidth="1" />
        <circle cx="58" cy="12" r="3" fill="#2C1810" stroke="#654321" strokeWidth="1" />
        
        {/* Strings - 2 strings characteristic of dombyra */}
        <line
          x1="46"
          y1="15"
          x2="46"
          y2="165"
          stroke="#F5DEB3"
          strokeWidth="1"
          opacity="0.8"
        />
        <line
          x1="54"
          y1="15"
          x2="54"
          y2="165"
          stroke="#F5DEB3"
          strokeWidth="1"
          opacity="0.8"
        />
        
        {/* Bridge */}
        <rect
          x="40"
          y="163"
          width="20"
          height="3"
          fill="#654321"
          rx="1"
        />
        
        {/* Decorative ornament on body */}
        <path
          d="M 50 110 L 55 115 L 50 120 L 45 115 Z"
          fill="#FFD700"
          opacity="0.6"
        />
        <circle cx="50" cy="145" r="3" fill="#40E0D0" opacity="0.7" />
      </svg>
    </div>
  );
}
