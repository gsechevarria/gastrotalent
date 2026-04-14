import type { Metadata } from "next";

export const metadata: Metadata = { title: "Ofertas disponibles" };

export default function OfertasCandidatoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Ofertas disponibles</h1>
        <p className="text-gray-500 text-sm mt-1">Encuentra tu próximo trabajo en hostelería</p>
      </div>

      {/* Búsqueda rápida */}
      <div className="flex gap-3">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Busca puesto, restaurante o zona..."
        />
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
          Buscar
        </button>
      </div>

      {/* Filtros rápidos */}
      <div className="flex flex-wrap gap-2">
        {["Todos", "Por horas", "Por servicio", "Temporal", "Indefinido"].map((filter) => (
          <button
            key={filter}
            className="px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 hover:border-orange-400 hover:text-orange-600 transition-colors"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* TODO: Grid/lista de ofertas */}
      <div className="bg-white rounded-xl border border-gray-100 p-8 text-center shadow-sm">
        <p className="text-gray-400">Cargando ofertas...</p>
      </div>
    </div>
  );
}
