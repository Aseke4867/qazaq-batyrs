import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { KazakhOrnament } from "@/app/components/KazakhOrnament";
import { BatyrCharacter } from "@/app/components/BatyrCharacter";
import { Zap, Star, TrendingUp, RotateCcw, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface LevelCompleteProps {
  onNavigate: (screen: string) => void;
  earnedXP: number;
  totalXP: number;
}

export function LevelComplete({ onNavigate, earnedXP, totalXP }: LevelCompleteProps) {
  const [displayXP, setDisplayXP] = useState(0);

  useEffect(() => {
    // Animate XP counting
    let current = 0;
    const increment = earnedXP / 30;
    const timer = setInterval(() => {
      current += increment;
      if (current >= earnedXP) {
        setDisplayXP(earnedXP);
        clearInterval(timer);
      } else {
        setDisplayXP(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [earnedXP]);

  const vocabularyIncrease = 30; // 30% increase
  const speakingIncrease = 25; // 25% increase

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#87CEEB] to-[#D4A373] flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764521970660-fc4d6e493425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXpha2hzdGFuJTIwc3RlcHBlJTIwZ29sZGVuJTIwZ3Jhc3MlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY5OTY2NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Steppe landscape"
            className="w-full h-full object-cover blur-sm opacity-40"
          />
        </div>
        
        {/* Celebration sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#FFD700] rounded-full animate-pulse opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md h-full flex flex-col px-6 py-8">
        
        {/* Success Title */}
        <div className="relative mb-6">
          <KazakhOrnament className="absolute -top-4 -left-4 w-20 h-20 text-[#FFD700] opacity-80 animate-pulse" />
          <KazakhOrnament className="absolute -top-4 -right-4 w-20 h-20 text-[#FFD700] opacity-80 scale-x-[-1] animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border-4 border-[#22C55E] shadow-2xl">
            <div className="text-center">
              <div className="text-6xl mb-3">🎉</div>
              <h1 className="text-4xl text-[#1E3A8A] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Тамаша!
              </h1>
              <p className="text-lg text-[#40E0D0]" style={{ fontFamily: 'Georgia, serif' }}>
                Level Complete!
              </p>
            </div>
          </div>
          
          <KazakhOrnament className="absolute -bottom-4 -left-4 w-20 h-20 text-[#FFD700] opacity-80 scale-y-[-1] animate-pulse" style={{ animationDelay: '1s' }} />
          <KazakhOrnament className="absolute -bottom-4 -right-4 w-20 h-20 text-[#FFD700] opacity-80 scale-[-1] animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Character Celebration */}
        <div className="flex justify-center mb-6">
          <div className="animate-bounce" style={{ animationDuration: '1s' }}>
            <BatyrCharacter />
          </div>
        </div>

        {/* XP Earned */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#FFD700] blur-2xl opacity-50 rounded-3xl"></div>
          <div className="relative bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-3xl p-6 border-4 border-white shadow-2xl">
            <div className="flex items-center justify-center gap-4">
              <Zap className="w-12 h-12 text-white" />
              <div className="text-center">
                <p className="text-sm text-white/80" style={{ fontFamily: 'Georgia, serif' }}>
                  Алынған XP / Earned XP
                </p>
                <p className="text-5xl text-white" style={{ fontFamily: 'Georgia, serif' }}>
                  +{displayXP}
                </p>
              </div>
              <Zap className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="space-y-3 mb-6">
          {/* Total XP */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 border-3 border-[#40E0D0] shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-[#FFD700]" />
                <div>
                  <p className="text-sm text-[#40E0D0]" style={{ fontFamily: 'Georgia, serif' }}>
                    Жалпы XP / Total XP
                  </p>
                  <p className="text-2xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                    {totalXP}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vocabulary Progress */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 border-3 border-[#8B4513] shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#22C55E]" />
                <div className="flex-1">
                  <p className="text-sm text-[#8B4513]" style={{ fontFamily: 'Georgia, serif' }}>
                    Сөздік қоры / Vocabulary
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${vocabularyIncrease}%` }}
                      ></div>
                    </div>
                    <span className="text-lg text-[#22C55E]" style={{ fontFamily: 'Georgia, serif' }}>
                      +{vocabularyIncrease}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Speaking Progress */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 border-3 border-[#FF6B9D] shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#FF6B9D]" />
                <div className="flex-1">
                  <p className="text-sm text-[#8B4513]" style={{ fontFamily: 'Georgia, serif' }}>
                    Сөйлеу / Speaking
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#FF6B9D] to-[#E05780] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${speakingIncrease}%` }}
                      ></div>
                    </div>
                    <span className="text-lg text-[#FF6B9D]" style={{ fontFamily: 'Georgia, serif' }}>
                      +{speakingIncrease}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Retry */}
          <button
            onClick={() => onNavigate('levels')}
            className="relative flex-1 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513] to-[#654321] rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition-all"></div>
            <div className="relative bg-gradient-to-br from-[#A0522D] to-[#8B4513] rounded-2xl px-6 py-4 flex items-center justify-center gap-2 border-3 border-white shadow-lg hover:scale-105 transition-transform">
              <RotateCcw className="w-6 h-6 text-white" />
              <span className="text-lg text-white" style={{ fontFamily: 'Georgia, serif' }}>
                Қайталау
              </span>
            </div>
          </button>

          {/* Next */}
          <button
            onClick={() => onNavigate('levels')}
            className="relative flex-1 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition-all"></div>
            <div className="relative bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-2xl px-6 py-4 flex items-center justify-center gap-2 border-3 border-white shadow-lg hover:scale-105 transition-transform">
              <span className="text-lg text-white" style={{ fontFamily: 'Georgia, serif' }}>
                Келесі
              </span>
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
