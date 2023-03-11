import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";

export const colors = {
  primary: "#181B23",
  secondary: "#181B23",
  background: "#181B23",

  gray: {
    "900": "#181B23",
    "800": "#1F2029",
    "700": "#353646",
    "600": "#4B4D63",
    "500": "#616480",
    "400": "#797D9A",
    "300": "#9699B0",
    "200": "#B3B5C6",
    "100": "#D1D2DC",
    "50": "#EEEEF2",
  },
  red: {
    "500": "#E5122A",
  },
  blue: {
    "400": "#007aff",
  },
};

export const data = {
  title: "Barber",
  description: "Barber Shop",
  short_name: "Barber",
};

export const theme: ThemeConfig = extendTheme({
  initialColorMode: "light",
  colors,
  fonts: {
    heaing: "'Roboto', sans-serif",
    body: "'Roboto', sans-serif",
  },
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        bg: mode("gray.100", "gray.900")(props),
        color: props.colorMode === "dark" ? "gray.50" : "gray.900",
        overflow: "hidden",
      },
    }),
  },
});
