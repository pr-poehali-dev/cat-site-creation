import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-anime-lavender/20 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl">🐱</div>
          <h1 className="text-xl font-rubik font-bold text-anime-purple">
            NekoDev
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="font-open-sans text-gray-700 hover:text-anime-purple transition-colors"
          >
            Главная
          </a>
          <a
            href="#about"
            className="font-open-sans text-gray-700 hover:text-anime-purple transition-colors"
          >
            О нас
          </a>
          <a
            href="#contact"
            className="font-open-sans text-gray-700 hover:text-anime-purple transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="hidden sm:flex border-anime-purple text-anime-purple hover:bg-anime-purple hover:text-white"
          >
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>

          <Button className="md:hidden" variant="ghost" size="sm">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
}
