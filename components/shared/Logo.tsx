import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizes = {
    sm: { box: 'w-8 h-8', text: 'text-lg' },
    md: { box: 'w-10 h-10', text: 'text-xl' },
    lg: { box: 'w-12 h-12', text: 'text-2xl' },
  };

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div
        className={`${sizes[size].box} bg-primary-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary-600/20`}
      >
        <span className="text-white font-mono font-bold">CX</span>
      </div>
      {showText && (
        <span className={`font-bold ${sizes[size].text} tracking-tight`}>
          CodengenX
        </span>
      )}
    </Link>
  );
}
