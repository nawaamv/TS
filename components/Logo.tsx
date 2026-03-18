import Image from 'next/image';

export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  // To change the logo, simply replace the 'logo.svg' file in the 'public' folder.
  return (
    <Image 
      src="/logo.svg" 
      alt="ISSA Seminar Logo" 
      width={48}
      height={48}
      className={`object-contain ${className}`}
    />
  );
}

