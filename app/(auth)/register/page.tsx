import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Registro" };

export default function RegisterPage() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Crear cuenta</h1>
        <p className="text-gray-500 text-sm mt-1">Únete a GastroPortal gratis</p>
      </div>

      {/* Selector de tipo de usuario */}
      <div className="grid grid-cols-2 gap-3">
        <button className="border-2 border-orange-500 bg-orange-50 rounded-xl p-4 text-center">
          <span className="block text-2xl mb-1">🍽️</span>
          <span className="text-sm font-semibold text-gray-800">Soy Restaurante</span>
          <span className="block text-xs text-gray-500 mt-0.5">Publico ofertas</span>
        </button>
        <button className="border-2 border-gray-200 hover:border-gray-400 rounded-xl p-4 text-center transition-colors">
          <span className="block text-2xl mb-1">👨‍🍳</span>
          <span className="text-sm font-semibold text-gray-800">Busco trabajo</span>
          <span className="block text-xs text-gray-500 mt-0.5">Soy candidato</span>
        </button>
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
            placeholder="Mínimo 8 caracteres"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg transition-colors"
        >
          Crear cuenta
        </button>
      </form>

      <p className="text-center text-xs text-gray-400">
        Al registrarte aceptas los{" "}
        <Link href="/terminos" className="underline">Términos de uso</Link>
        {" "}y la{" "}
        <Link href="/privacidad" className="underline">Política de privacidad</Link>
      </p>

      <p className="text-center text-sm text-gray-500">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="text-orange-500 hover:underline font-medium">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}
