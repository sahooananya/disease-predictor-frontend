import React, { useState } from 'react';
import { PillIcon, Search, ShoppingCart, AlertCircle, X } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useCartStore } from '../store/cartStore';

const medicines = [
  {
    id: '1',
    name: 'Ferrous Sulfate',
    category: 'Iron Supplement',
    price: 12.99,
    description: 'Used to treat or prevent low blood iron and iron-deficiency anemia',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200&h=200',
    dosage: '325mg',
    manufacturer: 'HealthPharm',
    stock: 150
  },
  {
    id: '2',
    name: 'Vitamin B12',
    category: 'Vitamin Supplement',
    price: 15.99,
    description: 'Essential for red blood cell formation and neurological function',
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f7e?auto=format&fit=crop&q=80&w=200&h=200',
    dosage: '1000mcg',
    manufacturer: 'VitaLife',
    stock: 200
  },
  {
    id: '3',
    name: 'Vitamin C',
    category: 'Vitamin Supplement',
    price: 9.99,
    description: 'Supports immune function and enhances iron absorption',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=200&h=200',
    dosage: '500mg',
    manufacturer: 'NatureCare',
    stock: 300
  }
];

export default function MedicineSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);
  const { items, addItem, removeItem, updateQuantity, total, clearCart } = useCartStore();

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (medicine: any) => {
    addItem({
      id: medicine.id,
      name: medicine.name,
      price: medicine.price,
      quantity: 1
    });
    toast.success(`${medicine.name} added to cart`);
  };

  const handlePrescriptionUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      toast.success('Prescription uploaded successfully');
    }
  };

  return (
    <div className="space-y-8">
      {/* Search Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for medicines..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Cart Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowCart(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <ShoppingCart className="h-6 w-6" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {items.length}
            </span>
          )}
        </button>
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Shopping Cart</h3>
              <button onClick={() => setShowCart(false)} className="text-gray-400 hover:text-gray-500">
                <X className="h-5 w-5" />
              </button>
            </div>
            {items.length === 0 ? (
              <p className="text-gray-500 text-center py-4">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold">${total.toFixed(2)}</span>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        toast.success('Order placed successfully!');
                        clearCart();
                        setShowCart(false);
                      }}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Checkout
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}

      {/* Prescription Upload */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center">
          <PillIcon className="mx-auto h-12 w-12 text-blue-600" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Upload Prescription</h3>
          <p className="mt-1 text-gray-500">Upload your prescription for quick medicine ordering</p>
          <label className="mt-4 inline-block px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
            Upload Prescription
            <input
              type="file"
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handlePrescriptionUpload}
            />
          </label>
        </div>
      </div>

      {/* Medicine List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMedicines.map((medicine) => (
          <motion.div
            key={medicine.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <img
              src={medicine.image}
              alt={medicine.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{medicine.name}</h4>
                  <p className="text-sm text-gray-500">{medicine.category}</p>
                </div>
                <span className="text-lg font-semibold text-blue-600">${medicine.price}</span>
              </div>
              <p className="mt-2 text-gray-600">{medicine.description}</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-500">Dosage: {medicine.dosage}</p>
                <p className="text-sm text-gray-500">Manufacturer: {medicine.manufacturer}</p>
                <p className="text-sm text-gray-500">In Stock: {medicine.stock}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => handleAddToCart(medicine)}
                  className="flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
                <button className="flex items-center text-gray-500 hover:text-gray-700">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}