export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    offWhite: string;
    tertiary: string;
    warmGray: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: '#924623',
    secondary: '#398e8f',
    offWhite: '#f9f4f0',
    tertiary: '#f4ede7',
    warmGray: '#41413a',
  },
  text: {
    primary: '#41413a',
    secondary: '#f9f4f0',
    tertiary: '#a09b8f',
  },
};
