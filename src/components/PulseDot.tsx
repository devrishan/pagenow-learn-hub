export default function PulseDot() {
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-lime"></span>
            </span>
            <span className="text-xs font-satoshi text-neutral-300 font-medium">
                420 Students Online
            </span>
        </div>
    );
}
