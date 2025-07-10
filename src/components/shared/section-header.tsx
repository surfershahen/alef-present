
import { FadeIn } from "@/components/shared/fade-in";

type SectionHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <FadeIn className={className}>
      <h2 className="text-4xl md:text-5xl font-headline font-bold text-center text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
