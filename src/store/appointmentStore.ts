import { create } from 'zustand';

interface Appointment {
  id: string;
  doctorId: string;
  date: string;
  time: string;
  type: 'video' | 'phone' | 'in-person';
}

interface AppointmentStore {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  cancelAppointment: (id: string) => void;
  getAppointments: () => Appointment[];
}

export const useAppointmentStore = create<AppointmentStore>((set, get) => ({
  appointments: [],
  addAppointment: (appointment) =>
    set((state) => ({
      appointments: [...state.appointments, appointment],
    })),
  cancelAppointment: (id) =>
    set((state) => ({
      appointments: state.appointments.filter((a) => a.id !== id),
    })),
  getAppointments: () => get().appointments,
}));