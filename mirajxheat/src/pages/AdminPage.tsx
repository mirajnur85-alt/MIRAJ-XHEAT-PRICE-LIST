import React, { useState } from "react";
import { useProducts } from "@/contexts/ProductContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings, RefreshCw, Lock, LayoutDashboard, DollarSign, Plus, Trash2 } from "lucide-react";

export function AdminPage() {
    const {
        products, rates, updateProductPrice, updateProduct, bulkUpdateCurrency,
        addProduct, deleteProduct, addPriceOption, deletePriceOption, resetProducts
    } = useProducts();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Form States
    const [isAddingProduct, setIsAddingProduct] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: "", subtitle: "", image: "", videoUrl: "", prices: [] as any[], categories: ["mobile"]
    });
    const [showAddPriceForId, setShowAddPriceForId] = useState<string | null>(null);
    const [newPrice, setNewPrice] = useState({ duration: "", bdt: 0, inr: 0, usdt: 0 });

    const handleAddProduct = (e: React.FormEvent) => {
        e.preventDefault();
        const productToAdd = {
            ...newProduct,
            id: `prod-${Date.now()}`,
            prices: [{ duration: "1 Day", bdt: 0, inr: 0, usdt: 0 }]
        };
        addProduct(productToAdd as any);
        setIsAddingProduct(false);
        setNewProduct({ name: "", subtitle: "", image: "", videoUrl: "", prices: [], categories: ["mobile"] });
    };

    const handleAddPrice = (productId: string) => {
        if (!newPrice.duration) return;
        addPriceOption(productId, newPrice);
        setShowAddPriceForId(null);
        setNewPrice({ duration: "", bdt: 0, inr: 0, usdt: 0 });
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "mirajxheat33") {
            setIsAuthenticated(true);
            setError("");
        } else {
            setError("Invalid admin password");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center px-4">
                <div className="w-full max-w-md p-8 rounded-3xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)] backdrop-blur-xl shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[rgba(0,234,255,0.3)] mb-4">
                            <Lock className="w-8 h-8 text-[#00eaff]" />
                        </div>
                        <h1 className="text-3xl font-black text-white mb-2">Admin Portal</h1>
                        <p className="text-[#a9b0ff]">Enter your credentials to manage prices</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#a9b0ff] ml-1">Admin Password</label>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="h-12 rounded-xl bg-[rgba(0,0,0,0.3)]"
                            />
                            {error && <p className="text-xs text-red-400 ml-1 font-bold">{error}</p>}
                        </div>
                        <Button type="submit" className="w-full h-12 rounded-xl bg-gradient-to-r from-[#00eaff] to-[#8a3dff] font-bold text-white shadow-lg hover:shadow-[0_0_20px_rgba(0,234,255,0.4)] transition-all">
                            Unlock Portal
                        </Button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <LayoutDashboard className="w-6 h-6 text-[#00eaff]" />
                        <h1 className="text-4xl font-black text-white">Admin Dashboard</h1>
                    </div>
                    <p className="text-[#a9b0ff]">Full control over BDT, INR and USDT pricing</p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <Button
                        onClick={() => setIsAddingProduct(!isAddingProduct)}
                        className="rounded-xl bg-gradient-to-r from-[#00eaff] to-[#8a3dff] text-white font-bold"
                    >
                        {isAddingProduct ? <Trash2 className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
                        {isAddingProduct ? "Cancel Adding" : "Create New Product"}
                    </Button>
                    <Button
                        onClick={() => {
                            if (confirm("Reset everything to original state?")) resetProducts();
                        }}
                        variant="outline"
                        className="rounded-xl border-[rgba(255,255,255,0.1)] text-[#ff4fd8] hover:bg-red-500/10"
                    >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Full Reset
                    </Button>
                    <Button
                        onClick={() => setIsAuthenticated(false)}
                        variant="outline"
                        className="rounded-xl border-[rgba(255,255,255,0.1)] text-white"
                    >
                        Logout
                    </Button>
                </div>
            </div>

            {/* Add Product Form */}
            {isAddingProduct && (
                <div className="mb-12 p-8 rounded-3xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[#00eaff]/30 animate-in fade-in slide-in-from-top-4 duration-300">
                    <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                        <Plus className="w-6 h-6 text-[#00eaff]" />
                        Entry New Product
                    </h2>
                    <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-[#a9b0ff] uppercase ml-1">Product Name</label>
                            <Input
                                required
                                value={newProduct.name}
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                placeholder="Cheat Name X"
                                className="h-12 bg-black/40 border-white/10"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-[#a9b0ff] uppercase ml-1">Subtitle / Slogan</label>
                            <Input
                                required
                                value={newProduct.subtitle}
                                onChange={(e) => setNewProduct({ ...newProduct, subtitle: e.target.value })}
                                placeholder="The Ultimate Bypass"
                                className="h-12 bg-black/40 border-white/10"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-[#a9b0ff] uppercase ml-1">Image URL</label>
                            <Input
                                required
                                value={newProduct.image}
                                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                                placeholder="https://example.com/image.jpg"
                                className="h-12 bg-black/40 border-white/10"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-[#a9b0ff] uppercase ml-1">Video Demo URL</label>
                            <Input
                                value={newProduct.videoUrl}
                                onChange={(e) => setNewProduct({ ...newProduct, videoUrl: e.target.value })}
                                placeholder="https://youtube.com/watch?v=..."
                                className="h-12 bg-black/40 border-white/10"
                            />
                        </div>
                        <div className="md:col-span-1"></div>
                        <div className="md:col-span-3">
                            <Button type="submit" className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#00eaff] to-[#8a3dff] text-white font-black text-lg shadow-xl shadow-[#00eaff]/20">
                                Confirm & Add Product
                            </Button>
                        </div>
                    </form>
                </div>
            )}

            {/* Global Settings Section */}
            <div className="mb-12 p-8 rounded-3xl bg-gradient-to-br from-[rgba(0,234,255,0.1)] to-[rgba(138,61,255,0.1)] border-2 border-[#00eaff]/20 shadow-[0_0_30px_rgba(0,234,255,0.1)]">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-[#00eaff]/20 text-[#00eaff]">
                        <Settings className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-wider">Quick Multiplier (Bulk Update)</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-black text-[#00eaff] uppercase tracking-widest ml-1">BDT Rate Multiplier</label>
                        <div className="flex gap-3">
                            <div className="relative flex-1">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-[#00eaff]">৳</span>
                                <Input
                                    type="number"
                                    value={rates.bdt}
                                    onChange={(e) => bulkUpdateCurrency('bdt', parseFloat(e.target.value))}
                                    className="pl-10 h-14 rounded-2xl bg-black/40 border-white/10 text-xl font-black text-white focus:border-[#00eaff]"
                                />
                            </div>
                        </div>
                        <p className="text-[10px] text-white/40 font-bold ml-1 uppercase">Updates all products based on their USDT value</p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black text-[#8a3dff] uppercase tracking-widest ml-1">INR Rate Multiplier</label>
                        <div className="flex gap-3">
                            <div className="relative flex-1">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-[#8a3dff]">₹</span>
                                <Input
                                    type="number"
                                    value={rates.inr}
                                    onChange={(e) => bulkUpdateCurrency('inr', parseFloat(e.target.value))}
                                    className="pl-10 h-14 rounded-2xl bg-black/40 border-white/10 text-xl font-black text-white focus:border-[#8a3dff]"
                                />
                            </div>
                        </div>
                        <p className="text-[10px] text-white/40 font-bold ml-1 uppercase">Updates all products based on their USDT value</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="p-6 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)] hover:border-[#00eaff]/30 transition-all group outline-none">
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Product Info */}
                            <div className="w-full lg:w-1/4">
                                <div className="flex gap-4 mb-4">
                                    <img src={product.image} className="w-20 h-20 rounded-xl object-cover border border-white/10" alt="" />
                                    <div>
                                        <div className="space-y-2 mb-3">
                                            <Input
                                                value={product.name}
                                                onChange={(e) => updateProduct(product.id, { name: e.target.value })}
                                                className="h-8 font-black text-white bg-black/40 border-white/5"
                                            />
                                            <Input
                                                value={product.subtitle}
                                                onChange={(e) => updateProduct(product.id, { subtitle: e.target.value })}
                                                className="h-7 text-xs text-[#a9b0ff] bg-black/40 border-white/5"
                                            />
                                            <div className="relative">
                                                <Settings className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-white/40" />
                                                <Input
                                                    placeholder="YouTube URL"
                                                    value={product.videoUrl || ""}
                                                    onChange={(e) => updateProduct(product.id, { videoUrl: e.target.value })}
                                                    className="pl-7 h-7 text-[10px] text-[#ff4fd8] bg-black/40 border-white/5"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {product.categories?.map(c => (
                                                <span key={c} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/40 border border-white/10 uppercase font-black">{c}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    onClick={() => {
                                        if (confirm(`Are you sure you want to delete ${product.name}?`)) deleteProduct(product.id);
                                    }}
                                    variant="outline"
                                    className="w-full h-10 rounded-xl border-red-500/20 text-red-400 hover:bg-red-500/10 hover:border-red-500/50"
                                >
                                    <Trash2 className="w-3.5 h-3.5 mr-2" />
                                    Delete Product
                                </Button>
                            </div>

                            {/* Price Editors */}
                            <div className="flex-1">
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mb-4">
                                    {product.prices.map((price, idx) => (
                                        <div key={idx} className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-4 relative group/price">
                                            <div className="flex justify-between items-center pb-2 border-b border-white/5">
                                                <span className="text-[10px] font-black text-[#00eaff] uppercase tracking-widest">{price.duration}</span>
                                                <button
                                                    onClick={() => deletePriceOption(product.id, idx)}
                                                    className="p-1.5 rounded-lg bg-red-500/10 text-red-400 opacity-0 group-hover/price:opacity-100 transition-all hover:bg-red-500/20"
                                                >
                                                    <Trash2 className="w-3 h-3" />
                                                </button>
                                            </div>

                                            <div className="grid grid-cols-1 gap-3">
                                                {/* Price Inputs ... (unchanged) */}
                                                <div className="space-y-1">
                                                    <label className="text-[9px] font-black text-white/30 uppercase tracking-tighter ml-1">USDT Price</label>
                                                    <div className="relative">
                                                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#00eaff]" />
                                                        <Input
                                                            type="number"
                                                            step="0.1"
                                                            value={price.usdt}
                                                            onChange={(e) => updateProductPrice(product.id, idx, 'usdt', parseFloat(e.target.value))}
                                                            className="pl-8 h-9 rounded-lg bg-black/40 border-white/10 text-white font-black text-sm"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[9px] font-black text-white/30 uppercase tracking-tighter ml-1">BDT Price</label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-black text-[#00eaff]">৳</span>
                                                        <Input
                                                            type="number"
                                                            value={price.bdt}
                                                            onChange={(e) => updateProductPrice(product.id, idx, 'bdt', parseFloat(e.target.value))}
                                                            className="pl-8 h-9 rounded-lg bg-black/40 border-white/10 text-white font-black text-sm"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[9px] font-black text-white/30 uppercase tracking-tighter ml-1">INR Price</label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-black text-[#8a3dff]">₹</span>
                                                        <Input
                                                            type="number"
                                                            value={price.inr}
                                                            onChange={(e) => updateProductPrice(product.id, idx, 'inr', parseFloat(e.target.value))}
                                                            className="pl-8 h-9 rounded-lg bg-black/40 border-white/10 text-white font-black text-sm"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Add New Duration Button/Form */}
                                    {showAddPriceForId === product.id ? (
                                        <div className="p-4 rounded-xl bg-[#00eaff]/5 border-2 border-dashed border-[#00eaff]/30 space-y-3">
                                            <Input
                                                placeholder="Duration (e.g. 1 Year)"
                                                value={newPrice.duration}
                                                onChange={(e) => setNewPrice({ ...newPrice, duration: e.target.value })}
                                                className="h-9 text-xs bg-black/40"
                                            />
                                            <div className="flex gap-2">
                                                <Button onClick={() => handleAddPrice(product.id)} className="flex-1 h-9 rounded-lg bg-[#00eaff] text-black font-bold text-xs">Add</Button>
                                                <Button onClick={() => setShowAddPriceForId(null)} variant="outline" className="flex-1 h-9 rounded-lg border-white/10 text-white text-xs">Back</Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => setShowAddPriceForId(product.id)}
                                            className="h-full min-h-[150px] flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-white/10 text-white/20 hover:text-[#00eaff] hover:border-[#00eaff]/40 hover:bg-[#00eaff]/5 transition-all"
                                        >
                                            <Plus className="w-6 h-6" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Add Duration</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
