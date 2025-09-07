
import { Clock, Coffee, Presentation, Users, Wrench } from "lucide-react";

const ScheduleSection = () => {
  const schedule = [
    {
      time: "14:00 - 14:05",
      title: "Welcome",
      description: "Tutorial overview and speaker introductions",
      icon: Users,
      type: "intro"
    },
    {
      time: "14:05 - 14:30",
      title: "Session 1: Introducing Software Architecture for ML (SAML)",
      description: "Introduction to basic concepts in ML-enabled systems (10 mins) • Challenges in architecting AI-enabled systems through a case study (10 mins)",
      icon: Presentation,
      type: "session"
    },
    {
      time: "14:30 - 15:30",
      title: "Session 2: LLMs for Software Architecture (LLM4SA)",
      description: "LLM for Software Architecture and terminology",
      icon: Presentation,
      type: "session"
    },
    {
      time: "15:30 - 16:00",
      title: "Coffee Break",
      description: "Networking and refreshments",
      icon: Coffee,
      type: "break"
    },
    {
      time: "16:00 - 17:25",
      title: "Session 3: SA for Agentic AI",
      description: "Architecting Agentic AI systems • Case study: Agentic AI framework for autonomous CloudOps • Hands-on activity (20 mins)",
      icon: Wrench,
      type: "hands-on"
    },
    {
      time: "17:25 - 17:30",
      title: "Tutorial Closing",
      description: "Final remarks and wrap-up",
      icon: Users,
      type: "closing"
    }
  ];

  const getItemStyles = (type: string) => {
    switch (type) {
      case 'intro':
        return 'bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400';
      case 'session':
        return 'bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-400';
      case 'hands-on':
        return 'bg-gradient-to-r from-indigo-50 to-cyan-50 border-l-4 border-indigo-400';
      case 'break':
        return 'bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-400';
      case 'closing':
        return 'bg-gradient-to-r from-gray-50 to-slate-50 border-l-4 border-gray-400';
      default:
        return 'bg-gray-50 border-l-4 border-gray-400';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
            Tutorial Schedule
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            A comprehensive morning tutorial covering both theoretical foundations and hands-on practice
          </p>

          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div 
                key={index}
                className={`${getItemStyles(item.type)} rounded-xl p-6 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <item.icon className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-gray-600 mt-1 md:mt-0">
                        <Clock size={16} />
                        <span className="font-medium">{item.time}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              Tutorial Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Presentation className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Theory & Concepts</h4>
                <p className="text-gray-600">Foundational knowledge on AI-enabled software architecture</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Hands-on Practice</h4>
                <p className="text-gray-600">Interactive sessions with ArchCoPilot and practical exercises</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Case Studies</h4>
                <p className="text-gray-600">Real-world examples including autonomous CloudOps systems</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              Prerequisites & What to Bring
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Prerequisites</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Basic understanding of software architecture principles</li>
                  <li>• Familiarity with software engineering practices</li>
                  <li>• General knowledge of AI/ML concepts (helpful but not required)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">What to Bring</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Laptop for hands-on exercises with ArchCoPilot</li>
                  <li>• Notebook for taking notes</li>
                  <li>• Questions about AI in software architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
