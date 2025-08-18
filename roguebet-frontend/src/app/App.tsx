import { useEffect } from 'react'
import { useAuthStore } from '../shared/store/useAuthStore'
import { supabase } from '../lib/supabase'
import { AppRouter } from './router'

function App() {
  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
    subscription?.unsubscribe();
    };
  }, [setSession]);

  return <AppRouter />;
}

export default App;