import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { KazakhOrnament } from "@/app/components/KazakhOrnament";
import { Clock, Star, Zap, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

interface FillInTheBlanksScreenProps {
  onNavigate: (screen: string) => void;
  onComplete: (earnedXP: number) => void;
  xp: number;
}

export function FillInTheBlanksScreen({ onNavigate, onComplete, xp }: FillInTheBlanksScreenProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showXPPopup, setShowXPPopup] = useState(false);
  const [timer, setTimer] = useState(15);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      sentence: "Менің атым ____.",
      translation: "My name is ____.",
      blank: "____",
      answers: [
        { id: "A", text: "Ана", isCorrect: false },
        { id: "B", text: "Қожа", isCorrect: true },
        { id: "C", text: "Әке", isCorrect: false },
        { id: "D", text: "Бала", isCorrect: false },
      ]
    },
    {
      sentence: "Бүгінгі ____ өте ыстық.",
      translation: "Today is very hot.",
      blank: "____",
      answers: [
        { id: "A", text: "күн", isCorrect: true },
        { id: "B", text: "түн", isCorrect: false },
        { id: "C", text: "ай", isCorrect: false },
        { id: "D", text: "жұлдыз", isCorrect: false },
      ]
    },
    {
      sentence: "Мен ____ ішкім келеді.",
      translation: "I want to drink ____.",
      blank: "____",
      answers: [
        { id: "A", text: "шай", isCorrect: true },
        { id: "B", text: "нан", isCorrect: false },
        { id: "C", text: "ет", isCorrect: false },
        { id: "D", text: "кітап", isCorrect: false },
      ]
    },
    {
      sentence: "Біз ____ сабақ оқиймыз.",
      translation: "We study at ____.",
      blank: "____",
      answers: [
        { id: "A", text: "мектепте", isCorrect: true },
        { id: "B", text: "далада", isCorrect: false },
        { id: "C", text: "дүкенде", isCorrect: false },
        { id: "D", text: "ауруханада", isCorrect: false },
      ]
    }
  ];

  const currentQ = questions[currentQuestion];

  useEffect(() => {
    if (timer > 0 && !showResult) {
      const interval = setInterval(() => {
        setTimer(t => t - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !showResult) {
      handleTimeout();
    }
  }, [timer, showResult]);

  const handleTimeout = () => {
    setShowResult(true);
  };

  const handleAnswer = (answerId: string) => {
    if (showResult) return;

    setSelectedAnswer(answerId);
    const answer = currentQ.answers.find(a => a.id === answerId);

    setShowResult(true);

    if (answer?.isCorrect) {
      setScore(prev => prev + 100);
      setShowXPPopup(true);
      setTimeout(() => setShowXPPopup(false), 2000);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimer(15);
    } else {
      const earnedXP = score + 100; // бонус за завершение
      onComplete(earnedXP);
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
      bg-gradient-to-b from-[#87CEEB] to-[#D4A373]
      flex
      flex-col
      items-center
      px-4 sm:px-6 py-6
    ">
      {/* Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1637842729600-d256c8960194?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Steppe landscape"
            className="w-full h-full object-cover blur-sm opacity-40"
          />
        </div>
        <div className="absolute top-20 right-12 w-20 h-20 opacity-35 animate-pulse" style={{ animationDuration: '4s' }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1698073118617-03ce7d0f9847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYWdsZSUyMGZseWluZyUyMHNreXxlbnwxfHx8fDE3Njk5NjY1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Eagle"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-md flex flex-col gap-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6 gap-3">
          <button
            onClick={() => onNavigate('levels')}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border-2 border-[#40E0D0] shadow-lg hover:scale-110 transition-transform"
          >
            <ArrowLeft className="w-5 h-5 text-[#1E3A8A]" />
          </button>
          {/* Timer */}
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 border-2 border-[#FFD700] shadow-lg">
            <Clock className={`w-5 h-5 ${timer <= 3 ? 'text-[#DC2626] animate-pulse' : 'text-[#1E3A8A]'}`} />
            <span className="text-xl text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>{timer}</span>
          </div>
          {/* Score */}
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 border-2 border-[#40E0D0] shadow-lg">
            <Star className="w-5 h-5 text-[#FFD700]" />
            <span className="text-lg text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>{score}</span>
          </div>
          {/* Progress */}
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 border-2 border-[#8B4513] shadow-lg">
            <span className="text-lg text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
              {currentQuestion + 1}/{questions.length}
            </span>
          </div>
        </div>

        {/* Question Card — предложение с пропуском */}
        <div className="relative mb-6">
          <KazakhOrnament className="absolute -top-4 -left-4 w-16 h-16 text-[#FFD700] opacity-90 z-10" />
          <KazakhOrnament className="absolute -top-4 -right-4 w-16 h-16 text-[#FFD700] opacity-90 scale-x-[-1] z-10" />
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-4 border-[#40E0D0] shadow-2xl">
            <div className="text-center">
              <p className="text-lg text-[#40E0D0] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {currentQ.translation}
              </p>
              <h2 className="text-2xl sm:text-3xl text-[#1E3A8A] mb-4 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                {currentQ.sentence.replace("____", "________")}
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-4"></div>
            </div>
          </div>
          <KazakhOrnament className="absolute -bottom-4 -left-4 w-16 h-16 text-[#FFD700] opacity-90 scale-y-[-1] z-10" />
          <KazakhOrnament className="absolute -bottom-4 -right-4 w-16 h-16 text-[#FFD700] opacity-90 scale-[-1] z-10" />
        </div>

        {/* Answer Buttons */}
        <div className="flex-1 flex flex-col gap-4 mb-6 overflow-y-auto">
          {currentQ.answers.map((answer) => {
            const isSelected = selectedAnswer === answer.id;
            const isCorrect = answer.isCorrect && isSelected && showResult;
            const isWrong = isSelected && !answer.isCorrect && showResult;
            return (
              <button
                key={answer.id}
                onClick={() => handleAnswer(answer.id)}
                disabled={showResult}
                className={`relative group transition-all ${
                  isCorrect ? 'scale-105' : isWrong ? 'scale-95' : 'hover:scale-102'
                }`}
              >
                {isCorrect && (
                  <div className="absolute inset-0 bg-[#22C55E] rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                )}
                {isWrong && (
                  <div className="absolute inset-0 bg-[#DC2626] rounded-2xl blur-lg opacity-50"></div>
                )}
                <div className={`relative rounded-2xl px-5 py-4 flex items-center gap-4 border-4 shadow-lg transition-all ${
                  isCorrect
                    ? 'bg-gradient-to-r from-[#22C55E] to-[#16A34A] border-[#15803D]'
                    : isWrong
                    ? 'bg-gradient-to-r from-[#DC2626] to-[#B91C1C] border-[#991B1B]'
                    : isSelected
                    ? 'bg-white/90 border-[#40E0D0]'
                    : 'bg-white/80 border-[#FFD700] hover:bg-white/95'
                }`}>
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      isCorrect || isWrong
                        ? 'bg-white border-white text-[#1E3A8A]'
                        : 'bg-gradient-to-br from-[#40E0D0] to-[#20B2AA] border-[#FFD700] text-white'
                    }`}>
                      <span className="text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                        {answer.id}
                      </span>
                    </div>
                  </div>
                  <span className={`text-xl sm:text-2xl flex-1 text-left ${
                    isCorrect || isWrong ? 'text-white' : 'text-[#1E3A8A]'
                  }`} style={{ fontFamily: 'Georgia, serif' }}>
                    {answer.text}
                  </span>
                  {isCorrect && <div className="flex-shrink-0 text-white text-2xl">✓</div>}
                  {isWrong && <div className="flex-shrink-0 text-white text-2xl">✗</div>}
                  <KazakhOrnament className={`absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 opacity-40 ${
                    isCorrect || isWrong ? 'text-white' : 'text-[#8B4513]'
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* XP Popup */}
        {showXPPopup && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 animate-bounce">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FFD700] blur-2xl opacity-70 rounded-full"></div>
              <div className="relative bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl px-8 py-4 border-4 border-white shadow-2xl">
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8 text-white" />
                  <span className="text-4xl text-white" style={{ fontFamily: 'Georgia, serif' }}>
                    +100 XP
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Кнопка Next */}
        <div className="flex justify-center pb-6">
          {showResult && (
            <button onClick={handleNext} className="relative group">
              <div className="absolute inset-0 bg-[#22C55E] rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-all"></div>
              <div className="relative bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-2xl px-8 py-4 flex items-center gap-3 border-3 border-white shadow-lg hover:scale-105 transition-transform">
                <span className="text-lg text-white" style={{ fontFamily: 'Georgia, serif' }}>
                  {currentQuestion < questions.length - 1 ? 'Келесі / Next' : 'Аяқтау / Finish'}
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
