import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mi Perfil" };

export default function PerfilCandidatoPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Mi perfil</h1>
        <p className="text-gray-500 text-sm mt-1">
          Completa tu perfil para recibir más ofertas y mejorar tu posicionamiento
        </p>
      </div>

      {/* TODO: formulario de perfil conectado con Supabase */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
            👤
          </div>
          <div>
            <p className="font-semibold text-gray-800">Nombre del candidato</p>
            <p className="text-sm text-gray-400">Perfil al 0% completado</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            { label: "Nombre completo", type: "text", placeholder: "Tu nombre" },
            { label: "Teléfono", type: "tel", placeholder: "+34 600 000 000" },
            { label: "Ciudad", type: "text", placeholder: "Madrid, Barcelona..." },
          ].map((field) => (
            <div key={field.label}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Especialidad</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="">Selecciona tu puesto principal</option>
              <option>Camarero/a</option>
              <option>Cocinero/a</option>
              <option>Ayudante de cocina</option>
              <option>Jefe de sala</option>
              <option>Bartender</option>
              <option>Hostess</option>
              <option>Sommelier</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Disponibilidad
            </label>
            <div className="flex flex-wrap gap-2">
              {["Por horas", "Por servicio", "Jornada completa", "Fines de semana", "Nocturno"].map(
                (disp) => (
                  <label key={disp} className="flex items-center gap-1.5 text-sm cursor-pointer">
                    <input type="checkbox" className="accent-orange-500" />
                    {disp}
                  </label>
                )
              )}
            </div>
          </div>
        </div>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg transition-colors">
          Guardar perfil
        </button>
      </div>
    </div>
  );
}
