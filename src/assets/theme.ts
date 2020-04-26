export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    quarternary: string;
    warmGray: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: '#924623',
    secondary: '#398e8f',
    tertiary: '#f9f4f0',
    quarternary: '#f4ede7',
    warmGray: '#41413a',
  },
  text: {
    primary: '#41413a',
    secondary: '#ffffff',
  },
};
