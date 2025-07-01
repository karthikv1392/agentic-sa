
import { Clock, Coffee, Presentation, Users } from "lucide-react";

const ScheduleSection = () => {
  const schedule = [
    {
      time: "09:00 - 09:15",
      title: "Welcome & Introduction",
      description: "Tutorial overview and speaker introductions",
      icon: Users,
      type: "intro"
    },
    {
      time: "09:15 - 10:30",
      title: "Foundations of Agentic AI",
      description: "Core concepts, definitions, and theoretical background",
      icon: Presentation,
      type: "session"
    },
    {
      time: "10:30 - 11:00",
      title: "Coffee Break",
      description: "Networking and refreshments",
      icon: Coffee,
      type: "break"
    },
    {
      time: "11:00 - 12:15",
      title: "Architectural Patterns & Design",
      description: "Patterns, principles, and design considerations for agentic systems",
      icon: Presentation,
      type: "session"
    },
    {
      time: "12:15 - 13:30",
      title: "Lunch Break",
      description: "Extended break for lunch and networking",
      icon: Coffee,
      type: "break"
    },
    {
      time: "13:30 - 14:45",
      title: "Implementation & Case Studies",
      description: "Real-world examples and hands-on implementation strategies",
      icon: Presentation,
      type: "session"
    },
    {
      time: "14:45 - 15:15",
      title: "Coffee Break",
      description: "Afternoon refreshments and discussion",
      icon: Coffee,
      type: "break"
    },
    {
      time: "15:15 - 16:30",
      title: "Future Directions & Q&A",
      description: "Emerging trends, challenges, and interactive discussion",
      icon: Presentation,
      type: "session"
    }
  ];

  const getItemStyles = (type: string) => {
    switch (type) {
      case 'intro':
        return 'bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400';
      case 'session':
        return 'bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-400';
      case 'break':
        return 'bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-400';
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
            A full-day comprehensive tutorial on Software Architecture in the Age of Agentic AI
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
              Important Information
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Prerequisites</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Basic understanding of software architecture</li>
                  <li>• Familiarity with AI/ML concepts (helpful but not required)</li>
                  <li>• Experience with modern software development practices</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">What to Bring</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Laptop for hands-on exercises</li>
                  <li>• Notebook for taking notes</li>
                  <li>• Questions and curiosity about AI in architecture</li>
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
