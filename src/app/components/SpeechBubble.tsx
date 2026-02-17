import { KazakhOrnament } from "./KazakhOrnament";

interface SpeechBubbleProps {
  text: string;
  isPlayer?: boolean;
  hasAudio?: boolean;
  onAudioClick?: () => void;
}

export function SpeechBubble({ text, isPlayer = false, hasAudio = false, onAudioClick }: SpeechBubbleProps) {
  return (
    <div className={`relative ${isPlayer ? 'ml-4' : 'mr-4'}`}>
      <div className={`relative bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 border-3 shadow-xl ${
        isPlayer ? 'border-[#40E0D0]' : 'border-[#FFD700]'
      }`}>
        {/* Ornamental corner */}
        <KazakhOrnament className={`absolute ${
          isPlayer ? '-left-3 -top-3' : '-right-3 -top-3 scale-x-[-1]'
        } w-10 h-10 text-[#FFD700] opacity-70`} />
        
        <p className="text-xl text-[#1E3A8A] relative z-10" style={{ fontFamily: 'Georgia, serif' }}>
          {text}
        </p>
        
        {/* Audio waveform icon */}
        {hasAudio && (
          <button 
            onClick={onAudioClick}
            className="absolute -bottom-2 -right-2 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full p-3 border-2 border-white shadow-lg hover:scale-110 transition-transform"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="6" width="2" height="8" rx="1" fill="white" className="animate-pulse" style={{ animationDelay: '0ms' }} />
              <rect x="5" y="3" width="2" height="14" rx="1" fill="white" className="animate-pulse" style={{ animationDelay: '100ms' }} />
              <rect x="9" y="5" width="2" height="10" rx="1" fill="white" className="animate-pulse" style={{ animationDelay: '200ms' }} />
              <rect x="13" y="2" width="2" height="16" rx="1" fill="white" className="animate-pulse" style={{ animationDelay: '300ms' }} />
              <rect x="17" y="7" width="2" height="6" rx="1" fill="white" className="animate-pulse" style={{ animationDelay: '400ms' }} />
            </svg>
          </button>
        )}
      </div>
      
      {/* Speech bubble tail */}
      <div className={`absolute ${
        isPlayer ? 'left-4 -bottom-2' : 'right-4 -bottom-2'
      }`}>
        <div className={`w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] ${
          isPlayer ? 'border-l-transparent border-r-[#40E0D0] border-t-[#40E0D0]' : 'border-l-[#FFD700] border-r-transparent border-t-[#FFD700]'
        }`}></div>
      </div>
    </div>
  );
}
