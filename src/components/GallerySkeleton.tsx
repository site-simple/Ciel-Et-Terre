import Skeleton from "./Skeleton";

export default function GallerySkeleton() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="overflow-visible flex flex-col items-center h-[calc(70vh-64px)] md:h-[calc(80vh-64px)] px-6">
        <div className="flex-1 flex flex-col items-start justify-center min-h-0 w-full max-w-xl">
          <Skeleton className="w-full aspect-square max-h-[calc(80vh-124px)]" />
          <div className="mt-3 ml-6">
            <Skeleton variant="text" className="w-48 h-5" />
            <Skeleton variant="text" className="w-32 h-3 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
