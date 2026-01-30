import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus, Mail, Lock, User as UserIcon, Loader2 } from "lucide-react";

export function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setIsSubmitting(true);

        try {
            const success = await signup(name, email, password);
            if (success) {
                navigate("/");
            } else {
                setError("Email already exists or registration failed");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 p-8 rounded-3xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)] backdrop-blur-xl shadow-2xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-blue opacity-10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                <div className="text-center relative z-10">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[rgba(138,61,255,0.2)] to-[rgba(0,234,255,0.2)] border-2 border-[rgba(138,61,255,0.3)] mb-4">
                        <UserPlus className="w-8 h-8 text-[#8a3dff]" />
                    </div>
                    <h2 className="text-3xl font-black text-white tracking-tight">Create Account</h2>
                    <p className="mt-2 text-sm text-[#a9b0ff] font-medium">
                        Join MIRAJ XHEAT OFFICIAL today
                    </p>
                </div>

                <form className="mt-8 space-y-5 relative z-10" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-black text-[#a9b0ff] uppercase tracking-widest ml-1">Full Name</label>
                            <div className="relative">
                                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a3dff]" />
                                <Input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="pl-11 h-12 rounded-xl bg-[rgba(0,0,0,0.3)] border-[rgba(255,255,255,0.1)] focus:border-[#8a3dff] text-white"
                                    placeholder="Your Name"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-black text-[#a9b0ff] uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a3dff]" />
                                <Input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-11 h-12 rounded-xl bg-[rgba(0,0,0,0.3)] border-[rgba(255,255,255,0.1)] focus:border-[#8a3dff] text-white"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-black text-[#a9b0ff] uppercase tracking-widest ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a3dff]" />
                                <Input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-11 h-12 rounded-xl bg-[rgba(0,0,0,0.3)] border-[rgba(255,255,255,0.1)] focus:border-[#8a3dff] text-white"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-black text-[#a9b0ff] uppercase tracking-widest ml-1">Confirm Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a3dff]" />
                                <Input
                                    type="password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="pl-11 h-12 rounded-xl bg-[rgba(0,0,0,0.3)] border-[rgba(255,255,255,0.1)] focus:border-[#8a3dff] text-white"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    {error && (
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-xs font-bold text-center">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 rounded-xl bg-gradient-to-r from-[#8a3dff] to-[#ff4fd8] font-black text-white shadow-[0_0_20px_rgba(138,61,255,0.3)] hover:shadow-[0_0_30px_rgba(138,61,255,0.5)] transition-all flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                <UserPlus className="w-5 h-5" />
                                <span>Create Account</span>
                            </>
                        )}
                    </Button>

                    <div className="text-center">
                        <p className="text-sm text-[#a9b0ff]">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-black text-white hover:text-[#8a3dff] transition-colors"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
