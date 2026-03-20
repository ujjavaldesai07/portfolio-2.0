type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-[1.65rem] font-semibold tracking-tight text-white sm:text-[1.95rem]">{title}</h2>
      <p className="mt-3 text-[0.96rem] leading-7 text-white/65 sm:text-base">{description}</p>
    </div>
  );
}
