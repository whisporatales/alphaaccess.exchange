import React from "react";

// Data for the comparison table
const comparisonData = [
  {
    feature: "Control of Funds",
    exchange:
      'CON: You do not truly own the crypto. The exchange holds it for you. This is the infamous "Not your keys, not your crypto" principle. They can freeze your assets.',
    wallet:
      "PRO: Absolute, sovereign control. You are the sole owner of your private keys and therefore your funds. No one can freeze or seize them without your keys.",
  },
  {
    feature: "Security",
    exchange:
      "CON: A massive, centralized target for hackers. If the exchange is compromised, your funds can be stolen (e.g., Mt. Gox, FTX).",
    wallet:
      "PRO: Security is in your hands. Hardware wallets are virtually unhackable remotely. The weakest link is you (phishing, losing your seed phrase).",
  },
  {
    feature: "Ease of Use & Convenience",
    exchange:
      "PRO: Extremely user-friendly. Easy password recovery, simple trading interfaces, and integrated customer support. Ideal for beginners.",
    wallet:
      'CON: Higher learning curve. You are solely responsible for everything. If you lose your 12 or 24-word seed phrase, your funds are gone forever. No "Forgot Password" button.',
  },
  {
    feature: "Trading & Features",
    exchange:
      "PRO: High liquidity, advanced trading tools (margin, futures, options), and fast execution via order books. A one-stop-shop for buying, selling, and trading.",
    wallet:
      'CON: Trading is often done by connecting to a Decentralized Exchange (DEX), which can have lower liquidity, higher transaction fees ("gas"), and be slower. Not ideal for high-frequency trading.',
  },
  {
    feature: "Fiat Integration",
    exchange:
      "PRO: The primary bridge between traditional finance and crypto. Easily deposit and withdraw fiat currency (USD, EUR, etc.) via bank transfer or credit card.",
    wallet:
      "CON: Very limited to no direct fiat integration. You typically must first buy crypto on an exchange and then transfer it to your wallet.",
  },
  {
    feature: "Anonymity & Privacy",
    exchange:
      "CON: Zero anonymity. All major exchanges require KYC (Know Your Customer) verification, linking your identity to your transactions.",
    wallet:
      "PRO: High degree of pseudonymity. Your wallet address is a string of characters not directly linked to your real-world identity unless you choose to link it.",
  },
  {
    feature: "Access to DeFi/Web3",
    exchange:
      "CON: Very limited, sandboxed access. Exchanges are slowly adding DeFi features, but it's a curated, controlled experience.",
    wallet:
      "PRO: The native gateway to the entire Web3 ecosystem. Connect directly to any DeFi protocol, NFT marketplace, or dApp permissionlessly.",
  },
];

// Simple Checkmark and X icons for Pros and Cons
const ProIcon = () => (
  <svg
    className="w-5 h-5 text-green-500 mr-2 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

const ConIcon = () => (
  <svg
    className="w-5 h-5 text-red-500 mr-2 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

const FeatureCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{children}</p>
    </div>
);


export default function Home() {
  return (
    <div className="font-sans bg-[#0a0a0a] text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="20" fill="white"/>
                <path d="M30 90L60 30L90 90" stroke="#0a0a0a" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M45 70H75" stroke="#0a0a0a" strokeWidth="12" strokeLinecap="round"/>
            </svg>
            <h1 className="text-2xl font-bold text-white tracking-tighter">
              alphaaccess.exchange
            </h1>
          </div>
          <a
            href="#"
            className="bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Launch App
          </a>
        </header>

        {/* Hero Section */}
        <main className="py-20 sm:py-32 text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Crypto Exchanges vs. Wallets
          </h2>
          <p className="mt-4 text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
            The definitive comparison. At their core, the difference is about
            who holds the keys. This single point dictates the entire spectrum of pros and cons.
          </p>
           <div className="mt-10 flex justify-center gap-4">
             <a
                href="#comparison"
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                See Comparison
              </a>
               <a
                href="#"
                className="bg-white/10 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/20 transition-colors"
              >
                Learn More
              </a>
           </div>
        </main>

        {/* Key Difference Section */}
        <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <FeatureCard title="Crypto Exchange (Custodial)">
                    A company holds your private keys on your behalf. You have an account with a password, similar to a bank. Examples: Binance, Coinbase, Kraken.
                </FeatureCard>
                 <FeatureCard title="Crypto Wallet (Non-Custodial)">
                   You, and only you, hold the private keys. You are your own bank. Examples: MetaMask (software), Ledger (hardware), Trust Wallet (software).
                </FeatureCard>
            </div>
        </section>


        {/* Comparison Table Section */}
        <section id="comparison" className="py-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Detailed Breakdown
          </h3>
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="min-w-full divide-y divide-white/10">
              <thead className="bg-white/5">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Feature
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Crypto Exchanges (Custodial)
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Crypto Wallets (Non-Custodial)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 bg-[#0f0f0f]">
                {comparisonData.map((item) => (
                  <tr key={item.feature}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                      {item.feature}
                    </td>
                    <td className="whitespace-normal px-3 py-4 text-sm text-gray-400">
                      <div className="flex items-start">
                        {item.exchange.startsWith("CON:") ? <ConIcon /> : <ProIcon />}
                        <span>{item.exchange.substring(4).trim()}</span>
                      </div>
                    </td>
                    <td className="whitespace-normal px-3 py-4 text-sm text-gray-400">
                       <div className="flex items-start">
                        {item.wallet.startsWith("CON:") ? <ConIcon /> : <ProIcon />}
                        <span>{item.wallet.substring(4).trim()}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-20">
             <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Summary
          </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h4 className="font-bold text-lg text-white mb-2">Use an Exchange for:</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                        <li>On-ramping from fiat</li>
                        <li>Active trading, and convenience</li>
                        <li>Treat it like a stock brokerage.</li>
                        <li><span className="font-bold text-red-400">Don't leave your life savings there.</span></li>
                    </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h4 className="font-bold text-lg text-white mb-2">Use a Wallet for:</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                        <li>Long-term storage (HODLing)</li>
                        <li>True ownership</li>
                        <li>Interacting with the decentralized web (DeFi, NFTs)</li>
                        <li><span className="font-bold text-green-400">Treat it like your personal vault.</span></li>
                    </ul>
                </div>
            </div>
        </section>


        {/* Footer */}
        <footer className="text-center py-10 border-t border-white/10 mt-20">
          <p className="text-gray-500">
            © {new Date().getFullYear()} alphaaccess.exchange. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
