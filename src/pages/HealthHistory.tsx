import React, { useState } from 'react';
import { Calendar, FileText, TrendingUp, Download, Plus, Filter } from 'lucide-react';

const HealthHistory = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  const [selectedType, setSelectedType] = useState('all');

  const periods = [
    { id: '1month', name: 'Last Month' },
    { id: '3months', name: 'Last 3 Months' },
    { id: '6months', name: 'Last 6 Months' },
    { id: '1year', name: 'Last Year' },
    { id: 'all', name: 'All Time' }
  ];

  const recordTypes = [
    { id: 'all', name: 'All Records' },
    { id: 'diagnosis', name: 'Diagnoses' },
    { id: 'prescription', name: 'Prescriptions' },
    { id: 'lab', name: 'Lab Results' },
    { id: 'consultation', name: 'Consultations' }
  ];

  const healthRecords = [
    {
      id: 1,
      date: '2024-01-15',
      type: 'diagnosis',
      title: 'AI Diagnosis - Hypertension',
      description: 'Diagnosed with mild hypertension based on symptoms analysis',
      confidence: '87%',
      doctor: 'HealthGuard AI',
      status: 'completed'
    },
    {
      id: 2,
      date: '2024-01-10',
      type: 'consultation',
      title: 'Video Consultation - Dr. Sarah Johnson',
      description: 'Follow-up consultation for blood pressure management',
      duration: '30 minutes',
      doctor: 'Dr. Sarah Johnson',
      status: 'completed'
    },
    {
      id: 3,
      date: '2024-01-05',
      type: 'lab',
      title: 'Blood Work Results',
      description: 'Complete blood count and lipid panel',
      results: 'Normal ranges',
      doctor: 'Lab Corp',
      status: 'completed'
    },
    {
      id: 4,
      date: '2023-12-20',
      type: 'prescription',
      title: 'Medication Prescribed',
      description: 'Lisinopril 10mg for blood pressure control',
      quantity: '30 tablets',
      doctor: 'Dr. Michael Chen',
      status: 'active'
    },
    {
      id: 5,
      date: '2023-12-15',
      type: 'diagnosis',
      title: 'AI Diagnosis - Common Cold',
      description: 'Diagnosed with viral upper respiratory infection',
      confidence: '92%',
      doctor: 'HealthGuard AI',
      status: 'resolved'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'diagnosis':
        return <FileText className="w-5 h-5 text-blue-500" />;
      case 'consultation':
        return <Calendar className="w-5 h-5 text-green-500" />;
      case 'lab':
        return <TrendingUp className="w-5 h-5 text-purple-500" />;
      case 'prescription':
        return <Plus className="w-5 h-5 text-orange-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-600';
      case 'active':
        return 'bg-blue-600';
      case 'resolved':
        return 'bg-gray-600';
      default:
        return 'bg-gray-600';
    }
  };

  const filteredRecords = healthRecords.filter(record => {
    if (selectedType !== 'all' && record.type !== selectedType) {
      return false;
    }
    // Add date filtering logic here based on selectedPeriod
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Health History</h1>
            <p className="text-gray-400">Track your medical records and health journey</p>
          </div>
          <button className="mt-4 md:mt-0 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Records</span>
          </button>
        </div>

        {/* Filters */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">Time Period</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {periods.map(period => (
                  <option key={period.id} value={period.id}>
                    {period.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">Record Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {recordTypes.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Health Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-2">
              <FileText className="w-6 h-6 text-blue-500" />
              <h3 className="font-semibold text-white">Total Records</h3>
            </div>
            <p className="text-2xl font-bold text-white">{healthRecords.length}</p>
            <p className="text-sm text-gray-400">All time</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Calendar className="w-6 h-6 text-green-500" />
              <h3 className="font-semibold text-white">Consultations</h3>
            </div>
            <p className="text-2xl font-bold text-white">
              {healthRecords.filter(r => r.type === 'consultation').length}
            </p>
            <p className="text-sm text-gray-400">This year</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-2">
              <TrendingUp className="w-6 h-6 text-purple-500" />
              <h3 className="font-semibold text-white">Lab Tests</h3>
            </div>
            <p className="text-2xl font-bold text-white">
              {healthRecords.filter(r => r.type === 'lab').length}
            </p>
            <p className="text-sm text-gray-400">This year</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Plus className="w-6 h-6 text-orange-500" />
              <h3 className="font-semibold text-white">Prescriptions</h3>
            </div>
            <p className="text-2xl font-bold text-white">
              {healthRecords.filter(r => r.type === 'prescription').length}
            </p>
            <p className="text-sm text-gray-400">Active</p>
          </div>
        </div>

        {/* Records Timeline */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Medical Records Timeline</h2>
          
          {filteredRecords.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No records found</h3>
              <p className="text-gray-500">Try adjusting your filter criteria</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredRecords.map((record) => (
                <div key={record.id} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-650 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {getTypeIcon(record.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-white mb-1">{record.title}</h3>
                          <p className="text-gray-400 text-sm">{record.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs text-white ${getStatusColor(record.status)}`}>
                            {record.status}
                          </span>
                          <span className="text-gray-400 text-sm">{record.date}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>Provider: {record.doctor}</span>
                          {record.confidence && <span>Confidence: {record.confidence}</span>}
                          {record.duration && <span>Duration: {record.duration}</span>}
                          {record.results && <span>Results: {record.results}</span>}
                          {record.quantity && <span>Quantity: {record.quantity}</span>}
                        </div>
                        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthHistory;