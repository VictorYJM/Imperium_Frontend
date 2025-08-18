import { create } from "zustand";
import type { AuthStore } from "../types";

export const useAuthStore = create<AuthStore>((set) => ({
    session: null,
    user: null,
    profile: null,

    setSession: (session) => {
        set({
            session: session,
            user: session?.user ?? null,
        });
    },

    setProfile: (profile) => {
        set({ profile: profile });
    },

    clearAuth: () => {
        set({ session: null, user: null, profile: null });
    },
}));