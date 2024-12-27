import React from 'react';
import { Schedule, SHIFT_CONFIGS } from '../types/schedule';
import { User } from '../types/user';

interface HorizontalScheduleTableProps {
  schedules: Schedule[];
  users: User[];
  year: number;
  month: number;
}

export function HorizontalScheduleTable({ schedules, users, year, month }: HorizontalScheduleTableProps) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50">
              Usuario
            </th>
            {days.map((day) => {
              const date = new Date(year, month, day);
              const dayName = new Intl.DateTimeFormat('es-ES', { weekday: 'short' }).format(date);
              return (
                <th key={day} className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">
                  <div>{dayName}</div>
                  <div>{day}</div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-0 bg-white">
                {user.name}
              </td>
              {days.map((day) => {
                const schedule = schedules.find(
                  (s) => s.day === day && s.userId === user.id
                );
                const shiftConfig = schedule ? SHIFT_CONFIGS[schedule.shift] : null;

                return (
                  <td
                    key={day}
                    className={`px-4 py-4 text-center text-sm ${shiftConfig?.color || 'bg-white'}`}
                  >
                    {shiftConfig?.name || '-'}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}