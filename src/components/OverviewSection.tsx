
import { Brain, Code, Lightbulb, Target } from "lucide-react";

const OverviewSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Software Architecture for AI-Enabled Systems",
      description: "Learn how traditional architectural methods are being extended to handle the complexities of ML, LLMs, and multi-agent intelligence systems."
    },
    {
      icon: Code,
      title: "AI for Software Architecture",
      description: "Explore how generative AI can support architectural decision-making, automate documentation, and guide design trade-offs."
    },
    {
      icon: Lightbulb,
      title: "New Quality Attributes",
      description: "Beyond traditional attributes like performance and maintainability, discover observability, uncertainty, explainability, and trustworthiness."
    },
    {
      icon: Target,
      title: "Hands-on Learning",
      description: "Practical sessions with ArchCoPilot tool demonstrations and architecting agentic AI systems for real-world scenarios."
    }
  ];

  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
            Tutorial Overview
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            The rapid advancements in generative AI—especially large language models (LLMs)—have introduced 
            new possibilities in how software systems are designed, developed, and evolved. This tutorial 
            explores the growing connection between software architecture and AI with a dual focus.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 animate-fade-in"
              >
                <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Tutorial Focus Areas
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-600">
                  1. Software Architecture for AI-Enabled Systems
                </h4>
                <p className="text-gray-600 mb-4">
                  Traditional architectural methods are being extended to handle the complexities of:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Machine Learning models</li>
                  <li>• Large Language Models (LLMs)</li>
                  <li>• Multi-agent intelligence systems</li>
                  <li>• Dynamic, learning-enabled components</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-600">
                  2. AI for Software Architecture Practice
                </h4>
                <p className="text-gray-600 mb-4">
                  Using generative AI to support software architecture through:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Automation of architectural tasks</li>
                  <li>• Design assistance and recommendations</li>
                  <li>• Decision support systems</li>
                  <li>• Documentation generation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Key Quality Attributes for AI-Enabled Systems
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Observability and monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Uncertainty management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Explainability and interpretability</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Trustworthiness and reliability</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Data eccentricity handling</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Evolvability of agentic behavior</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Adaptability and learning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Autonomous decision-making</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
