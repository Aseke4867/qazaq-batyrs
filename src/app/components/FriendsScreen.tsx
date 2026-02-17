import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { KazakhOrnament } from "@/app/components/KazakhOrnament";
import { ArrowLeft, Trophy, Zap, Swords, Crown } from "lucide-react";

interface FriendsScreenProps {
  onNavigate: (screen: string) => void;
  xp: number;
}

export function FriendsScreen({ onNavigate, xp }: FriendsScreenProps) {
  const friends = [
    { 
      id: 1, 
      name: 'Айгерім', 
      avatar: '👩',
      level: 8, 
      xp: 2450, 
      streak: 12,
      challenge: 'Викторина - 5 деңгей',
      status: 'online'
    },
    { 
      id: 2, 
      name: 'Нұрлан', 
      avatar: '👨',
      level: 6, 
      xp: 1820, 
      streak: 7,
      challenge: 'Диалог - Қонақ күту',
      status: 'online'
    },
    { 
      id: 3, 
      name: 'Самал', 
      avatar: '👧',
      level: 5, 
      xp: 1350, 
      streak: 5,
      challenge: null,
      status: 'offline'
    },
    { 
      id: 4, 
      name: 'Арман', 
      avatar: '👦',
      level: 4, 
      xp: 980, 
      streak: 3,
      challenge: 'Сөздік - 50 сөз',
      status: 'offline'
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Айгерім', xp: 2450, avatar: '👩' },
    { rank: 2, name: 'Сіз', xp: xp, avatar: '⚔️', isCurrentUser: true },
    { rank: 3, name: 'Нұрлан', xp: 1820, avatar: '👨' },
    { rank: 4, name: 'Самал', xp: 1350, avatar: '👧' },
    { rank: 5, name: 'Арман', xp: 980, avatar: '👦' },
  ].sort((a, b) => b.xp - a.xp).map((item, index) => ({ ...item, rank: index + 1 }));

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
              Достар
            </h1>
          </div>
          
          <div className="w-12"></div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4">
          
          {/* Leaderboard */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border-3 border-[#FFD700] shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-6 h-6 text-[#FFD700]" />
              <h3 className="text-xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                Рейтинг / Leaderboard
              </h3>
            </div>

            <div className="space-y-2">
              {leaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className={`rounded-xl p-3 border-2 flex items-center gap-3 ${
                    entry.isCurrentUser
                      ? 'bg-gradient-to-r from-[#40E0D0]/30 to-[#20B2AA]/30 border-[#40E0D0]'
                      : entry.rank === 1
                      ? 'bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 border-[#FFD700]'
                      : 'bg-white/50 border-gray-300'
                  }`}
                >
                  {/* Rank */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    entry.rank === 1 ? 'bg-[#FFD700]' : 
                    entry.rank === 2 ? 'bg-[#C0C0C0]' :
                    entry.rank === 3 ? 'bg-[#CD7F32]' :
                    'bg-gray-300'
                  }`}>
                    {entry.rank === 1 ? (
                      <Crown className="w-5 h-5 text-white" />
                    ) : (
                      <span className="text-sm text-white" style={{ fontFamily: 'Georgia, serif' }}>
                        {entry.rank}
                      </span>
                    )}
                  </div>

                  {/* Avatar */}
                  <span className="text-3xl">{entry.avatar}</span>

                  {/* Info */}
                  <div className="flex-1">
                    <p className={`text-lg ${entry.isCurrentUser ? 'text-[#40E0D0]' : 'text-[#1E3A8A]'}`} style={{ fontFamily: 'Georgia, serif' }}>
                      {entry.name}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-[#8B4513]">
                      <Zap className="w-4 h-4 text-[#FFA500]" />
                      <span style={{ fontFamily: 'Georgia, serif' }}>{entry.xp} XP</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Friends List */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border-3 border-[#40E0D0] shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">👥</span>
              <h3 className="text-xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                Достарым / My Friends
              </h3>
            </div>

            <div className="space-y-3">
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  className="bg-white rounded-xl p-4 border-2 border-[#FFD700] shadow-md"
                >
                  <div className="flex items-start gap-3 mb-2">
                    {/* Avatar with status */}
                    <div className="relative">
                      <span className="text-4xl">{friend.avatar}</span>
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        friend.status === 'online' ? 'bg-[#22C55E]' : 'bg-gray-400'
                      }`}></div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                          {friend.name}
                        </p>
                        <div className="flex items-center gap-1 text-sm">
                          <Trophy className="w-4 h-4 text-[#FFD700]" />
                          <span className="text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                            {friend.level}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-[#8B4513] mb-2">
                        <div className="flex items-center gap-1">
                          <Zap className="w-3 h-3 text-[#FFA500]" />
                          <span style={{ fontFamily: 'Georgia, serif' }}>{friend.xp} XP</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>🔥</span>
                          <span style={{ fontFamily: 'Georgia, serif' }}>{friend.streak} күн</span>
                        </div>
                      </div>

                      {/* Challenge */}
                      {friend.challenge ? (
                        <button className="w-full bg-gradient-to-r from-[#FF6B9D] to-[#E05780] rounded-lg px-3 py-2 flex items-center justify-between border-2 border-white shadow-sm hover:scale-102 transition-transform">
                          <div className="flex items-center gap-2">
                            <Swords className="w-4 h-4 text-white" />
                            <span className="text-sm text-white" style={{ fontFamily: 'Georgia, serif' }}>
                              {friend.challenge}
                            </span>
                          </div>
                          <span className="text-xs text-white/80" style={{ fontFamily: 'Georgia, serif' }}>
                            Қабылдау
                          </span>
                        </button>
                      ) : (
                        <button className="w-full bg-gradient-to-r from-[#40E0D0] to-[#20B2AA] rounded-lg px-3 py-2 flex items-center justify-center gap-2 border-2 border-white shadow-sm hover:scale-102 transition-transform">
                          <Swords className="w-4 h-4 text-white" />
                          <span className="text-sm text-white" style={{ fontFamily: 'Georgia, serif' }}>
                            Челлендж жіберу
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Friend Button */}
          <button className="w-full relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513] to-[#654321] rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition-all"></div>
            <div className="relative bg-gradient-to-br from-[#A0522D] to-[#8B4513] rounded-2xl px-6 py-4 flex items-center justify-center gap-2 border-3 border-white shadow-lg hover:scale-105 transition-transform">
              <span className="text-xl">➕</span>
              <span className="text-lg text-white" style={{ fontFamily: 'Georgia, serif' }}>
                Дос қосу / Add Friend
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
