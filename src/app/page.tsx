"use client"; // This directive is necessary for using React hooks like useState.

import React, { useState } from "react";

// --- Icons ---
const ProIcon = () => (
    <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);
const ConIcon = () => (
    <svg className="w-5 h-5 text-red-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);
const OracleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
const VaultIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>;
const EngineIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 12v.01M12 12v- .01M12 16v.01M12 16v-.01M12 16c-1.11 0-2.08-.402-2.599-1M12 16V7m0 9c1.657 0 3-.895 3-2s-1.343-2-3-2-3-.895-3-2 1.343-2 3-2" /></svg>;
const TokenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.789-2.756 9.362m-3.603-3.603A10.003 10.003 0 0112 2c5.523 0 10 4.477 10 10 0 .273-.01.543-.031.812M12 11a3 3 0 100-6 3 3 0 000 6z" /></svg>;

// --- Reusable Components ---
const FeatureCard = ({ title, children, icon }: { title: string; children: React.ReactNode; icon?: React.ReactNode }) => (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6 h-full text-left">
        {icon}
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{children}</p>
    </div>
);

const PillarCard = ({ title, icon, newFeature, children }: { title: string, icon: React.ReactNode, newFeature: string, children: React.ReactNode}) => (
    <div className="bg-white/5 border border-white/10 rounded-lg p-8">
        <div className="flex items-start">
            <div className="mr-6 shrink-0">{icon}</div>
            <div>
                 <h3 className="text-2xl font-bold text-white">{title}</h3>
                 <p className="mt-2 text-sm text-blue-400 font-semibold uppercase tracking-wide">{newFeature}</p>
                 <div className="mt-4 text-gray-300 space-y-4 prose prose-invert">{children}</div>
            </div>
        </div>
    </div>
);


// --- Page Components ---

const Home = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
    <>
        <main className="py-20 sm:py-32 text-center">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                The Hybrid Intelligence Exchange
            </h2>
            <p className="mt-4 text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
                Merging high-performance trading with a layer of AI-driven, on-chain analytics that no one else offers. Welcome to the "Glass Box" of crypto.
            </p>
            <div className="mt-10 flex justify-center gap-4">
                <button onClick={() => setCurrentPage('blueprint')} className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                    View The Blueprint
                </button>
                <button onClick={() => setCurrentPage('app')} className="bg-white/10 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/20 transition-colors">
                    Launch App
                </button>
            </div>
        </main>

        <section id="pillars" className="py-16">
             <h3 className="text-3xl font-bold text-center mb-12 text-white">
                Four Pillars of Innovation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-center">
                <FeatureCard title="The Alpha Oracle" icon={<OracleIcon />}>
                    Integrated, real-time on-chain intelligence. See what whales and smart money are doing, directly on your chart.
                </FeatureCard>
                 <FeatureCard title="The Strategy Vault" icon={<VaultIcon/>}>
                    The evolution of social trading. Subscribe to verifiable, on-chain strategies, not just traders.
                </FeatureCard>
                 <FeatureCard title="Hybrid Liquidity" icon={<EngineIcon/>}>
                    Deep CEX liquidity for major pairs and seamless, aggregated DEX access for the long-tail. All in one place.
                </FeatureCard>
                 <FeatureCard title="The $ALPHA Token" icon={<TokenIcon/>}>
                    A utility token with a purpose. Stake for tiered access to alpha, fee reductions, and governance rights.
                </FeatureCard>
            </div>
        </section>
    </>
);

const Blueprint = () => (
    <div className="py-20 sm:py-32 max-w-5xl mx-auto">
         <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-center">The Blueprint for Alpha Access</h2>
         <p className="mt-4 text-xl text-center text-gray-400 max-w-3xl mx-auto">
           This is what the world hasn't done yet. We're building an intelligence tool that gives traders a provable edge.
         </p>
         <div className="mt-20 space-y-12">
            <PillarCard title="The Alpha Oracle" icon={<OracleIcon/>} newFeature="Integrated On-Chain Intelligence">
                <p>Every other exchange shows you a price chart. We are the first to overlay actionable, real-time on-chain data directly onto the trading interface.</p>
                <ul>
                    <li><strong>Live Whale Tracking:</strong> See alerts like "$50M BTC just moved from a whale wallet to Binance" or "A dormant 8-year-old wallet just woke up."</li>
                    <li><strong>Smart Money Flow:</strong> Using wallet-tagging, we show you when "smart money" is accumulating or distributing a token via a simple Inflow/Outflow indicator.</li>
                    <li><strong>DeFi Event Integration:</strong> Get critical alerts for token unlocks, liquidity events, and other fundamental on-chain catalysts.</li>
                </ul>
                <p className="font-semibold text-blue-300">Currently, traders use separate, expensive services like Nansen or Arkham for this data. We build it natively into the trading experience.</p>
            </PillarCard>

            <PillarCard title="The Strategy Vault" icon={<VaultIcon/>} newFeature="Social Trading 2.0">
                <p>Copy-trading exists, but it's a black box. We introduce non-custodial, on-chain strategy vaults.</p>
                 <ul>
                    <li><strong>How it Works:</strong> A top trader encodes their strategy into a non-custodial smart contract (e.g., "Buy ETH when 'Smart Money' inflow exceeds $10M/hr").</li>
                    <li><strong>User Participation:</strong> Users deposit funds into the vault's smart contract. The funds never leave their control but automatically execute the strategy. Withdraw anytime.</li>
                    <li><strong>Transparency & Trust:</strong> The strategy’s rules and performance are all publicly verifiable on the blockchain, eliminating trust issues.</li>
                </ul>
                <p className="font-semibold text-blue-300">It's the first platform to merge social trading with the security and transparency of on-chain smart contracts.</p>
            </PillarCard>
            
            <PillarCard title="The Hybrid Liquidity Engine" icon={<EngineIcon/>} newFeature="Unified CEX + DEX Liquidity">
                 <p>Users shouldn't have to choose between the deep liquidity of a CEX and the vast token selection of a DEX. We provide both seamlessly.</p>
                 <ul>
                    <li><strong>For Major Pairs (BTC, ETH):</strong> We use our own high-speed Central Limit Order Book (CLOB) for tight spreads and instant execution.</li>
                    <li><strong>For Long-Tail Assets:</strong> Our engine automatically queries top DEXs (like Uniswap) through a smart order router to find the best price and execute the trade on the user's behalf.</li>
                </ul>
                <p className="font-semibold text-blue-300">No single exchange offers both a native, high-performance order book and seamless, integrated access to the entire on-chain market.</p>
            </PillarCard>

             <PillarCard title="The 'Alpha Access' Token ($ALPHA)" icon={<TokenIcon/>} newFeature="A Utility Token with a Purpose">
                 <p>The platform's native token, $ALPHA, is the key to unlocking the platform's core features, creating a merit-based system.</p>
                 <ul>
                    <li><strong>Tiered Access:</strong> Staking $ALPHA unlocks tiers of data from the "Alpha Oracle" and access to top Strategy Vaults.</li>
                    <li><strong>Fee Reduction:</strong> Pay trading fees in $ALPHA for a discount.</li>
                    <li><strong>Governance:</strong> $ALPHA holders vote on new on-chain metrics and featured traders.</li>
                </ul>
                <p className="font-semibold text-blue-300">It turns the platform into a gamified, self-improving ecosystem that rewards skill and participation.</p>
            </PillarCard>

         </div>
    </div>
);


const About = () => (
    <div className="py-20 sm:py-32 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-center">About AlphaAccess</h2>
        <div className="mt-12 text-lg text-gray-300 space-y-6 prose prose-invert lg:prose-xl mx-auto">
            <p>
                At AlphaAccess, we are building the next generation of digital asset exchange. Our vision originates from a simple, yet powerful conviction: the future of finance should be open, transparent, and accessible to everyone. We're building a "Glass Box," not a black box.
            </p>
            <p>
                Our mission is to bridge the critical gap between user-friendly centralized platforms and the powerful, sovereign world of DeFi. We are creating a hybrid intelligence platform that offers the best of both worlds—the ease of use of a traditional exchange, combined with the self-custody and transparency of DeFi, all enhanced by our unique <span className="font-bold text-blue-400">Alpha Oracle</span>. We believe you shouldn't have to choose between convenience and control.
            </p>
            <p>
                AlphaAccess is more than just a trading venue; it's an intelligence tool designed to empower you with a provable edge. Join us in building a more equitable and transparent financial future.
            </p>
        </div>
    </div>
);

const Learn = () => (
    <div className="py-20 sm:py-32 max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-center">Learn</h2>
        <p className="mt-4 text-xl text-center text-gray-400">Foundational concepts and the AlphaAccess edge.</p>
        
        <h3 className="text-2xl font-bold text-white tracking-tight mt-16 mb-8">Crypto Fundamentals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard title="What is Blockchain?">
                A decentralized, distributed digital ledger used to record transactions across many computers so that records cannot be altered retroactively without the alteration of all subsequent blocks.
            </FeatureCard>
            <FeatureCard title="What is Bitcoin?">
                A cryptocurrency designed to work as a medium of exchange that uses cryptography to control its creation and management, rather than relying on central authorities.
            </FeatureCard>
             <FeatureCard title="What is Ethereum?">
                A decentralized, open-source blockchain with smart contract functionality. Ether (ETH) is the native cryptocurrency of the platform.
            </FeatureCard>
             <FeatureCard title="Understanding Gas Fees">
                Payments made by users to compensate for the computing energy required to process and validate transactions on a blockchain.
            </FeatureCard>
        </div>

        <h3 className="text-2xl font-bold text-white tracking-tight mt-20 mb-8">The AlphaAccess Edge</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard title="On-Chain Intelligence">
                The process of analyzing public blockchain data to uncover insights about market sentiment, whale activity, and smart money movements. AlphaAccess integrates this directly into your trading view.
            </FeatureCard>
            <FeatureCard title="Strategy Vaults">
               A non-custodial smart contract that automatically executes a predefined trading strategy. Users can deposit funds to subscribe to a strategy, and its performance is fully transparent and verifiable on-chain.
            </FeatureCard>
             <FeatureCard title="Hybrid Liquidity">
                A system that combines a Central Limit Order Book (CLOB) for high-speed trading of major assets with a DEX Aggregator that finds the best prices for thousands of other tokens across the DeFi ecosystem.
            </FeatureCard>
             <FeatureCard title="Utility Tokens ($ALPHA)">
                A digital asset whose value is tied to its utility within a specific ecosystem. The $ALPHA token grants access to premium data, reduces fees, and gives holders a say in the platform's future.
            </FeatureCard>
        </div>
    </div>
);

const App = () => (
    <div className="py-20 sm:py-32 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">The Exchange</h2>
        <p className="mt-4 text-xl text-gray-400">Our full application is launching soon. Stay tuned.</p>
        <div className="mt-8 bg-white/5 border border-white/10 rounded-lg p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-white">Coming Q4 2025</h3>
        </div>
    </div>
);

// --- Main Application Shell ---

export default function Page() {
    const [currentPage, setCurrentPage] = useState("home");

    const renderPage = () => {
        switch (currentPage) {
            case "home":
                return <Home setCurrentPage={setCurrentPage} />;
            case "blueprint":
                return <Blueprint />;
            case "about":
                return <About />;
            case "learn":
                return <Learn />;
            case "app":
                return <App />;
            default:
                return <Home setCurrentPage={setCurrentPage} />;
        }
    };

    const NavLink = ({ pageName, children }: { pageName: string, children: React.ReactNode }) => (
        <button
            onClick={() => setCurrentPage(pageName)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === pageName ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
        >
            {children}
        </button>
    );

    return (
        <div className="font-sans bg-[#0a0a0a] text-gray-200 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="py-4 flex justify-between items-center border-b border-white/10 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-lg z-50">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
                        <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="120" height="120" rx="20" fill="white" />
                            <path d="M30 90L60 30L90 90" stroke="#0a0a0a" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M45 70H75" stroke="#0a0a0a" strokeWidth="12" strokeLinecap="round" />
                        </svg>
                        <h1 className="text-xl font-bold text-white tracking-tighter hidden sm:block">
                            alphaaccess.exchange
                        </h1>
                    </div>
                    <nav className="flex items-center gap-2 sm:gap-4">
                        <NavLink pageName="home">Home</NavLink>
                        <NavLink pageName="blueprint">Blueprint</NavLink>
                        <NavLink pageName="about">About</NavLink>
                        <NavLink pageName="learn">Learn</NavLink>
                    </nav>
                    <button
                        onClick={() => setCurrentPage('app')}
                        className="bg-white text-black font-semibold py-2 px-5 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                    >
                        Launch App
                    </button>
                </header>

                {renderPage()}

                <footer className="text-center py-10 border-t border-white/10 mt-20">
                    <p className="text-gray-500">
                        © {new Date().getFullYear()} alphaaccess.exchange. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
}

