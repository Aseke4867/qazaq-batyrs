return (
  <div className="relative w-full min-h-[100dvh] overflow-y-auto bg-gradient-to-b from-blue-500 to-teal-500 p-4">
    {/* Фон или декор, если есть — оставь как есть */}
    
    {/* Заголовок с кнопкой назад */}
    <div className="flex items-center mb-6">
      <button 
        onClick={() => onNavigate('menu')}
        className="p-3 bg-white/20 rounded-full mr-4"
      >
        ←
      </button>
      <h1 className="text-3xl font-bold text-white">Профиль</h1>
    </div>

    {/* Главная карточка профиля — теперь полностью адаптивная */}
    <div className="
      bg-white/95 backdrop-blur-md 
      rounded-3xl 
      p-5 sm:p-6 
      border-4 border-cyan-400 
      shadow-2xl 
      w-full 
      max-w-md 
      mx-auto
    ">
      {/* Верхняя часть: персонаж + имя/уровень/XP */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
        {/* Персонаж слева или сверху */}
        <div className="flex-shrink-0">
          {/* твой персонаж */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 relative">
            {/* здесь BatyrCharacter или img */}
            <img 
              src="/path/to/batyr.png" 
              alt="Батыр" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Инфо справа или снизу */}
        <div className="flex-1 text-center sm:text-left w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] break-words">
            Батыр {/* имя */}
          </h2>
          <p className="text-xl text-[#40E0D0] mb-2">
            Денгей {level || 3} {/* уровень */}
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-2 bg-yellow-100/80 rounded-lg px-4 py-2">
            <Zap className="w-6 h-6 text-yellow-600" />
            <span className="text-2xl font-bold text-yellow-800">
              {xp} XP
            </span>
          </div>
        </div>
      </div>

      {/* Прогресс до следующего уровня */}
      <div className="mb-6">
        <p className="text-lg text-center text-gray-700 mb-2">
          Келесі деңгейге дейін 250 XP
        </p>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-teal-500" 
            style={{ width: '70%' }} // подставь реальный прогресс
          />
        </div>
      </div>

      {/* Статистика навыков */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Сөздік */}
        <div className="bg-brown-100/80 rounded-2xl p-5 text-center border-2 border-brown-400">
          <div className="text-4xl font-bold text-brown-800 mb-1">75%</div>
          <p className="text-lg text-brown-700">Сөздік</p>
          <p className="text-sm text-green-600">+30% бұл аптада</p>
        </div>

        {/* Сөйлеу */}
        <div className="bg-pink-100/80 rounded-2xl p-5 text-center border-2 border-pink-400">
          <div className="text-4xl font-bold text-pink-800 mb-1">60%</div>
          <p className="text-lg text-pink-700">Сөйлеу</p>
          <p className="text-sm text-green-600">+25% бұл аптада</p>
        </div>
      </div>
    </div>

    {/* Дополнительный отступ снизу, если нужно */}
    <div className="h-20" />
  </div>
);
