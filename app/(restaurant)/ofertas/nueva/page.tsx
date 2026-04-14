import type { Metadata } from "next";

export const metadata: Metadata = { title: "Nueva Oferta" };

// Tipos de contratación — diferenciador clave del portal
const CONTRACT_TYPES = [
  { id: "permanent", label: "Indefinido", icon: "📅", description: "Contrato permanente" },
  { id: "temporary", label: "Temporal", icon: "📆", description: "Contrato por meses / semanas" },
  { id: "service", label: "Por servicio", icon: "🍽️", description: "Un evento o servicio concreto" },
  { id: "hourly", label: "Por horas", icon: "⏱️", description: "Contratación puntual por horas" },
];

export default function NuevaOfertaPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Nueva oferta de trabajo</h1>
        <p className="text-gray-500 text-sm mt-1">Rellena los detalles para publicar tu oferta</p>
      </div>

      {/* TODO: conectar con Server Action + Supabase */}
      <form className="space-y-6">

        {/* Tipo de contratación */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Tipo de contratación
          </label>
          <div className="grid grid-cols-2 gap-3">
            {CONTRACT_TYPES.map((type) => (
              <label
                key={type.id}
                className="flex items-start gap-3 border-2 border-gray-200 hover:border-orange-400 rounded-xl p-3 cursor-pointer transition-colors"
              >
                <input type="radio" name="contract_type" value={type.id} className="mt-0.5" />
                <div>
                  <span className="font-medium text-sm text-gray-800">
                    {type.icon} {type.label}
                  </span>
                  <p className="text-xs text-gray-500 mt-0.5">{type.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Puesto */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Puesto</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Ej: Camarero/a, Cocinero/a, Ayudante cocina..."
          />
        </div>

        {/* Descripción */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Descripción</label>
          <textarea
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            placeholder="Describe el puesto, requisitos, horarios..."
          />
        </div>

        {/* Salario */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Salario / Tarifa
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Periodo</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="hour">Por hora</option>
              <option value="service">Por servicio</option>
              <option value="month">Al mes</option>
              <option value="year">Al año</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Publicar oferta
        </button>
      </form>
    </div>
  );
}
