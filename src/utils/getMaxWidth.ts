export function getMaxWidth(itemsCount: number): string {
  if (itemsCount === 3) return "max-w-[1550px]";
  if (itemsCount >= 4) return "max-w-[1736px]";
  return "max-w-[910px]";
}
