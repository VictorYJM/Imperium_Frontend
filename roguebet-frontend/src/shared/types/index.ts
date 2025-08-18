import type { Session, User } from "@supabase/supabase-js";

export interface Profile {
    id: string;
    username: string;
    balance: number;
}

export interface AuthStore {
    session: Session | null;
    user: User | null;
    profile: Profile | null;
    
    setSession: (session: Session | null) => void;
    setProfile: (profile: Profile | null) => void;
    clearAuth: () => void;
}