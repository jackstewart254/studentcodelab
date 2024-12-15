import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ptgxoqishsatvhumlmzb.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SECRET
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;