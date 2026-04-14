/**
 * Tipos base del dominio — se reemplazarán por los tipos generados por Supabase CLI
 * tras ejecutar: npx supabase gen types typescript --project-id <id> > types/database.ts
 */

export type UserRole = "restaurant" | "candidate";

export type ContractType = "permanent" | "temporary" | "service" | "hourly";

export type ApplicationStatus = "pending" | "viewed" | "shortlisted" | "rejected" | "hired";

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          role: UserRole;
          full_name: string | null;
          avatar_url: string | null;
          phone: string | null;
          city: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["profiles"]["Row"], "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      restaurants: {
        Row: {
          id: string;
          profile_id: string;
          name: string;
          description: string | null;
          address: string | null;
          city: string | null;
          logo_url: string | null;
          verified: boolean;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["restaurants"]["Row"], "created_at" | "verified">;
        Update: Partial<Database["public"]["Tables"]["restaurants"]["Insert"]>;
      };
      candidates: {
        Row: {
          id: string;
          profile_id: string;
          specialty: string | null;
          experience_years: number | null;
          availability: string[]; // ["hourly", "service", "weekends", ...]
          bio: string | null;
          avg_rating: number | null;
          rating_count: number;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["candidates"]["Row"], "created_at" | "avg_rating" | "rating_count">;
        Update: Partial<Database["public"]["Tables"]["candidates"]["Insert"]>;
      };
      jobs: {
        Row: {
          id: string;
          restaurant_id: string;
          title: string;
          description: string | null;
          contract_type: ContractType;
          salary: number | null;
          salary_period: string | null;
          location: string | null;
          requirements: string | null;
          is_active: boolean;
          start_date: string | null;
          end_date: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["jobs"]["Row"], "id" | "created_at" | "updated_at" | "is_active">;
        Update: Partial<Database["public"]["Tables"]["jobs"]["Insert"]>;
      };
      applications: {
        Row: {
          id: string;
          job_id: string;
          candidate_id: string;
          status: ApplicationStatus;
          message: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["applications"]["Row"], "id" | "created_at" | "updated_at" | "status">;
        Update: Partial<Database["public"]["Tables"]["applications"]["Insert"]>;
      };
      ratings: {
        Row: {
          id: string;
          restaurant_id: string;
          candidate_id: string;
          job_id: string | null;
          score: number; // 1-5
          punctuality: number | null; // 1-5
          quality: number | null; // 1-5
          attitude: number | null; // 1-5
          comment: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["ratings"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["ratings"]["Insert"]>;
      };
    };
    Views: {};
    Functions: {};
  };
};
