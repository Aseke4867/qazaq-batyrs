interface KazakhOrnamentProps {
  className?: string;
}

export function KazakhOrnament({ className = "" }: KazakhOrnamentProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Traditional Kazakh ornamental pattern - symmetric design */}
      
      {/* Outer circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Inner decorative elements */}
      <path
        d="M 50 5 Q 60 15 50 25 Q 40 15 50 5 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M 95 50 Q 85 60 75 50 Q 85 40 95 50 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M 50 95 Q 60 85 50 75 Q 40 85 50 95 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M 5 50 Q 15 60 25 50 Q 15 40 5 50 Z"
        fill="currentColor"
        opacity="0.8"
      />
      
      {/* Center star/flower pattern */}
      <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.3" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      
      {/* Decorative curved lines */}
      <path
        d="M 35 35 Q 25 25 30 15"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M 65 35 Q 75 25 70 15"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M 65 65 Q 75 75 70 85"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M 35 65 Q 25 75 30 85"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}
