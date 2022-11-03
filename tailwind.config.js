module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontFamily: {
        RFD: ["RFDewi"],
        RFExp: ["RFDewiExpanded"],
      },
      fontSize: {
        'sms': ['12px', '14px'],
        'sm': ['14px', '17px'],
        'sml': ['14px', '24px'],
        'xl': ['18px', '22px'],
        'xls': ['24px', '29px'],
        '2xl': ['28px', '35px'],
        '3xl': ['36px', '43px'],
      },
      extend: {
        colors: {
          primary: {
            DEFAULT: "#474955",
          },
          neon: {
            DEFAULT: "#71FBE4",
            red: "#E43774",
            blue: "#71FBE4",
            light: "#B8FDF1",
          },
          blue: {
            DEFAULT: "#5C7EB3",
            btn: "#000A3E",
          },
          gray: {
            DEFAULT: "#A79BB1",
          },
          fiol: {
            DEFAULT: "#420176",
          },
          bg: {
            DEFAULT: "#170622",
            mob: "#180623",
          },
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }
  
        md: "768px",
        // => @media (min-width: 768px) { ... }
  
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
  
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
  
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      letterSpacing: {
        wider: '2px',
        negative: '-0,41px',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  