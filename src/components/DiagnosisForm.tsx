import React, { useState } from 'react';
import { ImagePlus, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import axios from "axios";

const backendUrl = "https://multi-disease-predictor-backend.onrender.com"; // Backend API URL

const questions = [
  { id: 'age', label: 'Age', type: 'number', required: true },
  { id: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'], required: true },
  { id: 'weight', label: 'Weight (kg)', type: 'number', required: true },
  { id: 'height', label: 'Height (cm)', type: 'number', required: true },
  { id: 'hemoglobin', label: 'Hemoglobin Level (g/dL)', type: 'number', required: true },
  { id: 'rbc_count', label: 'RBC Count (millions/µL)', type: 'number', required: true },
  { id: 'wbc_count', label: 'WBC Count (K/µL)', type: 'number', required: true },
  { id: 'platelets', label: 'Platelet Count (K/µL)', type: 'number', required: true },
  { id: 'iron_level', label: 'Iron Level (µg/dL)', type: 'number', required: true },
  { id: 'vitamin_b12', label: 'Vitamin B12 Level (pg/mL)', type: 'number', required: true },
  { id: 'folate', label: 'Folate Level (ng/mL)', type: 'number', required: true },
];

export default function DiagnosisForm() {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (id: string, value: string | number | string[]) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setImages(prev => [...prev, ...files]);
      toast.success('Images uploaded successfully');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value as string);
    });
    images.forEach((image, index) => {
      formDataToSend.append(`image_${index}`, image);
    });

    const response = await fetch(`${import.meta.env.VITE_API_URL}/predict`, {
      method: "POST",
      body: formDataToSend, // ✅ Use the correct FormData object here
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data); // 🔍 Use the result
    toast.success("Prediction successful!");
  } catch (error) {
    toast.error("Error fetching prediction");
    console.error(error);
  } finally {
    setLoading(false);
  }
};


  return (
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Health Assessment Form</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {questions.map(question => (
                  <div key={question.id}>
                    <label htmlFor={question.id} className="block text-sm font-medium text-gray-700">
                      {question.label} {question.required && <span className="text-red-500">*</span>}
                    </label>
                    {question.type === 'select' ? (
                        <select
                            id={question.id}
                            className="w-full border p-2 rounded"
                            onChange={(e) => handleInputChange(question.id, e.target.value)}
                            required={question.required}
                        >
                          {question.options?.map(option => (
                              <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                    ) : (
                        <input
                            type={question.type}
                            id={question.id}
                            className="w-full border p-2 rounded"
                            onChange={(e) => handleInputChange(question.id, e.target.value)}
                            required={question.required}
                        />
                    )}
                  </div>
              ))}
            </div>

            <label className="block text-sm font-medium text-gray-700">Upload Medical Images</label>
            <input type="file" multiple accept="image/*" onChange={handleImageUpload} />

            <button type="submit" className="bg-blue-600 text-white p-2 rounded" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit for Analysis'}
            </button>
          </form>
        </motion.div>
      </div>
  );
}
