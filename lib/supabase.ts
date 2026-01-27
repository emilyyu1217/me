import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Message {
  id: number
  email: string
  message: string
  question: string | null
  answer: string | null
  created_at: string
}

export interface Location {
  id: number
  city: string
  updated_at: string
}
