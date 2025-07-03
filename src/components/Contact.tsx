import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-anime-lavender/10 via-white to-anime-pink/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-rubik font-bold text-gray-800 mb-6">
            Свяжитесь с нами! 📞
          </h2>
          <p className="text-lg font-open-sans text-gray-600 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Мы всегда рады новым знакомствам и
            интересным задачам!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-2 border-anime-blue/20 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="text-xl font-rubik font-semibold text-gray-800">
                      Email
                    </h3>
                    <p className="font-open-sans text-anime-purple">
                      hello@nekodev.studio
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-3xl">📱</div>
                  <div>
                    <h3 className="text-xl font-rubik font-semibold text-gray-800">
                      Telegram
                    </h3>
                    <p className="font-open-sans text-anime-purple">
                      @nekodev_team
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🌍</div>
                  <div>
                    <h3 className="text-xl font-rubik font-semibold text-gray-800">
                      Адрес
                    </h3>
                    <p className="font-open-sans text-gray-600">
                      Удалённо по всему миру
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-anime-pink/20 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-rubik font-semibold text-gray-800 mb-4">
                  Время работы ⏰
                </h3>
                <div className="space-y-2 font-open-sans text-gray-600">
                  <p>
                    <strong>Пн-Пт:</strong> 9:00 - 18:00
                  </p>
                  <p>
                    <strong>Сб:</strong> 10:00 - 16:00
                  </p>
                  <p>
                    <strong>Вс:</strong> Выходной (но отвечаем на сообщения!)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-anime-purple/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-rubik font-bold text-gray-800 mb-6 text-center">
                Расскажите о проекте 🚀
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-open-sans font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Как к вам обращаться?"
                    className="w-full px-4 py-3 border border-anime-lavender/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-anime-purple/50 focus:border-anime-purple transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-open-sans font-medium text-gray-700 mb-2">
                    Email или Telegram
                  </label>
                  <input
                    type="text"
                    placeholder="Как с вами связаться?"
                    className="w-full px-4 py-3 border border-anime-lavender/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-anime-purple/50 focus:border-anime-purple transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-open-sans font-medium text-gray-700 mb-2">
                    Описание проекта
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Расскажите о вашей идее... Мы воплотим её в жизнь! 💖"
                    className="w-full px-4 py-3 border border-anime-lavender/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-anime-purple/50 focus:border-anime-purple transition-all resize-none"
                  ></textarea>
                </div>

                <Button className="w-full bg-anime-purple hover:bg-anime-purple/90 text-white py-3 text-lg font-medium rounded-xl shadow-lg hover:shadow-anime-purple/25 transition-all">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </div>

              <div className="mt-6 text-center">
                <p className="font-open-sans text-sm text-gray-500">
                  Ответим в течение часа! 🐾
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
