export const RowSkeleton = () => {
  return (
    <div className="flex items-center w-full gap-3 py-4 border-b border-grey-light animate-pulse">
      <div className="w-4 h-4 rounded bg-grey-light"></div>

      <div className="w-10 h-10 rounded-full bg-grey-light"></div>

      <div className="flex-1 w-48 h-5 rounded bg-grey-light"></div>
      <div className="w-10 h-10 rounded-full bg-grey-light"></div>

      <div className="flex-1 h-5 rounded w-36 bg-grey-light"></div>
      <div className="flex-1 h-5 rounded w-36 bg-grey-light"></div>

      <div className="flex-1 w-24 h-5 rounded bg-grey-light"></div>
    </div>
  );
};
