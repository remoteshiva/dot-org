import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  NavLink,
  NavLinkProps,
  Route,
  Switch,
} from 'react-router-dom';
import Button from '../atoms/Button';
import livingroom from '../../assets/images/livingroom.png';
import { Theme } from '../../assets/theme';

interface NavigationProps {
  theme: Theme;
}

interface NavigationLinkProps extends NavLinkProps {
  theme: Theme;
  className?: string;
  children: string;
  to: string;
}

function NavigationLink({
  to,
  theme,
  children,
  className,
}: NavigationLinkProps) {
  const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    color: ${theme.text.primary};
    font-size: 1em;
    border-bottom: 2px solid transparent;
    transition: all 150ms ease-in-out 0ms;
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

interface HomeProps {
  theme: Theme;
}

function Home({ theme }: HomeProps) {
  const StyledHome = styled.div`
    height: 75%;
    width: 100%;
    background-image: url(${livingroom});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachement: fixed;
    color: ${theme.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-overflow: nowrap;
    h1 {
      font-size: 3rem;
    }
    @media only screen and (max-width: 639px) {
      h1 {
        font-size: 2rem;
      }
    }
  `;
  return (
    <div style={{ width: '100%' }}>
      <StyledHome>
        <div
          style={{ paddingTop: '72px', letterSpacing: '1px' }}
          className="flex align-center justify-center"
        >
          COMING SOON
        </div>
        <h1
          style={{ padding: '24px', textAlign: 'center' }}
          className="flex justify-center"
        >
          Experience shiva digitally.
        </h1>
        <div
          style={{
            width: '60%',
            fontSize: '1.25rem',
            lineHeight: 1.38,
            textAlign: 'center',
          }}
          className="flex align-center justify-center"
        >
          We&apos;re here to help mourners who are unable to have a traditional
          shiva recreate the experience online.
          <br />
        </div>
        <div className="flex align-center justify-center text-center">
          <Button size="big" themeType="secondary" theme={theme}>
            Send me updates
          </Button>
        </div>
      </StyledHome>
      <div
        style={{
          fontSize: '2.5rem',
          paddingTop: '24px',
          backgroundColor: '#f9f4f0',
        }}
      >
        <h1
          style={{
            padding: '24px',
            fontSize: '2.5rem',
            textAlign: 'center',
            backgroundColor: '#f9f4f0',
          }}
          className="flex justify-center"
        >
          How it works
        </h1>
      </div>
    </div>
  );
}

export default function Navigation({ theme }: NavigationProps) {
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
                    MOBILE
                  </div>
                  <div className="hidden sm:block lg:block w-auto">logo</div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <NavigationLink
                  theme={theme}
                  to="/how-it-works"
                  className="ml-10 inline-flex items-center"
                >
                  How it works
                </NavigationLink>
                <NavigationLink
                  theme={theme}
                  to="/sample-remote-shiva"
                  className="ml-10 inline-flex items-center"
                >
                  Sample Shiva
                </NavigationLink>
                <NavigationLink
                  theme={theme}
                  to="/resources"
                  className="ml-10 inline-flex items-center"
                >
                  Resources
                </NavigationLink>
                <NavigationLink
                  theme={theme}
                  to="/about-us"
                  className="ml-10 inline-flex items-center"
                >
                  About us
                </NavigationLink>
                <NavigationLink
                  theme={theme}
                  to="/contact"
                  className="ml-10 inline-flex items-center"
                >
                  Contact
                </NavigationLink>
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
                Sample Remote Shiva
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
            <h1>about</h1>
          </Route>
          <Route path="/dashboard">
            <h1>LANDING PAGE</h1>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
