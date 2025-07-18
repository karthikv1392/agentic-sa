
import { ExternalLink, Mail } from "lucide-react";

const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Tutorial Speakers
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Prof. Henry Muccini */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">HM</span>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-2 text-gray-800">
                Prof. Henry Muccini
              </h3>
              <p className="text-purple-600 text-center mb-4 font-medium">
                University of L'Aquila, Italy
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Professor in Computer Science at the University of L'Aquila, Italy. His main research 
                interests are Software Architecture, Model-based/-driven Engineering, and Quality Assurance. 
                He is investigating how ML can be used for better architecting software systems and how to 
                architect ML applications. Currently highly involved in Agentic AI architectures research. 
                General co-chair of ICSA 2023, ECSA 2020, SC chair of ICSA, and member of the ECSA steering committee.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.henrymuccini.com/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors">
                  <ExternalLink size={16} />
                  <span>Profile</span>
                </a>
                <a href="mailto:henry.muccini@univaq.it" className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors">
                  <Mail size={16} />
                  <span>Contact</span>
                </a>
              </div>
            </div>

            {/* Karthik Vaidhyanathan */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">KV</span>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-2 text-gray-800">
                Karthik Vaidhyanathan
              </h3>
              <p className="text-blue-600 text-center mb-4 font-medium">
                SERC, IIIT-Hyderabad, India
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Assistant Professor at the Software Engineering Research Center, IIIT-Hyderabad. PhD from 
                Gran Sasso Science Institute, Italy, postdoc at University of L'Aquila. Research interests 
                lie in the intersection of software architecture and AI, focusing on sustainable and 
                self-adaptive software systems. Working on using Generative AI for improving software 
                architectural practices and agentic frameworks. 5+ years industrial experience.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://karthikvaidhyanathan.com/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ExternalLink size={16} />
                  <span>Profile</span>
                </a>
                <a href="mailto:karthik.vaidhyanathan@iiit.ac.in" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Mail size={16} />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              About the Collaboration
            </h3>
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              This tutorial brings together academic expertise and industry experience to provide 
              a comprehensive view of Software Architecture in the Age of Agentic AI. The collaboration 
              ensures both theoretical depth and practical applicability for conference attendees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
