import type { Metadata } from "next";

export const metadata: Metadata = { title: "Candidatos" };

export default function CandidatosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Candidatos</h1>
        <p className="text-gray-500 text-sm mt-1">
          Sistema de valoraciones — encuentra al candidato ideal
        </p>
      </div>

      {/* Filtros de búsqueda — diferenciador del portal */}
      <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm space-y-4">
        <h2 className="font-semibold text-gray-800 text-sm">Filtrar candidatos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500">
            <option value="">Puesto</option>
            <option>Camarero/a</option>
            <option>Cocinero/a</option>
            <option>Ayudante cocina</option>
            <option>Bartender</option>
            <option>Jefe de sala</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500">
            <option value="">Disponibilidad</option>
            <option>Inmediata</option>
            <option>Por horas</option>
            <option>Por servicio</option>
            <option>Fines de semana</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500">
            <option value="">Valoración mínima</option>
            <option>⭐⭐⭐⭐⭐ 5.0</option>
            <option>⭐⭐⭐⭐ 4.0+</option>
            <option>⭐⭐⭐ 3.0+</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500">
            <option value="">Experiencia</option>
            <option>Sin experiencia</option>
            <option>1-3 años</option>
            <option>3-5 años</option>
            <option>+5 años</option>
          </select>
        </div>
      </div>

      {/* TODO: lista de candidatos con sus valoraciones */}
      <div className="bg-white rounded-xl border border-gray-100 p-8 text-center shadow-sm">
        <p className="text-gray-400">
          Los candidatos aparecerán aquí cuando publiques una oferta y recibas solicitudes.
        </p>
      </div>
    </div>
  );
}
