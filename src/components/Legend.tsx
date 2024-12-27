import { SHIFT_CONFIGS } from '../types/schedule';

export function Legend() {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h3 className="text-lg font-semibold mb-2">Leyenda de Turnos</h3>
      <div className="space-y-2">
        {Object.entries(SHIFT_CONFIGS).map(([key, config]) => (
          <div key={key} className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded ${config.color}`}></div>
            <span className="text-sm">
              {config.name} ({config.hours})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}