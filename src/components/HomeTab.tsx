import React from 'react';
import { Activity, Brain, Heart, Shield, Users } from 'lucide-react';

interface HomeTabProps {
  onStartDiagnosis: () => void;
}

const features = [
  {
    title: 'AI-Powered Diagnosis',
    description: 'Advanced machine learning algorithms for accurate disease detection',
    icon: Brain,
  },
  {
    title: 'Multiple Disease Detection',
    description: 'Comprehensive analysis covering various medical conditions',
    icon: Activity,
  },
  {
    title: 'Expert Consultation',
    description: 'Connect with qualified healthcare professionals',
    icon: Users,
  },
  {
    title: 'Secure Health Records',
    description: 'Your medical data is protected with enterprise-grade security',
    icon: Shield,
  },
];

export default function HomeTab({ onStartDiagnosis }: HomeTabProps) {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Your Health Guardian
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Advanced AI-powered disease detection system to help you understand your health better.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <button
              onClick={onStartDiagnosis}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Start Diagnosis
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-white rounded-lg shadow-sm p-8 mt-12">
        <div className="text-center">
          <Heart className="h-12 w-12 text-red-500 mx-auto" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Trusted by Healthcare Professionals</h2>
          <p className="mt-4 text-lg text-gray-500">
            Our AI-powered system is developed in collaboration with leading medical experts and
            institutions to ensure accurate and reliable results.
          </p>
        </div>
      </div>
    </div>
  );
}