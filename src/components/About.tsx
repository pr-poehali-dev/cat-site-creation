import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const team = [
    {
      name: "Нику-сан",
      role: "Lead Developer",
      emoji: "🐱‍💻",
      specialty: "React & TypeScript",
    },
    {
      name: "Сакура-чан",
      role: "UI/UX Designer",
      emoji: "🐱‍🎨",
      specialty: "Anime-стиль дизайна",
    },
    {
      name: "Хироши-кун",
      role: "Backend Developer",
      emoji: "🐱‍⚡",
      specialty: "API & Databases",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-anime-blue/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-rubik font-bold text-gray-800 mb-6">
            О нашей команде 🌸
          </h2>
          <p className="text-lg font-open-sans text-gray-600 max-w-2xl mx-auto">
            Мы — команда котов-разработчиков, которые живут кодом и дышат аниме.
            Каждый проект для нас — это новое приключение в мире технологий!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-2 border-anime-pink/20 hover:border-anime-pink/40 transition-all hover:transform hover:scale-105 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-rubik font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-anime-purple font-medium mb-3">
                  {member.role}
                </p>
                <p className="font-open-sans text-gray-600 text-sm">
                  {member.specialty}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-anime-lavender/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-rubik font-bold text-gray-800 mb-6">
                Почему выбирают NekoDev? 💖
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-anime-purple text-xl">🎯</span>
                  <div>
                    <strong className="font-open-sans font-semibold text-gray-800">
                      Индивидуальный подход
                    </strong>
                    <p className="font-open-sans text-gray-600 text-sm mt-1">
                      Каждый проект уникален, как отпечаток лапки
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-anime-purple text-xl">⏰</span>
                  <div>
                    <strong className="font-open-sans font-semibold text-gray-800">
                      Соблюдаем сроки
                    </strong>
                    <p className="font-open-sans text-gray-600 text-sm mt-1">
                      Точность как у швейцарских часов
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-anime-purple text-xl">💝</span>
                  <div>
                    <strong className="font-open-sans font-semibold text-gray-800">
                      Поддержка 24/7
                    </strong>
                    <p className="font-open-sans text-gray-600 text-sm mt-1">
                      Всегда готовы помочь и поддержать
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🌟</div>
              <p className="font-open-sans text-gray-600 italic">
                "Программирование — это искусство, а мы — художники цифрового
                мира"
              </p>
              <div className="mt-4 text-anime-purple font-medium">
                — Философия NekoDev
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
