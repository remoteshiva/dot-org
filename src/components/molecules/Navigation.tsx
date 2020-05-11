import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  NavLink,
  NavLinkProps,
  Route,
  Switch,
} from 'react-router-dom';
import About from './About';
import Example from './Example';
import TipsPage from './TipsPage';
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

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <StyledNav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="hidden md:hidden">
            <div className="pt-2 pb-3">
              <a
                href="/"
                className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out sm:pl-5 sm:pr-6"
              >
                How it works
              </a>
              <a
                href="/.."
                className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6"
              >
                Sample RemoteShiva
              </a>
              <a
                href="/"
                className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6"
              >
                Resources
              </a>
              <a
                href="/"
                className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6"
              >
                About us
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-6 text-gray-800">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium leading-5 text-gray-500">
                    tom@example.com
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <a
                  href="/"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out sm:px-6"
                >
                  Your Profile
                </a>
                <a
                  href="/"
                  className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out sm:px-6"
                >
                  Settings
                </a>
                <a
                  href="/"
                  className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out sm:px-6"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </StyledNav>
        <br />
        <Switch>
          <Route exact path="/">
            <PageContainer>
              <Home theme={theme} />
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
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
