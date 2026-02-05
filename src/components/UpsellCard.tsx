export default function UpsellCard() {
    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-black border border-white/10 relative overflow-hidden group">
            {/* Code Editor Aesthetic - Header */}
            <div className="absolute top-0 left-0 w-full h-8 bg-neutral-900 border-b border-white/5 flex items-center px-4 gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-neutral-500 font-mono">
                    main.py
                </span>
            </div>

            {/* Code Content */}
            <div className="p-6 pt-12 font-mono text-sm text-neutral-400 z-10 relative">
                <div className="group-hover:text-neon-lime transition-colors duration-300">
                    <span className="text-purple-400">def</span>{" "}
                    <span className="text-blue-400">master_python</span>():
                </div>
                <div className="pl-4">
                    <span className="text-orange-400">level</span> ={" "}
                    <span className="text-green-400">&quot;Beginner&quot;</span>
                </div>
                <div className="pl-4">
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-green-400">&quot;Hired&quot;</span>
                </div>
            </div>

            <div className="absolute bottom-4 right-4 z-20">
                <button className="px-4 py-2 bg-neon-lime text-black font-clash font-bold text-sm rounded hover:bg-white transition-colors">
                    Start Coding &rarr;
                </button>
            </div>

            {/* Glow Effect */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon-lime/20 blur-[80px]" />
        </div>
    );
}
