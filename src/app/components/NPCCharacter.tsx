export function NPCCharacter() {
  return (
    <div className="relative">
      <svg
        width="220"
        height="260"
        viewBox="0 0 220 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-xl"
      >
        {/* Shadow */}
        <ellipse cx="110" cy="250" rx="45" ry="6" fill="rgba(0,0,0,0.2)" />
        
        {/* Body - Traditional Clothing */}
        <path
          d="M 110 130 L 75 145 L 68 210 L 75 230 L 145 230 L 152 210 L 145 145 Z"
          fill="#1E3A8A"
          stroke="#0F1F4F"
          strokeWidth="2.5"
        />
        
        {/* Decorative vest */}
        <path
          d="M 95 145 L 90 160 L 90 200 L 130 200 L 130 160 L 125 145"
          fill="#8B4513"
          stroke="#654321"
          strokeWidth="2"
        />
        
        {/* Gold embroidery on vest */}
        <circle cx="100" cy="170" r="4" fill="#FFD700" />
        <circle cx="120" cy="170" r="4" fill="#FFD700" />
        <circle cx="110" cy="185" r="4" fill="#FFD700" />
        
        {/* Arms */}
        <ellipse cx="60" cy="155" rx="14" ry="30" fill="#1E3A8A" stroke="#0F1F4F" strokeWidth="2" transform="rotate(-15 60 155)" />
        <ellipse cx="160" cy="155" rx="14" ry="30" fill="#1E3A8A" stroke="#0F1F4F" strokeWidth="2" transform="rotate(15 160 155)" />
        
        {/* Hands */}
        <circle cx="52" cy="180" r="10" fill="#D4A373" stroke="#8B6914" strokeWidth="2" />
        <circle cx="168" cy="180" r="10" fill="#D4A373" stroke="#8B6914" strokeWidth="2" />
        
        {/* Legs */}
        <rect x="85" y="225" width="20" height="30" rx="3" fill="#2C1810" stroke="#1C1008" strokeWidth="2" />
        <rect x="115" y="225" width="20" height="30" rx="3" fill="#2C1810" stroke="#1C1008" strokeWidth="2" />
        
        {/* Head */}
        <circle cx="110" cy="80" r="50" fill="#D4A373" stroke="#8B6914" strokeWidth="2.5" />
        
        {/* Traditional hat/headscarf */}
        <ellipse cx="110" cy="45" rx="45" ry="20" fill="#40E0D0" stroke="#20B2AA" strokeWidth="2.5" />
        <path
          d="M 70 45 Q 110 25 150 45 L 145 50 Q 110 32 75 50 Z"
          fill="#5FE8D8"
          stroke="#20B2AA"
          strokeWidth="2"
        />
        
        {/* Decorative band on hat */}
        <ellipse cx="110" cy="62" rx="47" ry="6" fill="#FFD700" stroke="#B8860B" strokeWidth="1.5" />
        
        {/* Face - Kind expression */}
        {/* Eyes */}
        <ellipse cx="90" cy="78" rx="6" ry="9" fill="#2C1810" />
        <ellipse cx="130" cy="78" rx="6" ry="9" fill="#2C1810" />
        {/* Eye shine */}
        <circle cx="92" cy="76" r="2" fill="white" />
        <circle cx="132" cy="76" r="2" fill="white" />
        
        {/* Eyebrows - gentle */}
        <path
          d="M 82 68 Q 90 65 98 67"
          stroke="#2C1810"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 122 67 Q 130 65 138 68"
          stroke="#2C1810"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Smile */}
        <path
          d="M 95 95 Q 110 102 125 95"
          stroke="#2C1810"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Rosy cheeks */}
        <circle cx="82" cy="88" r="6" fill="#FF6B9D" opacity="0.4" />
        <circle cx="138" cy="88" r="6" fill="#FF6B9D" opacity="0.4" />
        
        {/* Neck */}
        <rect x="98" y="125" width="24" height="15" fill="#D4A373" />
        
        {/* Collar */}
        <path
          d="M 80 135 L 90 127 L 130 127 L 140 135"
          fill="#0F1F4F"
          stroke="#060D28"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
