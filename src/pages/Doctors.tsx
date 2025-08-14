import React from 'react';
import { Video, Phone, MapPin, Star, Clock, Calendar } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.8,
      availability: 'Available Today',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      experience: '15 years',
      location: 'New York, NY'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      rating: 4.9,
      availability: 'Next Available: Tomorrow',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      experience: '12 years',
      location: 'Los Angeles, CA'
    },
    {
      id: 3,
      name: 'Dr. Emily Williams',
      specialty: 'Internal Medicine',
      rating: 4.7,
      availability: 'Available Today',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      experience: '10 years',
      location: 'Chicago, IL'
    },
    {
      id: 4,
      name: 'Dr. James Rodriguez',
      specialty: 'Pulmonologist',
      rating: 4.6,
      availability: 'Next Available: Today 3:00 PM',
      image: 'https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      experience: '18 years',
      location: 'Houston, TX'
    }
  ];

  const consultationTypes = [
    {
      type: 'Video Consultation',
      icon: Video,
      description: 'Face-to-face consultation from the comfort of your home',
      price: '$75',
      duration: '30 minutes',
      active: true
    },
    {
      type: 'Phone Call',
      icon: Phone,
      description: 'Quick consultation over the phone',
      price: '$50',
      duration: '20 minutes',
      active: false
    },
    {
      type: 'In-Person Visit',
      icon: MapPin,
      description: 'Traditional in-clinic consultation',
      price: '$120',
      duration: '45 minutes',
      active: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Connect with Specialists</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Schedule a consultation with our verified healthcare professionals
          </p>
        </div>

        {/* Consultation Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {consultationTypes.map((consultation, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                consultation.active
                  ? 'bg-blue-600 bg-opacity-20 border-blue-500'
                  : 'bg-gray-800 border-gray-600 hover:border-gray-500'
              }`}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  consultation.active ? 'bg-blue-600' : 'bg-gray-700'
                }`}>
                  <consultation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {consultation.type}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {consultation.description}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-green-400 font-semibold">{consultation.price}</span>
                  <span className="text-gray-500">{consultation.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Available Specialists */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Available Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
                <div className="flex items-start space-x-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{doctor.name}</h3>
                    <p className="text-blue-400 mb-2">{doctor.specialty}</p>
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-gray-300 text-sm">{doctor.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-400 text-sm">{doctor.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 mb-4">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span className="text-green-400 text-sm">{doctor.availability}</span>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        Book Video Call
                      </button>
                      <button className="flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                        <Phone className="w-4 h-4 text-white" />
                      </button>
                      <button className="flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                        <Calendar className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-900 bg-opacity-30 border border-red-600 rounded-xl p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-red-400 mb-2">Emergency?</h3>
            <p className="text-red-200 mb-4">
              If you're experiencing a medical emergency, please call emergency services immediately.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Call Emergency: 911
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;