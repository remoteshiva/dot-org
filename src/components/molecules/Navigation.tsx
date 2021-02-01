import React, { Suspense } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  NavLinkProps,
  Route,
  Switch,
} from 'react-router-dom';
import About from './About';
import Example from './Example';
import TipsPage from './TipsPage';
import Button from '../atoms/Button';
import { Theme } from '../../assets/theme';
import Logo from '../../assets/images/logo.svg';
import Home from './Home';

interface NavigationProps {
  theme: Theme;
}

interface NavigationLinkProps extends NavLinkProps {
  theme: Theme;
  to: string;
  className?: string;
  children: JSX.Element | string;
}

function NavigationLink({
  theme,
  className,
  to,
  children,
}: NavigationLinkProps) {
  const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    color: ${theme.text.primary};
    font-size: 1em;
    border-bottom: 2px solid transparent;
    transition: all 150ms ease-in-out 0ms;
    padding: 14px;
    &:hover {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <StyledNavLink to={to} className={className}>
        {children}
      </StyledNavLink>
    </ThemeProvider>
  );
}

interface ContainerProps {
  children: JSX.Element | string;
}

function PageContainer({ children }: ContainerProps) {
  const Container = styled.div`
    width: 100%;
    display: flex;
    margin-top: 40px;
  `;

  return <Container>{children}</Container>;
}

function NarrowContainer({ children }: ContainerProps) {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return <Container>{children}</Container>;
}

export default function Navigation({ theme }: NavigationProps) {
  const navLinks = [
    // {
    //   to: '/how-it-works',
    //   className: 'ml-10 inline-flex itemscenter',
    //   content: 'How it works',
    // },
    {
      to: '/about',
      className: 'ml-10 inline-flex items-center',
      content: 'About us',
    },
    {
      to: '/tips',
      className: 'ml-10 inline-flex items-center',
      content: 'Tips',
    },
    {
      to: '/example-shiva',
      className: 'ml-10 inline-flex items-center',
      content: 'Sample RemoteShiva',
    },
  ];

  const StyledNav = styled.div`
    position: fixed;
    width: 100%;
    z-index: 10;
    background-color: ${theme.colors.offWhite};
  `;

  const StyledExternalLink = styled.a`
    display: flex;
    align-items: center;
    color: ${theme.text.primary};
    font-size: 1em;
    border-bottom: 2px solid transparent;
    transition: all 150ms ease-in-out 0ms;
    padding: 14px;
    &:hover {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <StyledNav>
          <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <div className="block sm:hidden md:hidden lg:hidden w-auto">
                    <a href="/">
                      <img src={Logo} alt="RemoteShiva yahrzeit candle logo" />
                    </a>
                  </div>
                  <div className="hidden sm:block lg:block w-auto">
                    <a href="/">
                      <img src={Logo} alt="RemoteShiva yahrzeit candle logo" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="hidden sm:ml-6 sm:flex sm:items-center flex"
                style={{ justifyContent: 'space-between' }}
              >
                {navLinks.map(({ to, content }) => (
                  <NavigationLink key={to} theme={theme} to={to}>
                    {content}
                  </NavigationLink>
                ))}
                <StyledExternalLink href="https://blog.remoteshiva.org/index.php/faq/">
                  FAQ
                </StyledExternalLink>
                <StyledExternalLink href="https://blog.remoteshiva.org/">Blog</StyledExternalLink>
                <Button
                  onClick={() => null}
                  size="big"
                  themeType="primary"
                  theme={theme}
                >
                  <a href="https://app.remoteshiva.org/">Log in</a>
                </Button>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg
                    className="block h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </StyledNav>
        <br />
        <Switch>
          <Route exact path="/">
            <PageContainer>
              <Suspense fallback={<div>loading....</div>}>
                <Home theme={theme} />
              </Suspense>
            </PageContainer>
          </Route>
          <Route path="/about">
            <NarrowContainer>
              <About theme={theme} />
            </NarrowContainer>
          </Route>
          <Route path="/example-shiva">
            <PageContainer>
              <Example theme={theme} />
            </PageContainer>
          </Route>
          <Route path="/tips">
            <NarrowContainer>
              <TipsPage theme={theme} />
            </NarrowContainer>
          </Route>
          <Route path="*">
            <NarrowContainer>
              <h1>Page not found</h1>
            </NarrowContainer>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
