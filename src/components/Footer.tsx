
import { Mail, ExternalLink, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Tutorial Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Tutorial Information</h3>
              <p className="text-gray-300 mb-4">
                Software Architecture in the Age of Agentic AI
              </p>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>ECSA 2025, Cyprus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ExternalLink size={16} />
                  <a href="#" className="hover:text-white transition-colors">
                    <a href="https://conf.researchr.org/home/ecsa-2025" target="_blank" rel="noopener noreferrer">Conference Website</a>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button 
                    onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Tutorial Overview
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Speakers
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Schedule
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Resources
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-300 mb-4">
                For questions about the tutorial or to discuss collaboration opportunities.
              </p>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Mail size={16} />
                <a href="mailto:karthik.vaidhyanathan@iiit.ac.in">karthik.vaidhyanathan@iiit.ac.in</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              © 2025 Software Architecture in the Age of Agentic AI Tutorial. 
              Co-located with ECSA 2025, Cyprus.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
