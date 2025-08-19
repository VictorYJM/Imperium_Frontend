import { useEffect } from "react";
import { useAuthStore } from "../../../shared/store/useAuthStore";
import { getUserProfile } from "../../../shared/api/userAPI";
import { supabase } from "../../../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const { profile, setProfile, clearAuth } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (!profile) {
                    const userProfile = await getUserProfile();
                    setProfile(userProfile);
                }
            }

            catch (error) {
                clearAuth();
                await supabase.auth.signOut();
                navigate("/login");
            }
        };

        fetchProfile();
    }, [profile, setProfile, clearAuth, navigate]);

    const handleLogout = async () => { await supabase.auth.signOut(); }

    if (!profile) {
        return (
            <div className="min-h-screen bg-background text-text-primary flex items-center justify-center">
                <p className="text-xl">Loading user data...</p>
            </div>
        )
    }

    return (
    <div className="min-h-screen bg-background text-text-primary p-4 sm:p-8">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
          Bem-vindo, <span className="text-primary">{profile.username}</span>!
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-lg">
            Saldo: <span className="font-bold text-green-400">${(profile?.balance ?? 0).toFixed(2)}</span>
          </span>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Sair
          </button>
        </div>
      </header>

      <main>
        <h2 className="text-3xl font-bold text-center mb-8">Selecione um Jogo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cards dos jogos */}
          <div className="bg-surface h-64 rounded-lg flex items-center justify-center text-2xl font-bold cursor-pointer hover:ring-2 ring-primary transition-all">Roleta</div>
          <div className="bg-surface h-64 rounded-lg flex items-center justify-center text-2xl font-bold cursor-pointer hover:ring-2 ring-primary transition-all">Blackjack</div>
          <div className="bg-surface h-64 rounded-lg flex items-center justify-center text-2xl font-bold cursor-pointer hover:ring-2 ring-primary transition-all">Poker</div>
          <div className="bg-surface h-64 rounded-lg flex items-center justify-center text-2xl font-bold cursor-pointer hover:ring-2 ring-primary transition-all">Truco</div>
        </div>
      </main>
    </div>
  );
}