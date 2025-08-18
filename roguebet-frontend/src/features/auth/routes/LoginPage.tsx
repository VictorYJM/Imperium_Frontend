import { Button } from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full animate-rotate-border max-w-sm rounded-lg bg-conic/[from_var(--border-angle)] from-surface via-glow to-surface p-[2px]">
                <div className="bg-surface p-8 rounded-md w-full h-full">
                    <h1 className="text-3xl font-bold text-center text-text-primary mb-6">
                        Rogue Bet
                    </h1>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                                Email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="seu@email.com"
                                required
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
                            />
                        </div>

                        <div>
                            <Button type="submit">
                                Entrar
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}