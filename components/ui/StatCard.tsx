import CountUp from './CountUp';

interface StatCardProps {
  end: number;
  suffix?: string;
  label: string;
}

export default function StatCard({ end, suffix, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="flex items-baseline gap-1 justify-center">
        <CountUp 
          end={end} 
          suffix={suffix || ''} 
          className="text-2xl sm:text-3xl font-bold text-secondary-900" 
        />
      </div>
      <div className="text-xs sm:text-sm text-secondary-500 font-medium whitespace-nowrap">{label}</div>
    </div>
  );
}
