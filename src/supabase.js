// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.REACT_APP_SUPABASE_URL,
//   process.env.REACT_APP_SUPABASE_ANON_KEY
// );

// export { supabase };

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// REACT_APP_SUPABASE_URL=https://vddeklizjmmtprejaskj.supabase.co
// REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkZGVrbGl6am1tdHByZWphc2tqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY5MDY2NTEsImV4cCI6MTk2MjQ4MjY1MX0.l72nU4zePQY7oaHYrNTTt4S49ZNMl4dTrY7UOO6ac88



// REACT_APP_SUPABASE_URL=https://ztjrqxiwhlppuoymqmni.supabase.co;
// REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0anJxeGl3aGxwcHVveW1xbW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcyNTUxMTcsImV4cCI6MTk2MjgzMTExN30.nfuhWTFa-QFQVLRUM7OKQ953MgUH2yKvBvDeqy1j6yg

