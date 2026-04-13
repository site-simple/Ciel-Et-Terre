interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
}

export default function Skeleton({ className = "", variant = "rectangular" }: SkeletonProps) {
  const variantClasses = {
    text: "h-4 w-full rounded",
    circular: "rounded-full",
    rectangular: "rounded-xl",
  };

  return (
    <div
      className={`animate-shimmer bg-gradient-to-r from-mist via-stone-light to-mist bg-[length:200%_100%] ${variantClasses[variant]} ${className}`}
    />
  );
}
