import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { KazakhOrnament } from "@/app/components/KazakhOrnament";
import { DombyraIcon } from "@/app/components/DombyraIcon";
import { ArrowLeft, Zap, ShoppingCart, Lock } from "lucide-react";

interface ShopScreenProps {
  onNavigate: (screen: string) => void;
  xp: number;
}

export function ShopScreen({ onNavigate, xp }: ShopScreenProps) {
  const shopItems = [
    {
      id: 1,
      name: 'Алтын боряк',
      nameEn: 'Golden Hat',
      description: 'Батырдың арнайы боряғы',
      icon: '👑',
      price: 500,
      category: 'costume'
    },
    {
      id: 2,
      name: 'Домбыра',
      nameEn: 'Dombra',
      description: 'Музыкалық құрал',
      icon: '🎵',
      price: 300,
      category: 'item'
    },
    {
      id: 3,
      name: 'Қымыз',
      nameEn: 'Kumis',
      description: 'Энергия толтыру (+100 XP)',
      icon: '🥛',
      price: 150,
      category: 'boost'
    },
    {
      id: 4,
      name: 'Қалпақ',
      nameEn: 'Traditional Cap',
      description: 'Қазақ киімі',
      icon: '🎩',
      price: 400,
      category: 'costume'
    },
    {
      id: 5,
      name: 'Домбыра сабағы',
      nameEn: 'Dombra Lesson',
      description: 'Қосымша музыкалық сабақ',
      icon: '📚',
      price: 800,
      category: 'lesson',
      locked: true
    },
    {
      id: 6,
      name: 'Қос XP',
      nameEn: 'Double XP',
      description: '24 сағат қосарланған XP',
      icon: '⚡',
      price: 1000,
      category: 'boost'
    },
    {
      id: 7,
      name: 'Тулпар',
      nameEn: 'Tulpar Horse',
      description: 'Мифтік ат - жылдам оқу',
      icon: '🐴',
      price: 2000,
      category: 'special',
      locked: true
    },
    {
      id: 8,
      name: 'Қылыш',
      nameEn: 'Sword',
      description: 'Батырдың қылышы',
      icon: '⚔️',
      price: 1500,
      category: 'item',
      locked: true
    },
  ];

  const canAfford = (price: number) => xp >= price;

  const categoryColors: Record<string, string> = {
    costume: 'from-[#FF6B9D] to-[#E05780]',
    item: 'from-[#40E0D0] to-[#20B2AA]',
    boost: 'from-[#FFD700] to-[#DAA520]',
    lesson: 'from-[#8B4513] to-[#654321]',
    special: 'from-[#9333EA] to-[#7E22CE]'
  };

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
          
          <div className="flex-1 flex justify-center">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 border-3 border-[#FFD700] shadow-lg">
              <h1 className="text-2xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                Дүкен
              </h1>
            </div>
          </div>

          {/* XP Display */}
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 border-2 border-[#FFD700] shadow-lg">
            <Zap className="w-5 h-5 text-[#FFA500]" />
            <span className="text-lg text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
              {xp}
            </span>
          </div>
        </div>

        {/* Shop Items Grid */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-2 gap-3 pb-4">
            {shopItems.map((item) => {
              const affordable = canAfford(item.price);
              const isLocked = item.locked;
              
              return (
                <button
                  key={item.id}
                  disabled={!affordable || isLocked}
                  className={`relative group ${!affordable || isLocked ? 'opacity-60' : ''}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${categoryColors[item.category]} rounded-2xl blur-md opacity-40 ${affordable && !isLocked && 'group-hover:opacity-70'} transition-all`}></div>
                  
                  <div className={`relative bg-gradient-to-r ${categoryColors[item.category]} rounded-2xl p-4 border-3 border-white shadow-lg ${affordable && !isLocked && 'hover:scale-105'} transition-transform`}>
                    <KazakhOrnament className="absolute -top-2 -left-2 w-8 h-8 text-white opacity-40" />
                    
                    {/* Lock indicator */}
                    {isLocked && (
                      <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1">
                        <Lock className="w-4 h-4 text-[#8B4513]" />
                      </div>
                    )}

                    {/* Icon */}
                    <div className="text-5xl mb-2 text-center">
                      {item.icon}
                    </div>

                    {/* Name */}
                    <h3 className="text-lg text-white text-center mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                      {item.name}
                    </h3>
                    <p className="text-xs text-white/80 text-center mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {item.nameEn}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-white/90 text-center mb-3 min-h-[2.5rem]" style={{ fontFamily: 'Georgia, serif' }}>
                      {item.description}
                    </p>

                    {/* Price */}
                    <div className={`flex items-center justify-center gap-1 bg-white/20 rounded-lg px-3 py-2 ${
                      !affordable && !isLocked ? 'border-2 border-[#DC2626]' : ''
                    }`}>
                      <Zap className="w-4 h-4 text-white" />
                      <span className="text-lg text-white" style={{ fontFamily: 'Georgia, serif' }}>
                        {item.price}
                      </span>
                    </div>

                    {/* Buy button */}
                    {!isLocked && (
                      <div className="mt-2 flex items-center justify-center">
                        <div className={`bg-white/30 rounded-lg px-3 py-1 ${affordable && 'group-hover:bg-white/50'} transition-all`}>
                          <div className="flex items-center gap-1">
                            <ShoppingCart className="w-4 h-4 text-white" />
                            <span className="text-sm text-white" style={{ fontFamily: 'Georgia, serif' }}>
                              {affordable ? 'Сатып алу' : 'Жеткіліксіз'}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {isLocked && (
                      <div className="mt-2 text-center">
                        <span className="text-xs text-white/70" style={{ fontFamily: 'Georgia, serif' }}>
                          Жабық
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Decorative Dombyra */}
        <div className="flex justify-center mt-4 opacity-70">
          <DombyraIcon className="w-12 h-12 text-[#8B4513]" />
        </div>
      </div>
    </div>
  );
}
