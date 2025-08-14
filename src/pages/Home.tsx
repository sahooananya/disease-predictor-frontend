import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Activity, 
  Users, 
  Shield,
  Heart
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnosis',
      description: 'Advanced machine learning algorithms for accurate disease detection'
    },
    {
      icon: Activity,
      title: 'Multiple Disease Detection',
      description: 'Comprehensive analysis covering various medical conditions'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Connect with qualified healthcare professionals'
    },
    {
      icon: Shield,
      title: 'Secure Health Records',
      description: 'Your medical data is protected with enterprise-grade security'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Your Health Guardian
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Advanced AI-powered disease detection system to help you understand your health 
            better.
          </p>
          
          <Link
            to="/diagnosis"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
          >
            Start Diagnosis
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Heart Icon */}
        <div className="flex justify-center mt-20">
          <Heart className="w-8 h-8 text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Home;