import React, { useState } from 'react';
import { Search, Pill, Clock, AlertTriangle, ShoppingCart, Star } from 'lucide-react';

const Medicine = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'pain-relief', name: 'Pain Relief' },
    { id: 'antibiotics', name: 'Antibiotics' },
    { id: 'vitamins', name: 'Vitamins & Supplements' },
    { id: 'heart', name: 'Heart & Blood Pressure' },
    { id: 'diabetes', name: 'Diabetes Care' }
  ];

  const medicines = [
    {
      id: 1,
      name: 'Ibuprofen 400mg',
      category: 'pain-relief',
      description: 'Anti-inflammatory pain reliever',
      price: '$12.99',
      rating: 4.5,
      inStock: true,
      prescription: false,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Amoxicillin 500mg',
      category: 'antibiotics',
      description: 'Broad-spectrum antibiotic',
      price: '$24.99',
      rating: 4.7,
      inStock: true,
      prescription: true,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Vitamin D3 1000 IU',
      category: 'vitamins',
      description: 'Essential vitamin supplement',
      price: '$18.99',
      rating: 4.3,
      inStock: true,
      prescription: false,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'Lisinopril 10mg',
      category: 'heart',
      description: 'ACE inhibitor for blood pressure',
      price: '$32.99',
      rating: 4.6,
      inStock: false,
      prescription: true,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 5,
      name: 'Metformin 500mg',
      category: 'diabetes',
      description: 'Type 2 diabetes medication',
      price: '$28.99',
      rating: 4.4,
      inStock: true,
      prescription: true,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 6,
      name: 'Acetaminophen 500mg',
      category: 'pain-relief',
      description: 'Pain reliever and fever reducer',
      price: '$9.99',
      rating: 4.2,
      inStock: true,
      prescription: false,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Medicine & Pharmacy</h1>
          <p className="text-xl text-gray-400">
            Find and order your medications with ease
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search medicines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-900 bg-opacity-30 border border-yellow-600 rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-400 mb-1">Important Notice</h3>
              <p className="text-yellow-200 text-sm">
                Prescription medications require a valid prescription from a licensed healthcare provider. 
                Please consult with your doctor before taking any new medications.
              </p>
            </div>
          </div>
        </div>

        {/* Medicine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicines.map((medicine) => (
            <div key={medicine.id} className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Pill className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{medicine.name}</h3>
                      {medicine.prescription && (
                        <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded mt-1">
                          Prescription Required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${medicine.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>

                <p className="text-gray-400 text-sm mb-4">{medicine.description}</p>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-300 text-sm">{medicine.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400 text-sm">
                      {medicine.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-400">{medicine.price}</span>
                  <button
                    disabled={!medicine.inStock}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      medicine.inStock
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>{medicine.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMedicines.length === 0 && (
          <div className="text-center py-12">
            <Pill className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No medicines found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Pharmacy Services */}
        <div className="mt-12 bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Pharmacy Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-400 text-sm">Same-day delivery available for most medications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pill className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-white mb-2">Licensed Pharmacy</h3>
              <p className="text-gray-400 text-sm">All medications from certified and licensed sources</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-white mb-2">Safety First</h3>
              <p className="text-gray-400 text-sm">Prescription verification and drug interaction checks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicine;