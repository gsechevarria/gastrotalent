import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dashboard Restaurante" };

export default function RestaurantDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Panel del Restaurante</h1>
        <p className="text-gray-500 text-sm mt-1">Gestiona tus ofertas y candidatos</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Ofertas activas", value: "0", icon: "📋" },
          { label: "Candidatos recibidos", value: "0", icon: "👥" },
          { label: "Contrataciones este mes", value: "0", icon: "✅" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{kpi.icon}</span>
              <div>
                <p className="text-sm text-gray-500">{kpi.label}</p>
                <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TODO: Lista de ofertas recientes, candidatos destacados */}
    </div>
  );
}
