import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors:{
        green: {
            500: "#0b993a",
          },
          p: {
            green: "#00d92b",
            black: "#171717",
          },
          black: {
            5: "#F3F7F3",
            10: "#eef4ef",
            20: "#d8e2da",
            40: "#bac4bb",
            60: "#7a8279",
            80: "#536657",
          },
    },
  fonts: {
    heading: `Ubuntu`,
    body: `Ubuntu`,
  },
  textStyles: {
    h1: {
      fontSize: {
        base: "30px",
        md: "32px",
      },
      color: "p.black",
      lineHeight: {
        base: "34px",
        md: "36px",
      },
    },
    h2: {
      fontSize: {
        base: "24px",
        md: "28px",
      },
      color: "p.black",
      lineHeight: { base: "28px", md: "32px" },
    },

    h3: {
      fontSize: {
        base: "22px",
        md: "24px",
        xl: "32px",
      },
      color: "p.black",

      lineHeight: { base: "26px", md: "28px", xl: "36px" },
    },

    h4: {
      fontSize: {
        base: "20px",
        md: "22px",
      },
      color: "p.black",

      lineHeight: { base: "24px", md: "26px" },
    },
    h5: {
      fontSize: {
        base: "18px",
        md: "20px",
      },
      color: "p.black",

      lineHeight: { base: "22px", md: "24px" },
    },
    h6: {
      fontSize: {
        base: "16px",
        md: "18px",
      },
      color: "p.black",

      lineHeight: { base: "20px", md: "22px" },
    },
  },

  fontSizes: {
    xs: "12px",
    sm: "14px",
    base: { base: "16px", md: "18px" },
    lg: { base: "18px", md: "20px" },
    xl: { base: "20px", md: "22px" },
    "2xl": { base: "22px", md: "24px" },
    "3xl": { base: "24px", md: "28px" },
    "4xl": { base: "30px", md: "32px" },
  },

  styles: {
    global: {
      body: {
        background: "#F3F7F3",
      },
    },
  },

  components:{
    Button:{
        baseStyle: {
            fontWeight: 'bold', 
            borderRadius: '10px'
          },
    },
    FormLabel:{
      baseStyle:{
        fontSize: '14px'
      }
    },
    Input:{
      variants:{
        outline:{
          field:{
            h:'35px',
            fontSize:'sm',
            _focus:{
              boxShadow: '0 0 0 1px green'
            }
          }
        }
      }
    },
    Textarea:{
      variants:{
        outline:{
            h:'35px',
            fontSize:'sm',
            _focus:{
              boxShadow: '0 0 0 1px green'
            } 
        }
      }
    },

  }
},
withDefaultColorScheme({ colorScheme: "green" })
);
