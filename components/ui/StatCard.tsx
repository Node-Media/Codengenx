import CountUp from './CountUp';

interface StatCardProps {
  end: number;
  suffix?: string;
  label: string;
}

export default function StatCard({ end, suffix, label }: StatCardProps) {
  return (
    <div>
      <div className="flex items-baseline gap-1">
        <CountUp 
          end={end} 
          suffix={suffix || ''} 
          className="text-3xl font-bold text-secondary-900" 
        />
      </div>
      <div className="text-sm text-secondary-500 font-medium">{label}</div>
    </div>
  );
}
