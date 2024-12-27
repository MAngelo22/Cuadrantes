export type Shift = 'morning' | 'split' | 'afternoon';

export interface Schedule {
  id: string;
  date: string;
  shift: Shift;
  year: number;
  month: number;
  day: number;
  userId: string;
}

export interface ShiftConfig {
  name: string;
  hours: string;
  color: string;
}

export const SHIFT_CONFIGS: Record<Shift, ShiftConfig> = {
  morning: {
    name: 'M',
    hours: '8:00 - 16:00',
    color: 'bg-blue-100',
  },
  split: {
    name: 'P',
    hours: '9:00 - 18:00',
    color: 'bg-green-100',
  },
  afternoon: {
    name: 'T',
    hours: '16:00 - 22:00',
    color: 'bg-orange-100',
  },
};