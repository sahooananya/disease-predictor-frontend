import React from 'react';
import { AlertCircle, Check } from 'lucide-react';

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
}

interface Result {
  disease: string;
  confidence: number;
  recommendations: string[];
  medications: Medication[];
}

interface ResultSectionProps {
  result: Result | null;
}

export default function ResultSection({ result }: ResultSectionProps) {
  if (!result) {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
          <p className="text-gray-500 text-center">No diagnosis result available yet.</p>
        </div>
    );
  }

  return (
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Diagnosis Result */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <AlertCircle className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-900">Diagnosis Result</h2>
              <p className="mt-1 text-gray-500">Based on your symptoms and provided information</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-blue-800">
                    {result.disease}
                  </h3>
                  <p className="mt-2 text-blue-700">
                    Confidence Level: {result.confidence}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Recommended Actions
          </h3>
          <ul className="space-y-3">
            {result.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">{recommendation}</span>
                </li>
            ))}
          </ul>
        </div>

        {/* Medications */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Recommended Medications
          </h3>
          {result.medications.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {result.medications.map((medication, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-medium text-gray-900">{medication.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">Dosage: {medication.dosage}</p>
                      <p className="text-sm text-gray-500">Frequency: {medication.frequency}</p>
                    </div>
                ))}
              </div>
          ) : (
              <p className="text-gray-500">No specific medications recommended.</p>
          )}
          <p className="mt-4 text-sm text-gray-500">
            * Please consult with a healthcare professional before starting any medication
          </p>
        </div>
      </div>
  );
}
