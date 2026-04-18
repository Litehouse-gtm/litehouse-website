import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Image
              src="/images/litehouse-logo.png"
              alt="Litehouse"
              width={100}
              height={28}
              className="h-6 w-auto"
            />
            <span className="text-sm text-muted-light text-center sm:text-left">
              B2B outbound that actually works.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href="#how-it-works"
              className="text-sm text-muted hover:text-navy transition-colors"
            >
              How It Works
            </a>
            <a
              href="#services"
              className="text-sm text-muted hover:text-navy transition-colors"
            >
              Services
            </a>
            <a
              href="#results"
              className="text-sm text-muted hover:text-navy transition-colors"
            >
              Results
            </a>
            <a
              href="#faq"
              className="text-sm text-muted hover:text-navy transition-colors"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-light">
            &copy; {new Date().getFullYear()} Litehouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
