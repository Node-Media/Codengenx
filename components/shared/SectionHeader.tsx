interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      {label && (
        <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{title}</h2>
      {description && (
        <p className="text-secondary-500 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
