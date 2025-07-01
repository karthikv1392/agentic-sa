
import { BookOpen, Download, ExternalLink, FileText, Video, Code } from "lucide-react";

const ResourcesSection = () => {
  const resourceCategories = [
    {
      title: "Tutorial Materials",
      icon: BookOpen,
      color: "purple",
      resources: [
        { name: "Tutorial Slides", type: "PDF", icon: FileText, available: true },
        { name: "Code Examples", type: "GitHub", icon: Code, available: true },
        { name: "Hands-on Exercises", type: "PDF", icon: FileText, available: true },
      ]
    },
    {
      title: "Recordings & Media",
      icon: Video,
      color: "blue",
      resources: [
        { name: "Tutorial Recording", type: "Video", icon: Video, available: false },
        { name: "Q&A Session", type: "Video", icon: Video, available: false },
      ]
    },
    {
      title: "Additional Reading",
      icon: ExternalLink,
      color: "green",
      resources: [
        { name: "Research Papers", type: "Links", icon: ExternalLink, available: true },
        { name: "Recommended Books", type: "List", icon: BookOpen, available: true },
        { name: "Online Resources", type: "Links", icon: ExternalLink, available: true },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return {
          bg: 'from-purple-50 to-indigo-50',
          text: 'text-purple-700',
          button: 'bg-purple-600 hover:bg-purple-700',
          icon: 'text-purple-600'
        };
      case 'blue':
        return {
          bg: 'from-blue-50 to-cyan-50',
          text: 'text-blue-700',
          button: 'bg-blue-600 hover:bg-blue-700',
          icon: 'text-blue-600'
        };
      case 'green':
        return {
          bg: 'from-green-50 to-emerald-50',
          text: 'text-green-700',
          button: 'bg-green-600 hover:bg-green-700',
          icon: 'text-green-600'
        };
      default:
        return {
          bg: 'from-gray-50 to-slate-50',
          text: 'text-gray-700',
          button: 'bg-gray-600 hover:bg-gray-700',
          icon: 'text-gray-600'
        };
    }
  };

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
            Tutorial Resources
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Access tutorial materials, recordings, and additional resources to continue 
            your learning journey in Agentic AI and Software Architecture.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {resourceCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${colors.bg} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2`}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <category.icon className={`h-8 w-8 ${colors.icon}`} />
                    <h3 className={`text-2xl font-semibold ${colors.text}`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.resources.map((resource, resourceIndex) => (
                      <div 
                        key={resourceIndex}
                        className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm"
                      >
                        <div className="flex items-center space-x-3">
                          <resource.icon className="h-5 w-5 text-gray-500" />
                          <div>
                            <p className="font-medium text-gray-800">{resource.name}</p>
                            <p className="text-sm text-gray-500">{resource.type}</p>
                          </div>
                        </div>
                        <button 
                          className={`px-4 py-2 ${colors.button} text-white rounded-lg text-sm font-medium transition-colors ${
                            !resource.available ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          disabled={!resource.available}
                        >
                          {resource.available ? (
                            <>
                              <Download size={16} className="inline mr-1" />
                              Access
                            </>
                          ) : (
                            'Coming Soon'
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Resources will be updated regularly. Bookmark this page to access the latest materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe for Updates
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Contact Organizers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
