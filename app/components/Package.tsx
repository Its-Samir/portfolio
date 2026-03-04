export default function PackageCard() {
    return (
        <div className="">
            <a
                href="https://www.npmjs.com/package/formaze"
                target="_blank"
                className="group relative mx-auto block w-full max-w-xl overflow-hidden rounded-2xl p-[1px] 
                   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                   transition-all duration-500 
                   sm:hover:scale-[1.02] sm:hover:shadow-2xl"
            >
                {/* Glow Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                        opacity-0 blur-xl transition-opacity duration-500 
                        group-hover:opacity-60"></div>

                {/* Content */}
                <div className="relative rounded-2xl bg-zinc-900 
                        p-5 sm:p-6 md:p-8 
                        text-white">

                    {/* Top Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-indigo-400">
                            Try my latest NPM Package
                        </span>

                        <span className="rounded-full bg-indigo-500/20 px-3 py-1 
                             text-[10px] sm:text-xs font-semibold text-indigo-300">
                            Open Source
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl 
                         font-bold tracking-tight 
                         transition-colors duration-300 
                         group-hover:text-indigo-400">
                        Formaze
                    </h2>

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base 
                        leading-relaxed text-zinc-400">
                        An Easy Form Builder for React.js
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        <span className="rounded-lg bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                            TypeScript
                        </span>
                        <span className="rounded-lg bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                            React-hook-form
                        </span>
                        <span className="rounded-lg bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                            Zod
                        </span>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 flex items-center text-sm sm:text-base font-medium text-indigo-400">
                        View on NPM →
                    </div>
                </div>
            </a>
        </div>
    );
}