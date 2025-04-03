import React, { useState } from 'react';
import { Activity, Home, Stethoscope, FileText, History, PillIcon, ImagePlus } from 'lucide-react';
import HomeTab from './components/HomeTab';
import DiagnosisForm from './components/DiagnosisForm';
import ResultSection from './components/ResultSection';
import DoctorConsultation from './components/DoctorConsultation';
import HealthHistory from './components/HealthHistory';
import MedicineSection from './components/MedicineSection';

type Tab = 'home' | 'diagnosis' | 'results' | 'doctors' | 'medicine' | 'history';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [diagnosisResult, setDiagnosisResult] = useState<any>(null);

  const handleStartDiagnosis = () => {
    setActiveTab('diagnosis');
  };

  const handleDiagnosisSubmit = (result: any) => {
    setDiagnosisResult(result);
    setActiveTab('results');
  };

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'diagnosis', label: 'Diagnosis', icon: Activity },
    { id: 'results', label: 'Results', icon: FileText },
    { id: 'doctors', label: 'Doctors', icon: Stethoscope },
    { id: 'medicine', label: 'Medicine', icon: PillIcon },
    { id: 'history', label: 'Health History', icon: History },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">HealthGuard AI</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex items-center px-3 py-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && <HomeTab onStartDiagnosis={handleStartDiagnosis} />}
        {activeTab === 'diagnosis' && <DiagnosisForm onSubmit={handleDiagnosisSubmit} />}
        {activeTab === 'results' && <ResultSection result={diagnosisResult} />}
        {activeTab === 'doctors' && <DoctorConsultation />}
        {activeTab === 'medicine' && <MedicineSection />}
        {activeTab === 'history' && <HealthHistory />}
      </main>
    </div>
  );
}

export default App;