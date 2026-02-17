import React from 'react';
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { KazakhOrnament } from "@/app/components/KazakhOrnament";
import { BatyrCharacter } from "@/app/components/BatyrCharacter";
import { ArrowLeft, Zap, Trophy, BookOpen, Mic, Award, Target } from "lucide-react";

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
  xp: number;
}

export function ProfileScreen({ onNavigate, xp }: ProfileScreenProps) {
  // здесь может быть логика useState, если нужно

  return (
    <div className="relative w-full min-h-[100dvh] overflow-y-auto bg-gradient-to-b from-blue-500 to-teal-500 p-4">
      {/* ← весь твой JSX отсюда и до конца */}

      {/* Заголовок с кнопкой назад */}
      <div className="flex items-center mb-6">
        <button 
          onClick={() => onNavigate('menu')}
          className="p-3 bg-white/20 rounded-full mr-4 text-white text-2xl"
        >
          ←
        </button>
        <h1 className="text-3xl font-bold text-white">Профиль</h1>
      </div>

      {/* Карточка профиля */}
      <div className="
        bg-white/95 backdrop-blur-md 
        rounded-3xl 
        p-5 sm:p-6 
        border-4 border-cyan-400 
        shadow-2xl 
        w-full 
        max-w-md 
        mx-auto
        overflow-hidden  // ← дополнительная защита от вылезания
      ">
        {/* Персонаж + имя/уровень/XP */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
          <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
            {/* здесь твой персонаж */}
            <div className="w-full h-full bg-amber-300 rounded-full flex items-center justify-center text-6xl">
              👦 {/* или <BatyrCharacter /> */}
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] break-words">
              Батыр
            </h2>
            <p className="text-xl text-[#40E0D0] mb-2">
              Денгей 3
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2 bg-yellow-100/80 rounded-lg px-4 py-2">
              <Zap className="w-6 h-6 text-yellow-600" />
              <span className="text-2xl font-bold text-yellow-800">
                {xp} XP
              </span>
            </div>
          </div>
        </div>

        {/* Прогресс */}
        <div className="mb-6">
          <p className="text-lg text-center text-gray-700 mb-2">
            Келесі деңгейге дейін 250 XP
          </p>
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-teal-500" 
              style={{ width: '70%' }} // замени на реальный %
            />
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-amber-100/80 rounded-2xl p-5 text-center border-2 border-amber-400">
            <div className="text-4xl font-bold text-amber-800 mb-1">75%</div>
            <p className="text-lg text-amber-700">Сөздік</p>
            <p className="text-sm text-green-600">+30% бұл аптада</p>
          </div>

          <div className="bg-pink-100/80 rounded-2xl p-5 text-center border-2 border-pink-400">
            <div className="text-4xl font-bold text-pink-800 mb-1">60%</div>
            <p className="text-lg text-pink-700">Сөйлеу</p>
            <p className="text-sm text-green-600">+25% бұл аптада</p>
          </div>
        </div>
      </div>

      {/* Нижний отступ */}
      <div className="h-20" />
    </div>
  );
}
