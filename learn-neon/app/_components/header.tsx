import SwapText from "@/components/swap-text";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 invert flex w-full items-center justify-between h-12 px-4 text-sm font-extralight mix-blend-difference lg:px-8">
      <SwapText primary="Nabiel.dev" secondary="Nabiel.dev" />
      <SwapText primary="Menu" secondary="Open" />
      <SwapText
        primary="Let's Talk!"
        secondary="Contact Us"
        className="hidden lg:flex"
      />
    </header>
  );
}
