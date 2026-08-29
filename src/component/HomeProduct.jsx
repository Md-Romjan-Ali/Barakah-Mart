import { getProduct } from "@/lib/allGet";
import DisplayProduct from "./DisplayProduct";

// Demo Product Data (Caps, Tasbih, Attar)
// const initialProducts = [
//     {
//         id: 1,
//         name: "Luxury Omani Embroidered Cap",
//         category: "Cap",
//         price: 450,
//         originalPrice: 600,
//         rating: 4.9,
//         colors: ["Emerald Green", "Pure White", "Royal Blue"],
//         image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop",
//         description: "Premium handcrafted cotton tupi with intricate traditional embroidery. Lightweight and breathable."
//     },
//     {
//         id: 2,
//         name: "Turkish Velvet Prayer Cap",
//         category: "Cap",
//         price: 350,
//         originalPrice: 450,
//         rating: 4.8,
//         colors: ["Deep Black", "Maroon", "Dark Green"],
//         image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=600&auto=format&fit=crop",
//         description: "Soft velvet stretchable tupi suitable for daily prayers and formal Islamic occasions."
//     },
//     {
//         id: 3,
//         name: "Handmade Natural Sandalwood Tasbih",
//         category: "Tasbih",
//         price: 550,
//         originalPrice: 700,
//         rating: 5.0,
//         colors: ["Natural Wood", "Dark Walnut"],
//         image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=600&auto=format&fit=crop",
//         description: "100-bead natural aromatic sandalwood prayer beads with smooth finishing and durable cord."
//     },
//     {
//         id: 4,
//         name: "Crystal Glass Zikr Counter Tasbih",
//         category: "Tasbih",
//         price: 280,
//         originalPrice: 380,
//         rating: 4.7,
//         colors: ["Amber Gold", "Emerald Green", "Clear Crystal"],
//         image: "https://images.unsplash.com/photo-1590076215667-873d96c8913c?q=80&w=600&auto=format&fit=crop",
//         description: "33-bead faceted glass crystal tasbih crafted for easy counting and comfortable grip."
//     },
//     {
//         id: 5,
//         name: "Royal White Oud Concentrated Attar",
//         category: "Attar",
//         price: 850,
//         originalPrice: 1100,
//         rating: 4.9,
//         colors: ["6ml Bottle", "12ml Bottle"],
//         image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop",
//         description: "Long-lasting, non-alcoholic alcohol-free pure fragrance oil with rich woodsy notes."
//     },
//     {
//         id: 6,
//         name: "Rose De Taif Organic Attar",
//         category: "Attar",
//         price: 650,
//         originalPrice: 800,
//         rating: 4.8,
//         colors: ["6ml Bottle"],
//         image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=600&auto=format&fit=crop",
//         description: "Pure distilled Taif rose fragrance oil. Fresh, soothing, and alcohol-free."
//     }
// ];

export default async function HomeProduct() {
   const initialProducts=await getProduct(2)

    return (
        <section id="products" className="bg-emerald-950 text-white py-10 px-6 relative overflow-hidden font-sans">

            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#f59e0b 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10 space-y-12">

                {/* Section Header */}
                <div className="text-center space-y-3">
                    <span className="inline-block text-amber-400 font-semibold text-xs tracking-widest uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-400/30">
                        Sunnah Essentials
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Our Premium <span className="text-amber-400">Collection</span>
                    </h2>
                    <p className="text-emerald-200/80 text-sm max-w-lg mx-auto">
                        Explore authentic prayer caps, handcrafted tasbihs, and pure non-alcoholic attars crafted for daily use.
                    </p>
                </div>
<DisplayProduct initialProducts={initialProducts}/>
            </div>

            {/* Product Details Modal */}
            {/* {activeProduct && (
                <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-emerald-900 border border-emerald-700 text-white rounded-3xl max-w-lg w-full p-6 space-y-6 relative shadow-2xl">

                        <button
                            onClick={() => setActiveProduct(null)}
                            className="absolute top-4 right-4 text-emerald-300 hover:text-amber-400 font-bold text-lg"
                        >
                            ✕
                        </button>

                        <div className="h-56 w-full rounded-2xl overflow-hidden bg-emerald-950 border border-emerald-800">
                            <img
                                src={activeProduct.image}
                                alt={activeProduct.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-3">
                            <span className="text-xs bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-400/30">
                                {activeProduct.category}
                            </span>
                            <h3 className="text-2xl font-bold text-white">{activeProduct.name}</h3>
                            <p className="text-emerald-200/80 text-sm">{activeProduct.description}</p>

                            <div className="pt-2">
                                <p className="text-xs text-emerald-300 font-medium mb-1">Available Colors / Sizes:</p>
                                <div className="flex gap-2">
                                    {activeProduct.colors.map((c, i) => (
                                        <span key={i} className="text-xs bg-emerald-950 border border-emerald-700 px-2.5 py-1 rounded-lg text-amber-400">
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-emerald-800">
                            <span className="text-2xl font-extrabold text-amber-400">৳{activeProduct.price}</span>
                            <button
                                onClick={() => setActiveProduct(null)}
                                className="bg-amber-500 hover:bg-amber-400 text-emerald-950 px-6 py-2.5 rounded-xl font-bold text-sm"
                            >
                                Add to Cart
                            </button>
                        </div>

                    </div>
                </div>
            )} */}

        </section>
    );
}