export function formatNumberValue (value: number) {
  return Math.trunc(value)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1, ");
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}