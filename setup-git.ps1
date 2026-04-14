# ================================================================
# GastroPortal — Setup inicial de Git
# Ejecutar UNA SOLA VEZ en PowerShell desde la carpeta gastro-portal
#
# Uso:
#   1. Abre PowerShell en la carpeta gastro-portal
#   2. Ejecuta:  .\setup-git.ps1
# ================================================================

Write-Host "`n=== GastroPortal Git Setup ===" -ForegroundColor Cyan

# 1. Inicializar repo
git init
git branch -M main

# 2. Primer commit
git add .
git commit -m "feat: initial scaffold

Stack: Next.js 15 App Router, TypeScript, Tailwind CSS v4, Supabase SSR
- Rutas: /(auth) login+register, /(restaurant) dashboard+ofertas+candidatos, /(candidate) ofertas+perfil
- Tipos de BD: profiles, restaurants, candidates, jobs, applications, ratings
- Middleware de sesion Supabase configurado
- Contratacion por horas/servicio/temporal/indefinido (diferenciador)"

Write-Host "`n[OK] Repo local inicializado con commit inicial." -ForegroundColor Green

# 3. Conectar a GitHub (rellena el nombre de tu repo)
$repo = Read-Host "`nNombre del repo en GitHub (ej: gastro-portal)"
if ($repo -ne "") {
    $user = Read-Host "Tu usuario de GitHub"
    git remote add origin "https://github.com/$user/$repo.git"
    git push -u origin main
    Write-Host "`n[OK] Subido a GitHub: https://github.com/$user/$repo" -ForegroundColor Green
} else {
    Write-Host "`n[SKIP] Coneccion a GitHub omitida. Puedes hacerlo despues con:" -ForegroundColor Yellow
    Write-Host "  git remote add origin https://github.com/TU_USUARIO/TU_REPO.git" -ForegroundColor White
    Write-Host "  git push -u origin main" -ForegroundColor White
}

Write-Host "`n=== Siguiente paso: Vercel ===" -ForegroundColor Cyan
Write-Host "1. Ve a https://vercel.com/new" -ForegroundColor White
Write-Host "2. Importa el repo de GitHub" -ForegroundColor White
Write-Host "3. En 'Environment Variables' añade:" -ForegroundColor White
Write-Host "   NEXT_PUBLIC_SUPABASE_URL    = (de tu proyecto Supabase)" -ForegroundColor White
Write-Host "   NEXT_PUBLIC_SUPABASE_ANON_KEY = (de tu proyecto Supabase)" -ForegroundColor White
Write-Host "4. Deploy!" -ForegroundColor White
