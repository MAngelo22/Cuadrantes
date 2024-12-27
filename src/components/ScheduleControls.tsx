import React from 'react';

interface ScheduleControlsProps {
  year: number;
  month: number;
  onYearChange: (year: number) => void;
  onMonthChange: (month: number) => void;
}

export function ScheduleControls({
  year,
  month,
  onYearChange,
  onMonthChange,
}: ScheduleControlsProps) {
  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() + i - 2);
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  return (
    <div className="flex space-x-4 mb-4">
      <div>
        <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
          Año
        </label>
        <select
          id="year"
          value={year}
          onChange={(e) => onYearChange(Number(e.target.value))}
          className="block w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-1">
          Mes
        </label>
        <select
          id="month"
          value={month}
          onChange={(e) => onMonthChange(Number(e.target.value))}
          className="block w-40 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {months.map((m, index) => (
            <option key={index} value={index}>
              {m}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}