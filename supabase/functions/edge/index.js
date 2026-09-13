// supabase/functions/hello-world/index.ts
import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req) => {
  return new Response(
    JSON.stringify({ message: "Hello from Supabase Edge Function!" }),
    { headers: { "Content-Type": "application/json" } }
  );
});
