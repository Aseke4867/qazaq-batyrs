import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { KazakhOrnament } from "@/app/components/KazakhOrnament";
import { ArrowLeft, Star, Lock } from "lucide-react";

interface LevelSelectProps {
  onNavigate: (screen: string) => void;
  onStartLevel: (levelType: string) => void;
  xp: number;
}

export function LevelSelect({ onNavigate, onStartLevel, xp }: LevelSelectProps) {
  const levels = [
    {
      id: 'quiz',
      title: 'Викторина',
      titleEn: 'Quiz',
      description: 'Сөздерді Аудар',
      xpRequired: 0,
      color: 'from-[#40E0D0] to-[#20B2AA]',
      stars: 1
    },
    {
      id: 'dialogue',
      title: 'Диалог',
      titleEn: 'Dialogue',
      description: 'Қонақ күту',
      xpRequired: 0,
      color: 'from-[#FFD700] to-[#DAA520]',
      stars: 2
    },
    {
  id: 'fillInTheBlanks',
  title: 'Сөйлемді толтыру',
  titleEn: 'Fill in the Sentence',
  description: 'Жетіспейтін сөзді таңдаңыз',
  xpRequired: 200,
  color: 'from-[#8B5CF6] to-[#7C3AED]',
  stars: 3
}
  ];

  return (
    <div className="
      relative 
      w-full 
      min-h-[100dvh]                  // ← фикс высоты + адаптация под мобильные
      overflow-y-auto 
      overflow-x-hidden 
      bg-gradient-to-b from-[#87CEEB] to-[#D4A373] 
      flex 
      flex-col 
      items-center 
      px-4 sm:px-6 py-6
    ">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764521970660-fc4d6e493425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXpha2hzdGFuJTIwc3RlcHBlJTIwZ29sZGVuJTIwZ3Jhc3MlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY5OTY2NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Steppe landscape"
            className="w-full h-full object-cover blur-sm opacity-40"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onNavigate('menu')}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border-2 border-[#40E0D0] shadow-lg hover:scale-110 transition-transform"
          >
            <ArrowLeft className="w-6 h-6 text-[#1E3A8A]" />
          </button>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 border-3 border-[#FFD700] shadow-lg">
            <h1 className="text-2xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
              Деңгейлер
            </h1>
          </div>
          
          <div className="w-12"></div>
        </div>

        {/* Levels List — теперь со скроллом */}
        <div className="flex-1 flex flex-col gap-5 overflow-y-auto pb-6">
          {levels.map((level) => {
            const isLocked = xp < level.xpRequired;

            return (
              <button
                key={level.id}
                onClick={() => !isLocked && onStartLevel(level.id)}
                disabled={isLocked}
                className={`relative group ${isLocked ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${level.color} rounded-2xl blur-md opacity-40 ${!isLocked && 'group-hover:opacity-70'} transition-all`}></div>
                
                <div className={`relative bg-gradient-to-r ${level.color} rounded-2xl px-5 py-5 border-3 border-white shadow-lg ${!isLocked && 'hover:scale-105'} transition-transform`}>
                  <KazakhOrnament className="absolute -top-3 -left-3 w-10 h-10 text-white opacity-50" />
                  <KazakhOrnament className="absolute -bottom-3 -right-3 w-10 h-10 text-white opacity-50 scale-[-1]" />
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-left flex-1">
                      <h2 className="text-xl sm:text-2xl text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                        {level.title}
                      </h2>
                      <p className="text-sm text-white/80" style={{ fontFamily: 'Georgia, serif' }}>
                        {level.titleEn}
                      </p>
                    </div>
                    
                    {isLocked ? (
                      <Lock className="w-8 h-8 text-white" />
                    ) : (
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 sm:w-6 sm:h-6 ${i < level.stars ? 'text-[#FFD700] fill-[#FFD700]' : 'text-white/40'}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-white/90 text-base sm:text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                    {level.description}
                  </p>
                  
                  {isLocked && (
                    <div className="mt-3 text-white/70 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                      Қажет: {level.xpRequired} XP
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
