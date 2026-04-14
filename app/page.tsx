import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Gastro<span className="text-orange-500">Portal</span>
        </h1>
        <p className="text-xl text-gray-600">
          El portal de empleo para hostelería. Contratación permanente, por servicio o por horas.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/register?type=restaurant"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Soy Restaurante
          </Link>
          <Link
            href="/register?type=candidate"
            className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Busco Trabajo
          </Link>
        </div>
        <p className="text-sm text-gray-400 pt-4">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="text-orange-500 hover:underline">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </main>
  );
}
