import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { KazakhOrnament } from "@/app/components/KazakhOrnament";
import { DombyraIcon } from "@/app/components/DombyraIcon";
import { BatyrCharacter } from "@/app/components/BatyrCharacter";
import { Play, User, Users, Zap } from "lucide-react";

interface MainMenuProps {
  onNavigate: (screen: string) => void;
  xp: number;
}

export function MainMenu({ onNavigate, xp }: MainMenuProps) {
  const menuButtons = [
    { id: 'levels', icon: Play, label: 'Ойнау', labelEn: 'Play', color: 'from-[#40E0D0] to-[#20B2AA]', screen: 'levels' },
    { id: 'profile', icon: User, label: 'Профиль', labelEn: 'Profile', color: 'from-[#FFD700] to-[#DAA520]', screen: 'profile' },
    { id: 'friends', icon: Users, label: 'Достар', labelEn: 'Friends', color: 'from-[#FF6B9D] to-[#E05780]', screen: 'friends' },
  ];

  return (
    <div 
      className="
        relative 
        w-full 
        min-h-[100dvh]                  // ← заменил h-screen на min-h-[100dvh]
        overflow-y-auto                  // ← разрешил вертикальный скролл
        overflow-x-hidden                // ← запретил горизонтальный
        bg-gradient-to-b from-[#87CEEB] to-[#D4A373] 
        flex 
        flex-col 
        items-center 
        justify-start                    // ← justify-start вместо center, чтобы контент шёл сверху
        px-4 sm:px-6 py-6                // ← уменьшил padding для мобильных
      "
    >
      {/* Background Layer — оставил, но сделал его не фиксированным */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Steppe Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764521970660-fc4d6e493425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXpha2hzdGFuJTIwc3RlcHBlJTIwZ29sZGVuJTIwZ3Jhc3MlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY5OTY2NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Steppe landscape"
            className="w-full h-full object-cover blur-sm opacity-40"
          />
        </div>

        {/* Flying Eagle */}
        <div className="absolute top-20 right-12 w-40 h-40 animate-pulse" style={{ animationDuration: '4s' }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1698073118617-03ce7d0f9847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYWdsZSUyMGZseWluZyUyMHNreXxlbnwxfHx8fDE3Njk5NjY1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Eagle"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-md flex flex-col gap-6">
        {/* XP Display */}
        <div className="flex justify-end">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 border-3 border-[#FFD700] shadow-lg">
            <Zap className="w-6 h-6 text-[#FFA500]" />
            <span className="text-xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
              {xp} XP
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="relative">
          <KazakhOrnament className="absolute -top-4 -left-4 w-16 h-16 text-[#FFD700] opacity-80" />
          <KazakhOrnament className="absolute -top-4 -right-4 w-16 h-16 text-[#FFD700] opacity-80 scale-x-[-1]" />
          
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border-4 border-[#40E0D0] shadow-2xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl text-[#1E3A8A] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Qazaq Batyrs
              </h1>
              <p className="text-lg text-[#40E0D0]" style={{ fontFamily: 'Georgia, serif' }}>
                Қазақ тілін үйрен / Learn Kazakh
              </p>
            </div>
          </div>
        </div>

{/* Character */}
<div className="flex justify-center mb-8">
  <div 
    style={{
      animation: 'gentleBounceMain 3.5s infinite ease-in-out',  // медленнее и ниже
    }}
  >
    <BatyrCharacter />
  </div>
</div>

        {/* Menu Buttons */}
        <div className="flex flex-col gap-5">
          {menuButtons.map((button) => {
            const Icon = button.icon;
            return (
              <button
                key={button.id}
                onClick={() => onNavigate(button.screen)}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${button.color} rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition-all`}></div>
                
                <div className={`relative bg-gradient-to-r ${button.color} rounded-2xl px-6 py-4 flex items-center justify-between border-3 border-white shadow-lg hover:scale-105 transition-transform`}>
                  <KazakhOrnament className="w-8 h-8 text-white opacity-60" />
                  
                  <div className="flex-1 text-center">
                    <p className="text-xl text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                      {button.label}
                    </p>
                    <p className="text-xs text-white/80" style={{ fontFamily: 'Georgia, serif' }}>
                      {button.labelEn}
                    </p>
                  </div>
                  
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Decorative Dombyra */}
        <div className="flex justify-center opacity-70 mt-4">
          <DombyraIcon className="w-14 h-14 text-[#8B4513]" />
        </div>
      </div>
    </div>
  );
}
