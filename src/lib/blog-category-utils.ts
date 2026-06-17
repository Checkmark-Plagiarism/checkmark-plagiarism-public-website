export const getCategoryVariant = (category: string | undefined) => {
  switch (category) {
    case "All":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "Teaching":
      return "bg-teal-100 text-teal-800 border-teal-200";
    case "Parents":
      return "bg-purple-100 text-purple-800 border-purple-200";
    case "Technology":
      return "bg-green-100 text-green-800 border-green-200";
    case "Education":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "AI Research":
      return "bg-red-100 text-red-800 border-red-200";
    // Blogs section categories
    case "News":
      return "bg-sky-100 text-sky-800 border-sky-200";
    case "Product":
      return "bg-indigo-100 text-indigo-800 border-indigo-200";
    case "Industry":
      return "bg-amber-100 text-amber-800 border-amber-200";
    case "Quick Takes":
      return "bg-rose-100 text-rose-800 border-rose-200";
    // Learning section categories
    case "How It Works":
      return "bg-cyan-100 text-cyan-800 border-cyan-200";
    case "AI Basics":
      return "bg-emerald-100 text-emerald-800 border-emerald-200";
    case "Detection":
      return "bg-violet-100 text-violet-800 border-violet-200";
    case "Misconceptions":
      return "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const getHoverVariant = (category: string | undefined) => {
  const baseColors = getCategoryVariant(category);
  return baseColors.replace(/bg-(\w+)-100/g, 'hover:bg-$1-200').replace(/text-(\w+)-800/g, 'hover:text-$1-900');
};