import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const Loading = ({ className, color, width, height }) => {
  return (
    <div
      className={cn("w-full h-96 flex items-center justify-center", className)}
    >
      <Loader2
        className="w-8 h-8 mr-2 animate-spin"
        color={color || "white"}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Loading;
