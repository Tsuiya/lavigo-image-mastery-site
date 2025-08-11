export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      assets: {
        Row: {
          created_at: string
          file_url: string | null
          id: string
          license_note: string | null
          preview_url: string | null
          title: string
          type: string | null
        }
        Insert: {
          created_at?: string
          file_url?: string | null
          id?: string
          license_note?: string | null
          preview_url?: string | null
          title: string
          type?: string | null
        }
        Update: {
          created_at?: string
          file_url?: string | null
          id?: string
          license_note?: string | null
          preview_url?: string | null
          title?: string
          type?: string | null
        }
        Relationships: []
      }
      benefits: {
        Row: {
          category: Database["public"]["Enums"]["benefit_category"]
          created_at: string
          description_long: string | null
          description_short: string | null
          expires_at: string | null
          how_to_redeem: string | null
          id: string
          is_black_only: boolean
          rules: string | null
          slug: string
          stock: number | null
          title: string
        }
        Insert: {
          category: Database["public"]["Enums"]["benefit_category"]
          created_at?: string
          description_long?: string | null
          description_short?: string | null
          expires_at?: string | null
          how_to_redeem?: string | null
          id?: string
          is_black_only?: boolean
          rules?: string | null
          slug: string
          stock?: number | null
          title: string
        }
        Update: {
          category?: Database["public"]["Enums"]["benefit_category"]
          created_at?: string
          description_long?: string | null
          description_short?: string | null
          expires_at?: string | null
          how_to_redeem?: string | null
          id?: string
          is_black_only?: boolean
          rules?: string | null
          slug?: string
          stock?: number | null
          title?: string
        }
        Relationships: []
      }
      campaigns: {
        Row: {
          budget_suggestion: string | null
          copy_headline: string | null
          copy_primary: string | null
          created_at: string
          creative_url: string | null
          id: string
          is_black_only: boolean
          objective: Database["public"]["Enums"]["campaign_objective"]
          targeting: string | null
          title: string
        }
        Insert: {
          budget_suggestion?: string | null
          copy_headline?: string | null
          copy_primary?: string | null
          created_at?: string
          creative_url?: string | null
          id?: string
          is_black_only?: boolean
          objective: Database["public"]["Enums"]["campaign_objective"]
          targeting?: string | null
          title: string
        }
        Update: {
          budget_suggestion?: string | null
          copy_headline?: string | null
          copy_primary?: string | null
          created_at?: string
          creative_url?: string | null
          id?: string
          is_black_only?: boolean
          objective?: Database["public"]["Enums"]["campaign_objective"]
          targeting?: string | null
          title?: string
        }
        Relationships: []
      }
      companies: {
        Row: {
          cnpj: string | null
          created_at: string
          id: string
          instagram: string | null
          name: string
          owner_user_id: string | null
          site: string | null
        }
        Insert: {
          cnpj?: string | null
          created_at?: string
          id?: string
          instagram?: string | null
          name: string
          owner_user_id?: string | null
          site?: string | null
        }
        Update: {
          cnpj?: string | null
          created_at?: string
          id?: string
          instagram?: string | null
          name?: string
          owner_user_id?: string | null
          site?: string | null
        }
        Relationships: []
      }
      contents: {
        Row: {
          body: string | null
          created_at: string
          download_url: string | null
          duration: string | null
          id: string
          is_black_only: boolean
          slug: string
          tags: string[] | null
          title: string
          type: Database["public"]["Enums"]["content_type"]
        }
        Insert: {
          body?: string | null
          created_at?: string
          download_url?: string | null
          duration?: string | null
          id?: string
          is_black_only?: boolean
          slug: string
          tags?: string[] | null
          title: string
          type: Database["public"]["Enums"]["content_type"]
        }
        Update: {
          body?: string | null
          created_at?: string
          download_url?: string | null
          duration?: string | null
          id?: string
          is_black_only?: boolean
          slug?: string
          tags?: string[] | null
          title?: string
          type?: Database["public"]["Enums"]["content_type"]
        }
        Relationships: []
      }
      contracts: {
        Row: {
          company_id: string | null
          created_at: string
          id: string
          pdf_url: string | null
          signed_at: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          id?: string
          pdf_url?: string | null
          signed_at?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string
          id?: string
          pdf_url?: string | null
          signed_at?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contracts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          capacity: number | null
          created_at: string
          description: string | null
          ends_at: string
          id: string
          is_online: boolean
          location: string | null
          speakers: string | null
          starts_at: string
          title: string
        }
        Insert: {
          capacity?: number | null
          created_at?: string
          description?: string | null
          ends_at: string
          id?: string
          is_online?: boolean
          location?: string | null
          speakers?: string | null
          starts_at: string
          title: string
        }
        Update: {
          capacity?: number | null
          created_at?: string
          description?: string | null
          ends_at?: string
          id?: string
          is_online?: boolean
          location?: string | null
          speakers?: string | null
          starts_at?: string
          title?: string
        }
        Relationships: []
      }
      news: {
        Row: {
          body: string | null
          created_at: string
          date: string
          highlight: boolean
          id: string
          title: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          date: string
          highlight?: boolean
          id?: string
          title: string
        }
        Update: {
          body?: string | null
          created_at?: string
          date?: string
          highlight?: boolean
          id?: string
          title?: string
        }
        Relationships: []
      }
      partners: {
        Row: {
          coupon: string | null
          created_at: string
          id: string
          link: string | null
          name: string
          perk_description: string | null
        }
        Insert: {
          coupon?: string | null
          created_at?: string
          id?: string
          link?: string | null
          name: string
          perk_description?: string | null
        }
        Update: {
          coupon?: string | null
          created_at?: string
          id?: string
          link?: string | null
          name?: string
          perk_description?: string | null
        }
        Relationships: []
      }
      redemptions: {
        Row: {
          benefit_id: string
          code: string | null
          created_at: string
          id: string
          notes: string | null
          status: Database["public"]["Enums"]["redemption_status"]
          user_id: string
        }
        Insert: {
          benefit_id: string
          code?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          status?: Database["public"]["Enums"]["redemption_status"]
          user_id: string
        }
        Update: {
          benefit_id?: string
          code?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          status?: Database["public"]["Enums"]["redemption_status"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "redemptions_benefit_id_fkey"
            columns: ["benefit_id"]
            isOneToOne: false
            referencedRelation: "benefits"
            referencedColumns: ["id"]
          },
        ]
      }
      rsvps: {
        Row: {
          created_at: string
          event_id: string
          id: string
          status: Database["public"]["Enums"]["rsvp_status"]
          ticket_qr: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          event_id: string
          id?: string
          status?: Database["public"]["Enums"]["rsvp_status"]
          ticket_qr?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          event_id?: string
          id?: string
          status?: Database["public"]["Enums"]["rsvp_status"]
          ticket_qr?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rsvps_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      users_extra: {
        Row: {
          black_card_expiry: string | null
          black_card_number: string | null
          company_id: string | null
          created_at: string
          id: string
          member_since: string | null
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          black_card_expiry?: string | null
          black_card_number?: string | null
          company_id?: string | null
          created_at?: string
          id?: string
          member_since?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          black_card_expiry?: string | null
          black_card_number?: string | null
          company_id?: string | null
          created_at?: string
          id?: string
          member_since?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_extra_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
      is_admin: {
        Args: { _user_id: string }
        Returns: boolean
      }
      is_black: {
        Args: { _user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "MEMBER" | "BLACK" | "ADMIN"
      benefit_category:
        | "Sessão Extra"
        | "Diagnóstico"
        | "Desconto Parceiro"
        | "Evento VIP"
      campaign_objective: "Tráfego WhatsApp" | "Leads" | "Promo Sazonal"
      content_type: "Guia" | "Modelo" | "Tutorial" | "Checklist"
      redemption_status: "solicitado" | "aprovado" | "concluído" | "expirado"
      rsvp_status: "confirmado" | "lista_espera" | "cancelado"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["MEMBER", "BLACK", "ADMIN"],
      benefit_category: [
        "Sessão Extra",
        "Diagnóstico",
        "Desconto Parceiro",
        "Evento VIP",
      ],
      campaign_objective: ["Tráfego WhatsApp", "Leads", "Promo Sazonal"],
      content_type: ["Guia", "Modelo", "Tutorial", "Checklist"],
      redemption_status: ["solicitado", "aprovado", "concluído", "expirado"],
      rsvp_status: ["confirmado", "lista_espera", "cancelado"],
    },
  },
} as const
