
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            Agentic AI Tutorial
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('overview')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Overview
            </button>
            <button 
              onClick={() => scrollToSection('speakers')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Speakers
            </button>
            <button 
              onClick={() => scrollToSection('schedule')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Schedule
            </button>
            <button 
              onClick={() => scrollToSection('resources')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Resources
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('overview')}
                className="text-left text-gray-600 hover:text-purple-600 transition-colors"
              >
                Overview
              </button>
              <button 
                onClick={() => scrollToSection('speakers')}
                className="text-left text-gray-600 hover:text-purple-600 transition-colors"
              >
                Speakers
              </button>
              <button 
                onClick={() => scrollToSection('schedule')}
                className="text-left text-gray-600 hover:text-purple-600 transition-colors"
              >
                Schedule
              </button>
              <button 
                onClick={() => scrollToSection('resources')}
                className="text-left text-gray-600 hover:text-purple-600 transition-colors"
              >
                Resources
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
