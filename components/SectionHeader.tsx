interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <div className="w-1 h-8 bg-red-600 mr-3"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {title}
        </h2>
      </div>
      {subtitle && <p className="text-gray-600 ml-4">{subtitle}</p>}
    </div>
  );
}
