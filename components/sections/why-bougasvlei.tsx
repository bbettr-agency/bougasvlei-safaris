import { Reveal, Stagger } from "@/engine/motion";

// Consolidated from the former "Why stay" + "Why Bougasvlei" card grids —
// the strongest reasons, as editorial rows rather than ten boxes.
const reasons = [
  {
    title: "Family-run & personally hosted",
    text: "You're never just a booking. André and Lida host every guest themselves — deep local knowledge and genuine hospitality from arrival to departure.",
  },
  {
    title: "Quality hunting, ethically managed",
    text: "Fair-chase rifle and bow safaris across well-managed bushveld, with 20+ species and strong trophy quality guided by experienced professional hunters.",
  },
  {
    title: "Eco-friendly & malaria-free",
    text: "Sustainable, low-impact hospitality in a secure, malaria-free reserve — comfort and peace of mind without compromising the wild.",
  },
  {
    title: "For families and international guests",
    text: "A family-friendly estate with seamless logistics, transfers and trophy-export guidance that hunters, families and corporate groups can trust.",
  },
  {
    title: "Private & unhurried",
    text: "A quiet bushveld retreat where your group has space and exclusivity — time to slow down and reconnect around the fire.",
  },
];

export default function WhyBougasvlei() {
  return (
    <section className="bg-brand-ivory px-6 py-24 text-brand-charcoal sm:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-brand-bronze">
            Why Bougasvlei
          </p>
          <h2 className="mt-6 text-[2rem] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[2.6rem]">
            An African safari that stays with you
          </h2>
        </div>

        <Stagger className="mt-14 border-t border-brand-charcoal/15">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              preset="fadeUpItem"
              className="grid gap-3 border-b border-brand-charcoal/15 py-8 md:grid-cols-[0.85fr_1.6fr] md:gap-12"
            >
              <h3 className="flex items-start gap-4 text-lg font-medium leading-snug tracking-[-0.01em]">
                <span className="nums mt-1 text-sm text-brand-bronze/70">
                  0{i + 1}
                </span>
                {r.title}
              </h3>
              <p className="text-base leading-relaxed text-brand-charcoal/65">
                {r.text}
              </p>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
