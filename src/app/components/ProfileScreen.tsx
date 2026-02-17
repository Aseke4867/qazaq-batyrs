import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { KazakhOrnament } from "@/app/components/KazakhOrnament";
import { BatyrCharacter } from "@/app/components/BatyrCharacter";
import { ArrowLeft, Zap, Trophy, BookOpen, Mic, Award, Target } from "lucide-react";

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
  xp: number;
}

export function ProfileScreen({ onNavigate, xp }: ProfileScreenProps) {
  const stats = {
    vocabulary: 75, // percentage
    speaking: 60,
    listening: 55,
    grammar: 40,
    totalWords: 142,
    lessonsCompleted: 8,
    streak: 5,
    level: Math.floor(xp / 500) + 1
  };

  const achievements = [
    { id: 1, title: 'Бірінші қадам', description: 'Complete first lesson', earned: true, icon: '🎯' },
    { id: 2, title: 'Сөз шебері', description: 'Learn 100 words', earned: true, icon: '📚' },
    { id: 3, title: 'Батыр', description: 'Reach Level 5', earned: false, icon: '⚔️' },
    { id: 4, title: 'Қонақжай', description: 'Complete dialogue mission', earned: true, icon: '🏠' },
  ];

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
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md h-full flex flex-col px-6 py-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onNavigate('menu')}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border-2 border-[#40E0D0] shadow-lg hover:scale-110 transition-transform"
          >
            <ArrowLeft className="w-6 h-6 text-[#1E3A8A]" />
          </button>
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 border-3 border-[#FFD700] shadow-lg">
            <h1 className="text-2xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
              Профиль
            </h1>
          </div>
          
          <div className="w-12"></div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4">
          
          {/* Character & Level */}
          <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 border-4 border-[#40E0D0] shadow-2xl">
            <KazakhOrnament className="absolute -top-3 -left-3 w-12 h-12 text-[#FFD700]" />
            <KazakhOrnament className="absolute -top-3 -right-3 w-12 h-12 text-[#FFD700] scale-x-[-1]" />
            
            <div className="flex items-center gap-4">
              <div className="scale-50 origin-left">
                <BatyrCharacter />
              </div>
              
              <div className="flex-1">
                <h2 className="text-3xl text-[#1E3A8A] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                  Батыр
                </h2>
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-lg text-[#40E0D0]" style={{ fontFamily: 'Georgia, serif' }}>
                    Деңгей {stats.level}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#FFA500]" />
                  <span className="text-xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                    {xp} XP
                  </span>
                </div>
              </div>
            </div>

            {/* Progress to next level */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-[#1E3A8A] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                <span>Келесі деңгейге дейін</span>
                <span>{500 - (xp % 500)} XP</span>
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-[#40E0D0] to-[#20B2AA] h-3 rounded-full transition-all"
                  style={{ width: `${(xp % 500) / 5}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Vocabulary */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border-3 border-[#8B4513] shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-6 h-6 text-[#8B4513]" />
                <span className="text-sm text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                  Сөздік
                </span>
              </div>
              <div className="text-3xl text-[#1E3A8A] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                {stats.vocabulary}%
              </div>
              <div className="text-xs text-[#40E0D0]" style={{ fontFamily: 'Georgia, serif' }}>
                +30% бұл аптада
              </div>
            </div>

            {/* Speaking */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border-3 border-[#FF6B9D] shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Mic className="w-6 h-6 text-[#FF6B9D]" />
                <span className="text-sm text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                  Сөйлеу
                </span>
              </div>
              <div className="text-3xl text-[#1E3A8A] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                {stats.speaking}%
              </div>
              <div className="text-xs text-[#40E0D0]" style={{ fontFamily: 'Georgia, serif' }}>
                +25% бұл аптада
              </div>
            </div>

            {/* Total Words */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border-3 border-[#40E0D0] shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-6 h-6 text-[#40E0D0]" />
                <span className="text-sm text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                  Сөздер
                </span>
              </div>
              <div className="text-3xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                {stats.totalWords}
              </div>
            </div>

            {/* Streak */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border-3 border-[#FFA500] shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🔥</span>
                <span className="text-sm text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                  Тізбек
                </span>
              </div>
              <div className="text-3xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                {stats.streak} күн
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border-3 border-[#FFD700] shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-[#FFD700]" />
              <h3 className="text-xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                Жетістіктер / Achievements
              </h3>
            </div>

            <div className="space-y-2">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`rounded-xl p-3 border-2 flex items-center gap-3 ${
                    achievement.earned
                      ? 'bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 border-[#FFD700]'
                      : 'bg-gray-100 border-gray-300 opacity-60'
                  }`}
                >
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <p className="text-lg text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                      {achievement.title}
                    </p>
                    <p className="text-xs text-[#40E0D0]" style={{ fontFamily: 'Georgia, serif' }}>
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.earned && (
                    <div className="text-[#22C55E] text-xl">✓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
