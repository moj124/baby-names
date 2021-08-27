export function fitlerNames(
  gender: string,
  text: string,
  favourites: string[],
  element: { id: number; name: string; sex: string }
): boolean {
  if (gender !== "none") {
    return (
      element.name.toLowerCase().includes(text.toLowerCase()) &&
      element.sex === gender[0] &&
      !favourites.includes(element.name)
    );
  } else {
    return (
      element.name.toLowerCase().includes(text.toLowerCase()) &&
      !favourites.includes(element.name)
    );
  }
}
