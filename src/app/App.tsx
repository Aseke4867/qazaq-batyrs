import { useState } from "react";
import { MainMenu } from "@/app/components/MainMenu";
import { LevelSelect } from "@/app/components/LevelSelect";
import { QuizScreen } from "@/app/components/QuizScreen";
import { DialogueScreen } from "@/app/components/DialogueScreen";
import { LevelComplete } from "@/app/components/LevelComplete";
import { ProfileScreen } from "@/app/components/ProfileScreen";
import { FriendsScreen } from "@/app/components/FriendsScreen";

type Screen = 'menu' | 'levels' | 'quiz' | 'dialogue' | 'levelComplete' | 'profile' | 'friends';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('menu');
  const [xp, setXp] = useState(1250);
  const [earnedXP, setEarnedXP] = useState(0);

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handleStartLevel = (levelType: string) => {
    if (levelType === 'quiz') {
      setCurrentScreen('quiz');
    } else if (levelType === 'dialogue') {
      setCurrentScreen('dialogue');
    }
    // Add more level types as needed
  };

  const handleLevelComplete = (earned: number) => {
    setEarnedXP(earned);
    setXp(prev => prev + earned);
  };

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'menu':
        return <MainMenu onNavigate={handleNavigate} xp={xp} />;
      
      case 'levels':
        return <LevelSelect onNavigate={handleNavigate} onStartLevel={handleStartLevel} xp={xp} />;
      
      case 'quiz':
        return <QuizScreen onNavigate={handleNavigate} onComplete={handleLevelComplete} xp={xp} />;
      
      case 'dialogue':
        return <DialogueScreen onNavigate={handleNavigate} onComplete={handleLevelComplete} />;
      
      case 'levelComplete':
        return <LevelComplete onNavigate={handleNavigate} earnedXP={earnedXP} totalXP={xp} />;
      
      case 'profile':
        return <ProfileScreen onNavigate={handleNavigate} xp={xp} />;
      
      case 'friends':
        return <FriendsScreen onNavigate={handleNavigate} xp={xp} />;
      
      
      default:
        return <MainMenu onNavigate={handleNavigate} xp={xp} />;
    }
  };

  return renderScreen();
}
