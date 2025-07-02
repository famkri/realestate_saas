import { createBrowserClient } from '@supabase/auth-helpers-nextjs'

export const supabase = createBrowserClient(
  process.env.https://huxkxnwwobuhqtrkhdlj.supabase.co,
  process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1eGt4bnd3b2J1aHF0cmtoZGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NzY5MzYsImV4cCI6MjA2NzA1MjkzNn0.2E0OP1yvpeadUMj1_2cqmiB11CpYi4-LS41ks9n1Y-s
)
