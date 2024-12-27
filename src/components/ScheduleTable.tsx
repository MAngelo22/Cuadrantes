import React from 'react';
import { Schedule, SHIFT_CONFIGS } from '../types/schedule';

interface ScheduleTableProps {
  schedules: Schedule[];
}

export function ScheduleTable({ schedules }: ScheduleTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Día
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Turno
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Horario
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {schedules.map((schedule) => {
            const shiftConfig = SHIFT_CONFIGS[schedule.shift];
            const date = new Date(schedule.date);
            const dayName = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(date);

            return (
              <tr key={schedule.id} className={shiftConfig.color}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(schedule.date).toLocaleDateString('es-ES')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                  {dayName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {shiftConfig.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {shiftConfig.hours}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">
                    Editar
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}