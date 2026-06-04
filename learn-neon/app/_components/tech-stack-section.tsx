import MorphText from "@/components/morph-text";

const featuredStacks = ["React", "Next.js", "TypeScript"];

const otherStacks = [
  "GSAP",
  "Tailwind",
  "Prisma",
  "Supabase",
  "PostgreSQL",
  "Vercel",
  "Figma",
];

export default function TechStackSection() {
  return (
    <section className="flex w-full flex-col items-center px-4 py-8 lg:px-8">
      <div className="w-full flex-col items-center justify-center py-24">
        <MorphText
          text="MODERN"
          className="font-heading text-[16vw] leading-none uppercase"
        />
        <MorphText
          text="TECH STACK"
          className="font-heading text-[16vw] leading-none uppercase"
        />
      </div>
      <div className="min-h-dvh w-full flex-col items-center justify-center">
        <h2 className="font-medium uppercase">Professional at</h2>
        <section className="w-full">
          {/* MOBILE */}
          <div className="grid grid-cols-2 lg:hidden">
            {[...featuredStacks, ...otherStacks].map((stack) => (
              <div
                key={stack}
                className="flex aspect-square items-center justify-center border"
              >
                {stack}
              </div>
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3">
              {featuredStacks.map((stack) => (
                <div
                  key={stack}
                  className="flex aspect-video items-center justify-center border"
                >
                  {stack}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7">
              {otherStacks.map((stack) => (
                <div
                  key={stack}
                  className="flex aspect-square items-center justify-center border"
                >
                  {stack}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
