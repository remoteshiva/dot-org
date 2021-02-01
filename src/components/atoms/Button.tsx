import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '../../assets/theme';

interface ButtonProps {
  onClick(): void;
  children: string | JSX.Element;
  className?: string;
  theme: Theme;
  themeType: 'primary' | 'secondary';
  size: 'normal' | 'big';
}

export default function Button({
  onClick,
  children,
  className,
  themeType,
  theme,
  size = 'normal',
}: ButtonProps) {
  const StyledButton = styled.button`
  white-space: nowrap;
  font-size: 1rem;
  margin: 1em;
  padding: ${size === 'normal' ? '0.25em 1em' : '0.75em 1.75em'};
  border-radius: 8px;
  transition: all 150ms ease-in-out 0ms;
  color: ${theme.text.secondary};
  background-color: ${
    themeType === 'primary' ? theme.colors.primary : theme.colors.secondary
  }};
  &:hover {
    background-color: ${
      themeType === 'primary' ? theme.colors.warmGray : theme.colors.primary
    }
  }
`;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledButton onClick={onClick} className={className}>
          {children}
        </StyledButton>
      </ThemeProvider>
    </div>
  );
}
