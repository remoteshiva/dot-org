import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '../../assets/theme';

interface ButtonProps {
  themeType: 'primary' | 'secondary';
  theme: Theme;
  children: string;
}

export default function Button({ children, themeType, theme }: ButtonProps) {
  const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${theme.text.secondary};
  background-color: ${
    themeType === 'primary' ? theme.colors.primary : theme.colors.secondary
  }};
`;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledButton>{children}</StyledButton>
      </ThemeProvider>
    </div>
  );
}
