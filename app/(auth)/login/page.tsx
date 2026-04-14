import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Iniciar sesión" };

export default function LoginPage() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Iniciar sesión</h1>
        <p className="text-gray-500 text-sm mt-1">Accede a tu cuenta de GastroPortal</p>
      </div>

      {/* TODO: conectar con Supabase Auth */}
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg transition-colors"
        >
          Entrar
        </button>
      </form>

      <p className="text-center text-sm text-gray-500">
        ¿No tienes cuenta?{" "}
        <Link href="/register" className="text-orange-500 hover:underline font-medium">
          Regístrate gratis
        </Link>
      </p>
    </div>
  );
}
