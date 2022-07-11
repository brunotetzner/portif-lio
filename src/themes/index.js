import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    black: {
      primary: "#000000",
      secondary: "rgb(11,7,7,0.6)",
    },

    red: {
      primary: "#E42C2C",
    },

    yellow: {
      primary: "#FFB851",
    },

    white: {
      primary: "#ffffff",
    },
  },
  fonts: {
    text: "M PLUS 1",
    body: "M PLUS 1",
  },

  fontSizes: {
    header_size_1: "69px",
    header_size_2: "30px",
    text_size_big: "20px",
    text_size: "13px",
  },

  fontWeights: {
    header_weight: "700",
    text_weight: "Semi Bold",
  },

  styles: {
    global: {
      body: {
        color: "white.1",
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: "#7C2492",
            borderRadius: '24px',
          },
        
      },
    },
  },
});
