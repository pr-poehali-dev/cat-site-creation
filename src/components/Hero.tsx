import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-anime-blue via-white to-anime-lavender">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-16 h-16 bg-anime-pink/20 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-32 right-20 w-12 h-12 bg-anime-purple/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-20 h-20 bg-anime-peach/20 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-14 h-14 bg-anime-lavender/30 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main cat character */}
          <div className="mb-8 relative">
            <div className="text-8xl mb-4 animate-pulse">🐱‍💻</div>
            <div className="absolute -top-4 -right-4 text-2xl animate-spin">
              ✨
            </div>
            <div className="absolute -bottom-2 -left-4 text-xl animate-bounce">
              💖
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-rubik font-bold text-gray-800 mb-6 leading-tight">
            Веб-разработка с
            <span className="text-anime-purple block mt-2">душой аниме 🌸</span>
          </h1>

          <p className="text-lg md:text-xl font-open-sans text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Создаём сайты и приложения, которые влюбляют пользователей с первого
            клика. Команда котов-программистов готова воплотить ваши мечты в
            код!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-anime-purple hover:bg-anime-purple/90 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-anime-purple/25 transition-all"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать проект
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-anime-purple text-anime-purple hover:bg-anime-purple hover:text-white px-8 py-3 text-lg font-medium rounded-full transition-all"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть портфолио
            </Button>
          </div>

          {/* Features preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-anime-pink/20 hover:border-anime-pink/40 transition-all hover:transform hover:scale-105">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-rubik font-semibold text-gray-800 mb-2">
                Уникальный дизайн
              </h3>
              <p className="font-open-sans text-gray-600 text-sm">
                Каждый сайт — произведение искусства
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-anime-blue/20 hover:border-anime-blue/40 transition-all hover:transform hover:scale-105">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-rubik font-semibold text-gray-800 mb-2">
                Молниеносная скорость
              </h3>
              <p className="font-open-sans text-gray-600 text-sm">
                Быстрая загрузка на любых устройствах
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-anime-lavender/20 hover:border-anime-lavender/40 transition-all hover:transform hover:scale-105">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-rubik font-semibold text-gray-800 mb-2">
                Современные технологии
              </h3>
              <p className="font-open-sans text-gray-600 text-sm">
                React, TypeScript, самые новые фреймворки
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
