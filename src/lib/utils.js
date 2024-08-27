import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, isToday, isYesterday } from "date-fns";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const generatePageNumbers = (totalPages, currentPage) => {
  const pages = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages);
    } else if (currentPage > 3 && currentPage < totalPages - 2) {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      );
    } else {
      pages.push(
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      );
    }
  }
  return pages;
};

export const formatDate = date => {
  const parsedDate = new Date(date);

  if (isToday(parsedDate)) {
    return `Today, ${format(parsedDate, "h:mm a")}`;
  } else if (isYesterday(parsedDate)) {
    return `Yesterday, ${format(parsedDate, "h:mm a")}`;
  } else {
    return format(parsedDate, "MMM d, yyyy 'at' h:mm a");
  }
};

export const formatFileSize = sizeInBytes => {
  if (sizeInBytes === 0) return "0 B";

  const units = ["B", "KB", "MB", "GB", "TB"];
  const k = 1024;
  const i = Math.floor(Math.log(sizeInBytes) / Math.log(k));
  const size = sizeInBytes / Math.pow(k, i);

  // Format size
  const formattedSize = size.toFixed(2);
  return `${parseFloat(formattedSize)} ${units[i]}`;
};
