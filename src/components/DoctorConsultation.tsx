import React, { useState } from 'react';
import { Calendar, Clock, Video, Phone, X } from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useAppointmentStore } from '../store/appointmentStore';

const doctors = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200',
    availability: 'Available Today',
    rating: 4.8,
    experience: '15 years',
    languages: ['English', 'Spanish'],
    education: 'Harvard Medical School',
    consultationFee: '$150',
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
    availability: 'Next Available: Tomorrow',
    rating: 4.9,
    experience: '12 years',
    languages: ['English', 'Mandarin'],
    education: 'Stanford Medical School',
    consultationFee: '$180',
  },
  {
    id: '3',
    name: 'Dr. Emily Williams',
    specialty: 'Hematologist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
    availability: 'Available Today',
    rating: 4.7,
    experience: '10 years',
    languages: ['English', 'French'],
    education: 'Johns Hopkins School of Medicine',
    consultationFee: '$160',
  },
];

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
];

export default function DoctorConsultation() {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [consultationType, setConsultationType] = useState<'video' | 'phone' | 'in-person'>('video');
  const { addAppointment, appointments } = useAppointmentStore();

  const handleBookAppointment = (doctorId: string) => {
    if (!selectedDate || !selectedTime) {
      toast.error('Please select both date and time');
      return;
    }

    const appointment = {
      id: Math.random().toString(36).substr(2, 9),
      doctorId,
      date: selectedDate,
      time: selectedTime,
      type: consultationType,
    };

    addAppointment(appointment);
    toast.success('Appointment booked successfully!');
    setSelectedDoctor(null);
    setSelectedDate('');
    setSelectedTime('');
  };

  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(format(date, 'yyyy-MM-dd'));
    }
    return dates;
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">Connect with Specialists</h2>
        <p className="mt-4 text-lg text-gray-500">
          Schedule a consultation with our verified healthcare professionals
        </p>
      </motion.div>

      {/* Consultation Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Video, title: 'Video Consultation', type: 'video' },
          { icon: Phone, title: 'Phone Call', type: 'phone' },
          { icon: Calendar, title: 'In-Person Visit', type: 'in-person' }
        ].map(({ icon: Icon, title, type }) => (
          <motion.div
            key={type}
            whileHover={{ scale: 1.02 }}
            className={`bg-white rounded-lg shadow p-6 text-center cursor-pointer transition-colors ${
              consultationType === type ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setConsultationType(type as any)}
          >
            <Icon className={`h-8 w-8 mx-auto ${
              consultationType === type ? 'text-blue-600' : 'text-gray-400'
            }`} />
            <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Available Doctors */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">Available Specialists</h3>
        </div>
        <div className="border-t border-gray-200">
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              initial={false}
              animate={{ height: selectedDoctor === doctor.id ? 'auto' : 'auto' }}
              className="border-b border-gray-200 last:border-b-0"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <h4 className="text-lg font-medium text-gray-900">{doctor.name}</h4>
                    <p className="text-gray-500">{doctor.specialty}</p>
                    <div className="mt-1 flex items-center">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="ml-1 text-sm text-gray-500">{doctor.availability}</span>
                      <span className="ml-4 text-sm text-gray-500">★ {doctor.rating}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedDoctor(selectedDoctor === doctor.id ? null : doctor.id)}
                    className="ml-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
                  >
                    {selectedDoctor === doctor.id ? 'Close' : 'Book Now'}
                  </button>
                </div>

                {selectedDoctor === doctor.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 border-t pt-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Doctor Information</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>Experience: {doctor.experience}</li>
                          <li>Languages: {doctor.languages.join(', ')}</li>
                          <li>Education: {doctor.education}</li>
                          <li>Consultation Fee: {doctor.consultationFee}</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Book Appointment</h5>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Select Date</label>
                            <select
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                            >
                              <option value="">Choose date</option>
                              {generateAvailableDates().map((date) => (
                                <option key={date} value={date}>
                                  {format(new Date(date), 'MMMM d, yyyy')}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Select Time</label>
                            <select
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              value={selectedTime}
                              onChange={(e) => setSelectedTime(e.target.value)}
                            >
                              <option value="">Choose time</option>
                              {timeSlots.map((time) => (
                                <option key={time} value={time}>{time}</option>
                              ))}
                            </select>
                          </div>
                          <button
                            onClick={() => handleBookAppointment(doctor.id)}
                            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Confirm Booking
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* My Appointments */}
      {appointments.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">My Appointments</h3>
          <div className="space-y-4">
            {appointments.map((appointment) => {
              const doctor = doctors.find(d => d.id === appointment.doctorId);
              return (
                <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{doctor?.name}</p>
                    <p className="text-sm text-gray-500">
                      {format(new Date(appointment.date), 'MMMM d, yyyy')} at {appointment.time}
                    </p>
                    <p className="text-sm text-gray-500 capitalize">{appointment.type} Consultation</p>
                  </div>
                  <button
                    onClick={() => {
                      useAppointmentStore.getState().cancelAppointment(appointment.id);
                      toast.success('Appointment cancelled successfully');
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}