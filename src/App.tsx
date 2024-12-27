import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Schedule } from './types/schedule';
import { MOCK_USERS } from './types/user';
import { Legend } from './components/Legend';
import { ScheduleControls } from './components/ScheduleControls';
import { HorizontalScheduleTable } from './components/HorizontalScheduleTable';
import { UserSelect } from './components/UserSelect';

// Datos de ejemplo
const mockSchedules: Schedule[] = [
  {
    id: '1',
    date: '2024-03-01',
    shift: 'morning',
    year: 2024,
    month: 2,
    day: 1,
    userId: '1',
  },
  {
    id: '2',
    date: '2024-03-02',
    shift: 'split',
    year: 2024,
    month: 2,
    day: 2,
    userId: '1',
  },
  {
    id: '3',
    date: '2024-03-03',
    shift: 'afternoon',
    year: 2024,
    month: 2,
    day: 3,
    userId: '2',
  },
];

function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [selectedUser, setSelectedUser] = useState(MOCK_USERS[0].id);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-[95%] mx-auto">
        <div className="flex items-center mb-6">
          <Calendar className="w-8 h-8 text-blue-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">
            Gestión de Turnos
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-1">
            <Legend />
          </div>

          <div className="md:col-span-4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex space-x-4 mb-6">
                <ScheduleControls
                  year={year}
                  month={month}
                  onYearChange={setYear}
                  onMonthChange={setMonth}
                />
                <UserSelect
                  users={MOCK_USERS}
                  selectedUser={selectedUser}
                  onUserChange={setSelectedUser}
                />
              </div>
              <HorizontalScheduleTable
                schedules={mockSchedules}
                users={MOCK_USERS}
                year={year}
                month={month}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;