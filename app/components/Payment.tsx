import { ExternalLink } from "lucide-react";

const CASHAPP_URL = "https://cash.app/$makingcashhh1";

export default function Payment() {
  return (
    <section className="py-24 lg:py-32 bg-[#1C1C1C] relative">
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-bold tracking-widest text-brand-green uppercase block mb-3">
          Support MaliWorks
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
          Support <span className="gradient-text">MaliWorks</span>
        </h2>
        <p className="text-[#D1D5DB] max-w-md mx-auto mb-12 leading-relaxed">
          Need to pay for completed work or want to support a young entrepreneur? You can securely send a payment below.
        </p>

        {/* Payment card */}
        <div
          className="rounded-2xl p-8 sm:p-10 border transition-all duration-300"
          style={{
            background: "#262626",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          {/* Cash App SVG mark */}
          <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center mx-auto mb-6">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-brand-green"
              aria-hidden="true"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.54 16.548c-.36.144-.733.257-1.117.335v.972a.75.75 0 01-1.5 0v-.918a5.26 5.26 0 01-2.494-1.04.75.75 0 01.936-1.17c.52.416 1.14.688 1.803.785l.003-.003v-2.63c-1.578-.406-3.171-.987-3.171-2.826 0-1.46 1.094-2.464 3.171-2.712V6.15a.75.75 0 011.5 0v.224c.73.09 1.418.34 2.016.722a.75.75 0 01-.806 1.264 3.27 3.27 0 00-1.21-.536v2.42c1.674.424 3.25 1.03 3.25 2.893 0 1.511-1.07 2.534-3.381 2.811zm-.003-5.473V8.73c-.888.18-1.421.636-1.421 1.237 0 .687.554.988 1.421 1.108zm1.5 2.18c0 .735-.562 1.07-1.497 1.214v-2.38c.935.2 1.497.577 1.497 1.166z" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-white mb-3">Pay or Support Mali</h3>

          <p className="text-[#9CA3AF] text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            Whether you&apos;re paying for completed work or simply want to encourage a hardworking young entrepreneur, every contribution helps Mali continue growing his business.
          </p>

          <a
            href={CASHAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pay or support Mali via Cash App (opens in a new tab)"
            className="inline-flex items-center justify-center gap-2 bg-brand-green text-black font-bold px-8 py-4 rounded-full text-base hover:bg-opacity-90 transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.54 16.548c-.36.144-.733.257-1.117.335v.972a.75.75 0 01-1.5 0v-.918a5.26 5.26 0 01-2.494-1.04.75.75 0 01.936-1.17c.52.416 1.14.688 1.803.785l.003-.003v-2.63c-1.578-.406-3.171-.987-3.171-2.826 0-1.46 1.094-2.464 3.171-2.712V6.15a.75.75 0 011.5 0v.224c.73.09 1.418.34 2.016.722a.75.75 0 01-.806 1.264 3.27 3.27 0 00-1.21-.536v2.42c1.674.424 3.25 1.03 3.25 2.893 0 1.511-1.07 2.534-3.381 2.811zm-.003-5.473V8.73c-.888.18-1.421.636-1.421 1.237 0 .687.554.988 1.421 1.108zm1.5 2.18c0 .735-.562 1.07-1.497 1.214v-2.38c.935.2 1.497.577 1.497 1.166z" />
            </svg>
            Pay or Support Mali
            <ExternalLink size={15} aria-hidden="true" />
          </a>

          <p className="text-[#9CA3AF] text-xs leading-relaxed mt-6 max-w-sm mx-auto">
            Every payment helps purchase equipment and supplies so Mali can continue providing reliable service throughout the community.
          </p>
        </div>

        <p className="text-[#9CA3AF] text-xs mt-12">
          © {new Date().getFullYear()} MaliWorks · Copperstone, Virginia Beach · (757) 777-6058
        </p>
      </div>
    </section>
  );
}
