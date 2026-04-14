import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility para combinar clases de Tailwind sin conflictos
 * Uso: cn("px-4 py-2", isActive && "bg-orange-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
