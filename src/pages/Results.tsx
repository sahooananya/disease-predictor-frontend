import React from 'react';
import { CheckCircle, AlertCircle, Pill, Calendar, Phone, Video } from 'lucide-react';


interface ResultsProps {
  diagnosisResult: any;
}

const Results: React.FC<ResultsProps> = ({ diagnosisResult }) => {
  if (!diagnosisResult) {
    return (
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-800 rounded-xl shadow-xl p-8 text-center">
            <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">No Results Available</h2>
            <p className="text-gray-400">Please complete the diagnosis form first.</p>
          </div>
        </div>
      </div>
    );
  }

  const { predictions, most_likely_disease, confidence, precautions, top_model } = diagnosisResult || {};

  console.log("Diagnosis Result:", diagnosisResult);
  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        {/* Diagnosis Result */}
        <div className="bg-gray-800 rounded-xl shadow-xl p-8">
          <div className="flex items-start space-x-4 mb-6">
            <AlertCircle className="w-8 h-8 text-blue-500 mt-1" />
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Diagnosis Result</h1>
              <p className="text-gray-400">Based on your symptoms and provided information</p>
            </div>
          </div>

          <div className="bg-blue-50 bg-opacity-10 rounded-lg p-6 border border-blue-500 border-opacity-30">
            <div className="flex items-center space-x-3 mb-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold">{most_likely_disease}</h2>
            </div>
            <p className="text-blue-400">
              Confidence Level: {confidence ? `${Math.round(confidence * 100)}%` : 'N/A'}
            </p>
          </div>
        </div>
        {predictions && (
        <div className="bg-gray-800 rounded-xl shadow-xl p-8 mt-8">
          <h2 className="text-xl font-bold text-white mb-6">Model-wise Results</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
            <thead className="bg-gray-700 text-gray-200">
            <tr>
              <th className="text-left p-3">Model</th>
              <th className="text-left p-3">Predicted Disease</th>
              <th className="text-left p-3">Confidence</th>
              <th className="text-left p-3">Accuracy</th>
              <th className="text-left p-3">Precision</th>
              <th className="text-left p-3">Recall</th>
              <th className="text-left p-3">F1</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
            {Object.entries(predictions).map(([modelName, info]: any) => {
              const pct = (v: any) =>
                v == null ? 'N/A' : (typeof v === 'number' ? (v <= 1 ? Math.round(v * 100) : Math.round(v)) + '%' : v);

              return (
                <tr key={modelName} className={top_model === modelName ? 'bg-gray-700/40' : ''}>
                  <td className="p-3 font-medium text-gray-100">{modelName}</td>
                  <td className="p-3 text-gray-200">{(info?.disease || 'Unknown').replace(/_/g, ' ')}</td>
                  <td className="p-3 text-gray-200">{pct(info?.confidence)}</td>
                  <td className="p-3 text-gray-200">{pct(info?.accuracy)}</td>
                  <td className="p-3 text-gray-200">{pct(info?.precision)}</td>
                  <td className="p-3 text-gray-200">{pct(info?.recall)}</td>
                  <td className="p-3 text-gray-200">{pct(info?.f1)}</td>
                </tr>
              );
            })}
            </tbody>
            </table>
          </div>
          {top_model && (
            <p className="text-sm text-gray-400 mt-3">
            Highlighted row = top model by confidence ({top_model})
            </p>
          )}
        </div>
        )}


        {/* Recommended Actions */}
        {precautions && precautions.length > 0 && (
          <div className="bg-gray-800 rounded-xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">Recommended Actions</h2>
            <div className="space-y-4">
              {precautions.map((precaution: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{precaution}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommended Medications */}
        <div className="bg-gray-800 rounded-xl shadow-xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Recommended Medications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Pill className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-white">Consult Your Doctor</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Please consult with a healthcare professional for proper medication recommendations.
              </p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Calendar className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold text-white">Follow-up Care</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Schedule regular check-ups to monitor your condition and treatment progress.
              </p>
            </div>
          </div>
        </div>

        {/* Consultation Options */}
        <div className="bg-gray-800 rounded-xl shadow-xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Need Professional Consultation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-3 p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Video className="w-5 h-5" />
              <span className="text-white font-medium">Video Consultation</span>
            </button>
            <button className="flex items-center justify-center space-x-3 p-4 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
              <span className="text-white font-medium">Phone Consultation</span>
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-900 bg-opacity-30 border border-yellow-600 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-400 mb-1">Important Disclaimer</h3>
              <p className="text-yellow-200 text-sm">
                This AI-powered diagnosis is for informational purposes only and should not replace professional medical advice. 
                Please consult with a qualified healthcare provider for proper diagnosis and treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;