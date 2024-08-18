export const GridSkeleton = () => {
  return (
    <div className="flex flex-col w-full gap-3 py-4 border-b border-grey-light animate-pulse">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-grey-light"></div>
        <div className="flex-1 w-48 h-6 rounded bg-grey-light"></div>
      </div>
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-grey-light"></div>
        <div className="flex flex-col gap-2">
          <div className="flex-1 w-48 h-5 rounded bg-grey-light"></div>
          <div className="flex-1 w-48 h-3 rounded bg-grey-light"></div>
        </div>
      </div>
      <div className="w-48 h-4 rounded bg-grey-light"></div>
      <div className="w-48 h-3 rounded bg-grey-light"></div>
    </div>
  );
};
