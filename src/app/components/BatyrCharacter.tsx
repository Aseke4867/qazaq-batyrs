export function BatyrCharacter() {
  return (
    <div 
      className="relative"
      style={{
        animation: 'gentleBounce 3s infinite ease-in-out', // мягкий низкий прыжок на всех экранах
      }}
    >
      <svg
        width="280"
        height="320"
        viewBox="0 0 280 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        {/* Shadow */}
        <ellipse cx="140" cy="310" rx="60" ry="8" fill="rgba(0,0,0,0.2)" />

        {/* Body - Chunky shape with Shapan (traditional robe) */}
        <path
          d="M 140 160 L 100 180 L 90 260 L 100 280 L 180 280 L 190 260 L 180 180 Z"
          fill="#DC2626"
          stroke="#991B1B"
          strokeWidth="3"
        />

        {/* Shapan decorative belt */}
        <rect x="95" y="190" width="90" height="12" fill="#FFD700" stroke="#B8860B" strokeWidth="2" />
        <circle cx="140" cy="196" r="6" fill="#DAA520" stroke="#8B6914" strokeWidth="1" />

        {/* Arms */}
        <ellipse cx="85" cy="185" rx="18" ry="35" fill="#DC2626" stroke="#991B1B" strokeWidth="2" transform="rotate(-20 85 185)" />
        <ellipse cx="195" cy="185" rx="18" ry="35" fill="#DC2626" stroke="#991B1B" strokeWidth="2" transform="rotate(20 195 185)" />

        {/* Hands */}
        <circle cx="75" cy="210" r="12" fill="#D4A373" stroke="#8B6914" strokeWidth="2" />
        <circle cx="205" cy="210" r="12" fill="#D4A373" stroke="#8B6914" strokeWidth="2" />

        {/* Legs - simple boots */}
        <rect x="110" y="275" width="25" height="35" rx="4" fill="#4A2511" stroke="#2C1810" strokeWidth="2" />
        <rect x="145" y="275" width="25" height="35" rx="4" fill="#4A2511" stroke="#2C1810" strokeWidth="2" />

        {/* Head - Large chibi proportions */}
        <circle cx="140" cy="100" r="65" fill="#D4A373" stroke="#8B6914" strokeWidth="3" />

        {/* Boryk (traditional hat) - pointed at top */}
        <ellipse cx="140" cy="50" rx="55" ry="25" fill="#8B4513" stroke="#654321" strokeWidth="3" />
        <path
          d="M 95 50 Q 140 20 185 50 L 175 55 Q 140 30 105 55 Z"
          fill="#A0522D"
          stroke="#654321"
          strokeWidth="2"
        />

        {/* Hat decorative band */}
        <ellipse cx="140" cy="70" rx="58" ry="8" fill="#FFD700" stroke="#B8860B" strokeWidth="2" />

        {/* Fur trim on hat */}
        <ellipse cx="140" cy="75" rx="60" ry="6" fill="#F5F5DC" opacity="0.8" />

        {/* Face - Friendly heroic expression */}
        {/* Eyes */}
        <ellipse cx="115" cy="95" rx="8" ry="12" fill="#2C1810" />
        <ellipse cx="165" cy="95" rx="8" ry="12" fill="#2C1810" />
        {/* Eye shine */}
        <circle cx="117" cy="92" r="3" fill="white" />
        <circle cx="167" cy="92" r="3" fill="white" />

        {/* Eyebrows - heroic */}
        <path
          d="M 105 82 Q 115 78 125 80"
          stroke="#2C1810"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 155 80 Q 165 78 175 82"
          stroke="#2C1810"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Smile */}
        <path
          d="M 120 115 Q 140 125 160 115"
          stroke="#2C1810"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Rosy cheeks */}
        <circle cx="105" cy="108" r="8" fill="#FF6B9D" opacity="0.4" />
        <circle cx="175" cy="108" r="8" fill="#FF6B9D" opacity="0.4" />

        {/* Neck */}
        <rect x="125" y="165" width="30" height="20" fill="#D4A373" />

        {/* Shapan collar — опущен ниже */}
        <path
          d="M 105 175 L 115 165 L 165 165 L 175 175"
          fill="#8B0000"
          stroke="#660000"
          strokeWidth="2"
        />

        {/* Decorative ornamental pattern on chest */}
        <circle cx="140" cy="215" r="8" fill="#FFD700" opacity="0.7" />
        <circle cx="125" cy="225" r="5" fill="#40E0D0" opacity="0.7" />
        <circle cx="155" cy="225" r="5" fill="#40E0D0" opacity="0.7" />
      </svg>
    </div>
  );
}
