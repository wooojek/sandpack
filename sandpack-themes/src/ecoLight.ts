import type { SandpackTheme } from "./types";

// ecoLight is inspired by love for green and associative environmental colors
export const ecoLight: SandpackTheme = {
  colors: {
    surface1: "#eae8e8",
    surface2: "#009977",
    surface3: "#ffffff",
    clickable: "#572222",
    base: "#f7eaea",
    disabled: "#C5C5C5",
    hover: "#4D4D4D",
    accent: "#0a56b3",
    error: "#ff453a",
    errorSurface: "#e8cac6",
  },
  syntax: {
    plain: "#151515",
    comment: {
      color: "#a9a7a7",
      fontStyle: "italic",
    },
    keyword: "#0971F1",
    tag: "#097104",
    punctuation: "#3B3B3B",
    definition: "#042d60",
    property: "#9013fe",
    static: "#FF453A",
    string: "#f5a623",
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Overpass", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: "15px",
    lineHeight: "19px",
  },
};
