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
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#87CEEB] to-[#D4A373] flex items-center justify-center">
      {/* Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Steppe Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764521970660-fc4d6e493425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXpha2hzdGFuJTIwc3RlcHBlJTIwZ29sZGVuJTIwZ3Jhc3MlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY5OTY2NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Steppe landscape"
            className="w-full h-full object-cover blur-sm opacity-40"
          />
        </div>
        
        {/* Flying Eagle */}
        <div className="absolute top-20 right-12 w-20 h-20 opacity-35 animate-pulse" style={{ animationDuration: '4s' }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1698073118617-03ce7d0f9847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYWdsZSUyMGZseWluZyUyMHNreXxlbnwxfHx8fDE3Njk5NjY1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Eagle"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-md h-full flex flex-col px-6 py-8">
        
        {/* XP Display */}
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 border-3 border-[#FFD700] shadow-lg">
            <Zap className="w-6 h-6 text-[#FFA500]" />
            <span className="text-xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
              {xp} XP
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="relative mb-8">
          <KazakhOrnament className="absolute -top-4 -left-4 w-20 h-20 text-[#FFD700] opacity-80" />
          <KazakhOrnament className="absolute -top-4 -right-4 w-20 h-20 text-[#FFD700] opacity-80 scale-x-[-1]" />
          
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border-4 border-[#40E0D0] shadow-2xl">
            <div className="text-center">
              <h1 className="text-5xl text-[#1E3A8A] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
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
          <BatyrCharacter />
        </div>

        {/* Menu Buttons */}
        <div className="flex-1 flex flex-col gap-4 mb-6">
          {menuButtons.map((button) => {
            const Icon = button.icon;
            return (
              <button
                key={button.id}
                onClick={() => onNavigate(button.screen)}
                className="relative group"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${button.color} rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition-all`}></div>
                
                <div className={`relative bg-gradient-to-r ${button.color} rounded-2xl px-8 py-5 flex items-center justify-between border-3 border-white shadow-lg hover:scale-105 transition-transform`}>
                  {/* Ornament */}
                  <KazakhOrnament className="w-10 h-10 text-white opacity-60" />
                  
                  {/* Text */}
                  <div className="flex-1 text-center">
                    <p className="text-2xl text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                      {button.label}
                    </p>
                    <p className="text-sm text-white/80" style={{ fontFamily: 'Georgia, serif' }}>
                      {button.labelEn}
                    </p>
                  </div>
                  
                  {/* Icon */}
                  <Icon className="w-10 h-10 text-white" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Decorative Dombyra */}
        <div className="flex justify-center opacity-70">
          <DombyraIcon className="w-16 h-16 text-[#8B4513]" />
        </div>
      </div>
    </div>
  );
}
