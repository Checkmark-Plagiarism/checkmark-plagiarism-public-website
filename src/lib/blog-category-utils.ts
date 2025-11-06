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
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const getHoverVariant = (category: string | undefined) => {
  const baseColors = getCategoryVariant(category);
  return baseColors.replace(/bg-(\w+)-100/g, 'hover:bg-$1-200').replace(/text-(\w+)-800/g, 'hover:text-$1-900');
};