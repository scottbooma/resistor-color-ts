export const COLORS: string[] = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

type Colors = {
  black: number;
  brown: number;
  red: number;
  orange: number;
  yellow: number;
  green: number;
  blue: number;
  grey: number;
  violet: number;
  white: number;
};

const colors: Colors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export const colorCode = (color: string): number => {
  return colors[color];
};
