import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { KazakhOrnament } from "@/app/components/KazakhOrnament";
import { BatyrCharacter } from "@/app/components/BatyrCharacter";
import { NPCCharacter } from "@/app/components/NPCCharacter";
import { SpeechBubble } from "@/app/components/SpeechBubble";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

interface DialogueScreenProps {
  onNavigate: (screen: string) => void;
  onComplete: (earnedXP: number) => void;
}

export function DialogueScreen({ onNavigate, onComplete }: DialogueScreenProps) {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalXP, setTotalXP] = useState(0);

  const dialogueSteps = [
    {
      npcText: "Сәлеметсіз бе?",
      prompt: "Қалай жауап бересіз? / How will you respond?",
      choices: [
        { id: 1, text: "Қош келдіңіз!", isCorrect: true, xp: 50 },
        { id: 2, text: "Ас ішіңіз?", isCorrect: false, xp: 0 },
      ]
    },
    {
      npcText: "Рақмет! Аман-сау ма?",
      prompt: "Жалғастырыңыз / Continue:",
      choices: [
        { id: 1, text: "Жақсы, рақмет!", isCorrect: true, xp: 50 },
        { id: 2, text: "Сау болыңыз!", isCorrect: false, xp: 0 },
      ]
    },
    {
      npcText: "Шай ішесіз бе?",
      prompt: "Қонақжайлылықты қабылдаңыз / Accept hospitality:",
      choices: [
        { id: 1, text: "Иә, рақмет!", isCorrect: true, xp: 50 },
        { id: 2, text: "Жоқ, рақмет!", isCorrect: false, xp: 0 },
      ]
    },
    {
      npcText: "Қош! Қайта келіңіз!",
      prompt: "Қоштасу / Say goodbye:",
      choices: [
        { id: 1, text: "Сау болыңыз!", isCorrect: true, xp: 50 },
        { id: 2, text: "Сәлем!", isCorrect: false, xp: 0 },
      ]
    }
  ];

  const currentDialogue = dialogueSteps[currentStep];
  const maxSteps = dialogueSteps.length;

  const handleContinue = () => {
    if (selectedChoice === null) return;
    const choice = currentDialogue.choices.find(c => c.id === selectedChoice);
    const earnedXP = choice?.xp || 0;
    setTotalXP(prev => prev + earnedXP);
    if (currentStep < maxSteps - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedChoice(null);
    } else {
      const bonusXP = 100;
      onComplete(totalXP + earnedXP + bonusXP);
      onNavigate('levelComplete');
    }
  };

  return (
    <div className="
      relative
      w-full
      min-h-[100dvh]
      overflow-y-auto
      overflow-x-hidden
      bg-gradient-to-b from-[#D4A373] to-[#E8C9A0]  // лёгкий градиент, можно убрать если хочешь совсем однотонный
      flex
      flex-col
      items-center
      px-4 sm:px-6 py-6
    ">
      {/* Простой фон: только интерьер юрты */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1579776722778-8365fa4c3f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5dXJ0JTIwaW50ZXJpb3IlMjBjYXJwZXQlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3Njk5Njc4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Yurt interior"
            className="w-full h-full object-cover opacity-70"  // opacity=70% — мягкий, но видимый фон
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-md flex flex-col gap-6">
        {/* Top Bar */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => onNavigate('levels')}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border-2 border-[#40E0D0] shadow-lg hover:scale-110 transition-transform"
            >
              <ArrowLeft className="w-5 h-5 text-[#1E3A8A]" />
            </button>
            
            <div className="flex-1 relative bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 border-3 border-[#FFD700] shadow-lg">
              <KazakhOrnament className="absolute -top-3 -left-3 w-12 h-12 text-[#FFD700]" />
              <KazakhOrnament className="absolute -top-3 -right-3 w-12 h-12 text-[#FFD700] scale-x-[-1]" />
              
              <div className="flex items-center justify-between">
                <h1 className="text-2xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                  Қонақ күту
                </h1>
                
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(maxSteps)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-2 rounded-full ${i <= currentStep ? 'bg-[#40E0D0]' : 'bg-gray-300'}`}
                      ></div>
                    ))}
                  </div>
                  <span className="text-sm text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                    {currentStep + 1}/{maxSteps}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Characters + Choices */}
        <div className="flex-1 flex flex-col gap-6 overflow-y-auto pb-6">
          {/* NPC + speech bubble */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <NPCCharacter />
            </div>
            <div className="flex-1 mt-8">
              <SpeechBubble
                text={currentDialogue.npcText}
                hasAudio={true}
                onAudioClick={() => console.log('Play audio')}
              />
            </div>
          </div>

          {/* Player Character */}
          <div className="flex justify-end pr-4">
            <div className="scale-90 origin-bottom-right">
              <BatyrCharacter />
            </div>
          </div>

          {/* Prompt + Choices */}
          <p className="text-sm text-[#1E3A8A] text-center mb-3 px-4 py-2 bg-white/70 rounded-lg" style={{ fontFamily: 'Georgia, serif' }}>
            {currentDialogue.prompt}
          </p>

          {currentDialogue.choices.map((choice) => {
            const isSelected = selectedChoice === choice.id;
            return (
              <button
                key={choice.id}
                onClick={() => setSelectedChoice(choice.id)}
                className={`relative w-full group transition-all ${
                  isSelected ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                {isSelected && (
                  <div className="absolute inset-0 bg-[#40E0D0] rounded-2xl blur-lg opacity-40"></div>
                )}
                <div className={`relative rounded-2xl px-5 py-4 flex items-center justify-between border-3 shadow-lg transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#40E0D0] to-[#20B2AA] border-[#FFD700]'
                    : 'bg-white/85 border-[#FFD700] hover:bg-white/95'
                }`}>
                  <KazakhOrnament className={`w-8 h-8 opacity-60 ${
                    isSelected ? 'text-white' : 'text-[#8B4513]'
                  }`} />
                  
                  <span className={`text-xl flex-1 text-center ${
                    isSelected ? 'text-white' : 'text-[#1E3A8A]'
                  }`} style={{ fontFamily: 'Georgia, serif' }}>
                    {choice.text}
                  </span>
                  
                  <KazakhOrnament className={`w-8 h-8 opacity-60 scale-x-[-1] ${
                    isSelected ? 'text-white' : 'text-[#8B4513]'
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Continue Button */}
        <div className="flex justify-center pb-6">
          <button
            disabled={!selectedChoice}
            onClick={handleContinue}
            className={`relative group ${!selectedChoice && 'opacity-50 cursor-not-allowed'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-all"></div>
            <div className="relative bg-gradient-to-br from-[#FFD700] to-[#DAA520] rounded-2xl px-12 py-4 flex items-center gap-3 border-3 border-white shadow-lg hover:scale-105 transition-transform">
              <span className="text-xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
                {currentStep < maxSteps - 1 ? 'Жалғастыру / Continue' : 'Аяқтау / Finish'}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
