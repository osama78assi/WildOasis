import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jvpylslnleuxltunsxpi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2cHlsc2xubGV1eGx0dW5zeHBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MzI2NjEsImV4cCI6MjAyNDAwODY2MX0.wOBuJd6IizaTjZxbw9TioTgi0dvoRcz_mD-4AuRhm10";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
