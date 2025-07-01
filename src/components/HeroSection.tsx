
import { Calendar, MapPin, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Software Architecture
          </h1>
          <h2 className="text-3xl md:text-5xl font-light mb-8 animate-fade-in">
            in the Age of{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-bold">
              Agentic AI
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Calendar className="h-6 w-6" />
              <span className="text-lg">ECSA 2025</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <MapPin className="h-6 w-6" />
              <span className="text-lg">Cyprus</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-6 w-6" />
              <span className="text-lg">Tutorial</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto animate-fade-in">
            Explore how Agentic AI is revolutionizing software architecture patterns, 
            design principles, and development practices in this comprehensive tutorial.
          </p>

          <button 
            onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 animate-fade-in"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
