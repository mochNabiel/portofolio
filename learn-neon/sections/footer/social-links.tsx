import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const socials = [
  {
    number: "01",
    label: "Github",
    href: "https://github.com/yourusername",
    sublabel: "Open source & projects",
  },
  {
    number: "02",
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    sublabel: "Professional profile",
  },
  {
    number: "03",
    label: "Email",
    href: "mailto:hello@nabiel.dev",
    sublabel: "Let's work together",
  },
  {
    number: "04",
    label: "Instagram",
    href: "https://instagram.com/yourusername",
    sublabel: "Behind the scenes",
  },
];

export default function SocialLinks() {
  return (
    <div className="w-full max-w-md">
      <p className="mb-8 text-xs tracking-[0.25em] uppercase">Connect</p>

      <div className="border-border border-t">
        {socials.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-border hover:bg-primary hover:text-background flex flex-col border-b px-0 py-6 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="text-primary group-hover:text-background text-xs tracking-[0.2em]">
                  {social.number}
                </span>

                <span className="font-mono text-xl uppercase lg:text-2xl">
                  {social.label}
                </span>
              </div>

              <ArrowUpRight className="h-6 w-6 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <span className="text-muted-foreground group-hover:text-background mt-2 pl-11 text-xs tracking-wide uppercase transition-colors">
              {social.sublabel}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
