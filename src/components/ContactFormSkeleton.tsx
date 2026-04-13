import Skeleton from "./Skeleton";

export default function ContactFormSkeleton() {
  return (
    <div className="space-y-5">
      {/* Name */}
      <div>
        <Skeleton variant="text" className="w-16 h-4 mb-1.5" />
        <Skeleton className="h-12 w-full" />
      </div>
      {/* Email */}
      <div>
        <Skeleton variant="text" className="w-16 h-4 mb-1.5" />
        <Skeleton className="h-12 w-full" />
      </div>
      {/* Phone */}
      <div>
        <Skeleton variant="text" className="w-24 h-4 mb-1.5" />
        <Skeleton className="h-12 w-full" />
      </div>
      {/* Subject */}
      <div>
        <Skeleton variant="text" className="w-16 h-4 mb-1.5" />
        <Skeleton className="h-12 w-full" />
      </div>
      {/* Message */}
      <div>
        <Skeleton variant="text" className="w-20 h-4 mb-1.5" />
        <Skeleton className="h-32 w-full" />
      </div>
      {/* Button */}
      <Skeleton className="h-12 w-full rounded-full" />
    </div>
  );
}
