import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Mis Ofertas" };

export default function OfertasPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mis Ofertas</h1>
          <p className="text-gray-500 text-sm mt-1">Gestiona tus publicaciones activas</p>
        </div>
        <Link
          href="/ofertas/nueva"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
        >
          + Nueva oferta
        </Link>
      </div>

      {/* TODO: lista de ofertas del restaurante */}
      <div className="bg-white rounded-xl border border-gray-100 p-8 text-center shadow-sm">
        <p className="text-gray-400">No tienes ofertas publicadas aún.</p>
        <Link
          href="/ofertas/nueva"
          className="mt-4 inline-block text-orange-500 hover:underline text-sm font-medium"
        >
          Publica tu primera oferta →
        </Link>
      </div>
    </div>
  );
}
