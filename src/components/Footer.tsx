import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-anime-purple to-anime-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="text-2xl">🐱</div>
              <h3 className="text-xl font-rubik font-bold">NekoDev</h3>
            </div>
            <p className="font-open-sans text-white/80 text-sm">
              Веб-разработка с душой аниме. Создаём сайты, которые влюбляют с
              первого клика.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <h4 className="font-rubik font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 font-open-sans text-sm text-white/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Портфолио
                </a>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="text-center md:text-right">
            <h4 className="font-rubik font-semibold mb-4">Соцсети</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Icon name="Github" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-open-sans text-white/60 text-sm">
            © 2024 NekoDev. Создано с 💖 для цифрового мира.
          </p>
        </div>
      </div>
    </footer>
  );
}
