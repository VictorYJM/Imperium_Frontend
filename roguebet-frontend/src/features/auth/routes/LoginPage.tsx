import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";
import { supabase } from "../../../lib/supabase";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();

        setIsLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) { throw error; }
            navigate("/");
        }

        catch (err: any) { setError(err.error_description || err.message || "Unknown error...") }
        finally { setIsLoading(false); }
    }

    return (
        // main screen
        <div className="min-h-screen bg-background flex items-center justify-center p-4">

            {/*external border*/}
            <div className="w-full animate-rotate-border max-w-sm rounded-lg bg-conic/[from_var(--border-angle)] from-surface via-glow to-surface p-[2px]">

                {/*form's card*/}
                <div className="bg-surface p-8 rounded-md w-full h-full">
                    <h1 className="text-3xl font-bold text-center text-text-primary mb-6">
                        Rogue Bet
                    </h1>
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                                Email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">
                                Senha
                            </label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                        {error && (<p className="text-sm text-red-400 text-center">{error}</p>)}

                        <div>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Loading..." : "Sign In"}
                            </Button>
                        </div>

                        <h1 className="block text-sm font-medium text-text-primary mb-2">
                            Not sign up?
                            <a href="/register" className="text-blue-600 decoration-2 hover:underline"> Click here!</a>
                        </h1>
                    </form>
                </div>
            </div>
        </div>
    );
}