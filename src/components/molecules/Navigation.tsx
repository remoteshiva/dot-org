import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  NavLinkProps,
  Route,
  Switch,
} from 'react-router-dom';
import Button from '../atoms/Button';
import { Theme } from '../../assets/theme';
import Tips from '../../assets/images/illustration-for-tips.svg';
import livingroom from '../../assets/images/livingroom.png';
import Logo from '../../assets/images/logo.svg';

interface NavigationProps {
  theme: Theme;
}

interface NavigationLinkProps extends NavLinkProps {
  theme: Theme;
  className?: string;
  children: string;
  to: string;
}

interface StepCardProps {
  theme: Theme;
  className?: string;
  title: string;
  body: string;
  step: string;
  width: string;
  height: string;
}

function StepCard({
  width,
  height,
  theme,
  className,
  title,
  body,
  step,
}: StepCardProps) {
  const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: ${width};
    height: ${height};
    padding: 18px;
    text-align: center;
  `;

  const StepBubble = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.tertiary};
    width: 36px;
    height: 36px;
    border-radius: 100%;
    font-family: Lato;
    padding: 18px;
  `;

  const Title = styled.h1`
    display: flex;
    font-size: 18px;
    color: ${theme.text.primary};
    padding-top: 18px;
    min-height: 48px;
    max-height: 140px;
  `;

  const Body = styled.p`
    display: flex;
    font-size: 16px;
    font-family: Lato;
    color: ${theme.text.tertiary};
    padding-top: 14px;
    padding-bottom: 14px;
  `;

  return (
    <StyledCard width={width} height={height} className={className}>
      <StepBubble>{step}</StepBubble>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </StyledCard>
  );
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

interface HomeProps {
  theme: Theme;
}

function Home({ theme }: HomeProps) {
  const steps = [
    {
      number: '1',
      title: 'Create a shiva account',
      body:
        'Set basic information like the name of the deceased and the dates of shiva.',
    },
    {
      number: '2',
      title: 'Add a video chat link',
      body: 'Use any video conferencing platform, like Zoom or Google Meet .',
    },
    {
      number: '3',
      title: 'Set visiting hours',
      body:
        "Visitors will see your set hours and who's planning to stop by when.",
    },
    {
      number: '4',
      title: 'Invite people',
      body:
        'Send out a link to your shiva. No account creation required to attend.',
    },
  ];

  const StyledHome = styled.div`
    width: 100%;
    background-image: url(${livingroom});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 40vh;
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
          style={{ fontSize: '16px', paddingTop: '60px', letterSpacing: '1px' }}
          className="flex align-center justify-center"
        >
          COMING SOON
        </div>
        <h1
          style={{ padding: '14px', textAlign: 'center' }}
          className="flex justify-center"
        >
          Be together for shiva, online
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
          We&apos;re here to help mourners who aren’t able to have a traditional
          in-person shiva to recreate this experience as best as possible
          online.
          <br />
        </div>
        <div
          className="flex align-center justify-center text-center"
          style={{ paddingBottom: '24px' }}
        >
          <Button size="big" themeType="secondary" theme={theme}>
            <Link
              to={{
                pathname: '/',
                hash: '#email-updates',
              }}
            >
              Send me updates
            </Link>
          </Button>
        </div>
      </StyledHome>
      <div
        style={{
          fontSize: '2.5rem',
          paddingTop: '24px',
          backgroundColor: '#f9f4f0',
          flexDirection: 'column',
        }}
        className="flex justify-center align-center"
      >
        <h1
          style={{
            padding: '24px',
            fontSize: '2rem',
            textAlign: 'center',
            backgroundColor: '#f9f4f0',
          }}
          className="flex justify-center"
        >
          How it works
        </h1>
        <div
          className="flex"
          style={{ flexDirection: 'row', justifyContent: 'space-around' }}
        >
          {steps.map((step) => (
            <StepCard
              key={step.number}
              width="250px"
              height="100%"
              theme={theme}
              title={step.title}
              body={step.body}
              step={step.number}
            />
          ))}
        </div>
        <div
          style={{ padding: '24px', display: 'flex', justifyContent: 'center' }}
        >
          {/* <Button size="big" theme={theme} themeType="primary">
            See an example RemoteShiva
          </Button> */}
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ padding: '60px' }}>
          <img
            src={Tips}
            alt="two people in front of computers on a video call"
          />
        </div>
        <div
          style={{
            padding: '48px',
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h1 style={{ fontSize: '2rem' }}>Tips for holding a remote shiva</h1>
          <p
            style={{
              color: `${theme.text.tertiary}`,
              fontSize: '14px',
              paddingTop: '18px',
            }}
          >
            As part of our design process, we spoke with people who have
            recently held or participated in virtual shiva gatherings over the
            past few months. Here’s what we’ve learned has worked best when
            holding a shiva online.
          </p>
          <div
            style={{
              paddingBottom: '24px',
              paddingTop: '12px',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Button size="big" themeType="primary" theme={theme}>
              <Link
                to={{
                  pathname: '/about',
                }}
              >
                Learn more
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#fdfaf9',
          padding: '60px',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '2rem' }}>About us</h1>
        <p
          style={{
            color: `${theme.text.tertiary}`,
            fontSize: '14px',
            paddingTop: '18px',
            paddingBottom: '18px',
            textAlign: 'center',
            maxWidth: '600px',
          }}
        >
          RemoteShiva is entirely volunteer run. The initiative began as a way
          to address the unique needs of Jews sitting shiva during the time of
          COVID-19, when people cannot physically gather. We are pluralistic at
          our core, and we’re dedicated to making it as easy as possible for
          anyone to have a shiva remotely.
        </p>
      </div>
      <div
        style={{
          fontSize: '2.5rem',
          paddingTop: '24px',
          backgroundColor: '#f4ede7',
          flexDirection: 'column',
        }}
        className="flex justify-center align-center"
      >
        <h1
          style={{
            padding: '24px',
            fontSize: '2rem',
            textAlign: 'center',
          }}
          className="flex justify-center"
        >
          Get in touch
        </h1>
        <div
          style={{
            paddingBottom: '24px',
            display: 'flex',
            justifyContent: 'center',
            color: `${theme.text.primary}`,
            fontSize: '16px',
          }}
        >
          <p>We&apos;d love to hear from you.</p>
        </div>
      </div>
    </div>
  );
}

export default function Navigation({ theme }: NavigationProps) {
  const navLinks = [
    {
      to: '/how-it-works',
      className: 'ml-10 inline-flex items-center',
      content: 'How it works',
    },
    // {
    //   to: '/sample-remote-shiva',
    //   className: 'ml-10 inline-flex items-center',
    //   content: 'Sample RemoteShiva',
    // },
    {
      to: '/resources',
      className: 'ml-10 inline-flex items-center',
      content: 'Resources',
    },
    {
      to: '/about-us',
      className: 'ml-10 inline-flex items-center',
      content: 'About us',
    },
    {
      to: '/contact',
      className: 'ml-10 inline-flex items-center',
      content: 'Contact',
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
                    MOBILE
                  </div>
                  <div className="hidden sm:block lg:block w-auto">
                    <img src={Logo} alt="RemoteShiva yahrzeit candle logo" />
                  </div>
                </div>
              </div>
              <div
                className="hidden sm:ml-6 sm:flex sm:items-center flex"
                style={{ justifyContent: 'space-between' }}
              >
                {navLinks.map(({ to, content }) => (
                  <NavigationLink theme={theme} to={to}>
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
