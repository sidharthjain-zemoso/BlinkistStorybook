import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading: true;
    heading3: true;
    subtitle3: true;
    body3: true;
    caption1: true;
    caption2: true;
    caption3: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading: React.CSSProperties;
    heading3: React.CSSProperties;
    subtitle3: React.CSSProperties;
    body3: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    heading?: React.CSSProperties;
    heading3: React.CSSProperties;
    subtitle3?: React.CSSProperties;
    body3?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    caption3: React.CSSProperties;
  }

  interface PaletteColor {
    darker?: string;
    border?: string;
    placeholder?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
    placeholder?: string;
    border?: string;
  }

  interface Palette {
    greyscale: Palette["primary"];
    textcolor: Palette["primary"];
    backgroundcolor: Palette["primary"];
  }

  interface PaletteOptions {
    greyscale?: PaletteOptions["primary"];
    textcolor?: PaletteOptions["primary"];
    backgroundcolor?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          // "&:hover": {
          //   backgroundColor: "none",
          // },
        },
      },
    },
  },
  spacing: 4,
  palette: {
    primary: {
      light: "#E2F2E9",
      main: "#2CE080",
      dark: "#22C870",
      darker: "#20BA68",
    },
    secondary: {
      light: "#DFE8F6",
      main: "#0365F2",
    },
    greyscale: {
      light: "#BAC9CF",
      main: "#6C787F",
      dark: "#3A4649",
      darker: "#042330",
    },
    textcolor: {
      light: "#6D787E",
      main: "#03314B",
      placeholder: "#747575",
      dark: "#042330",
    },
    backgroundcolor: {
      light: "#F7F7F7",
      main: "#F1F6F4",
    },
  },
  typography: {
    heading: {
      fontSize: "36px",
      lineHeight: "45px",
      // fontWeight: 700,
      fontFamily: "Cera Pro Medium",
    },
    heading3: {
      fontSize: "24px",
      lineHeight: "30.17px",
      // fontWeight: 700,
      fontFamily: "Cera Pro Medium",
    },
    subtitle1: {
      fontSize: "24px",
      lineHeight: "32px",
      // fontWeight: 500,
      fontFamily: "Cera Pro Medium",
    },
    subtitle2: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 700,
      fontFamily: "Cera Pro Light",
    },
    subtitle3: {
      fontSize: "18px",
      lineHeight: "24px",
      // fontWeight: 400,
      fontFamily: "Cera Pro Light",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "20px",
      // fontWeight: 700,
      fontFamily: "Cera Pro Medium",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
      // fontWeight: 400,
      fontFamily: "Cera Pro Light",
    },
    body3: {
      fontSize: "22px",
      lineHeight: "20px",
      // fontWeight: 400,
      fontFamily: "Cera Pro Light",
    },
    caption1: {
      fontSize: "14px",
      lineHeight: "22px",
      // fontWeight: 400,
      fontFamily: "Cera Pro Light",
    },
    caption2: {
      fontSize: "14px",
      lineHeight: "22px",
      // fontWeight: 700,
      fontFamily: "Cera Pro Medium",
    },
    caption3: {
      fontSize: "14px",
      lineHeight: "17.6px",
      // fontWeight: 400,
      fontFamily: "Cera Pro Light",
    },
  },
});

// theme.overrides = {
//   ...theme.overrides,
//   MuiButton: {
//     root: {
//     }
//   }
// }
