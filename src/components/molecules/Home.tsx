/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Portal } from 'react-portal';
import { useForm } from 'react-hook-form';
import Button from '../atoms/Button';
import { Theme } from '../../assets/theme';
import Tips from '../../assets/images/illustration-for-tips.png';
import livingroom from '../../assets/images/livingroom.png';
import CloseSvg from '../../assets/images/close.svg';

interface StepCardProps {
  theme: Theme;
  className?: string;
  title: string;
  body: string;
  step: string;
  height: string;
}

function Footer({ theme }) {
  const PageFooter = styled.div`
    width: 100%;
    display: flex;
    background-color: ${theme.colors.warmGray};
    color: ${theme.text.secondary};
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 12px;
    height: 100px;
  `;

  const today = new Date();

  return (
    <PageFooter>
      ©&nbsp;RemoteShiva&nbsp;
      {today.getFullYear()}
    </PageFooter>
  );
}

function StepCard({
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
    <StyledCard className={className}>
      <StepBubble>{step}</StepBubble>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </StyledCard>
  );
}

interface HomeProps {
  theme: Theme;
}

export default function Home({ theme }: HomeProps) {
  const { register, handleSubmit } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      body: 'Use any video conferencing platform, like Zoom or Google Meet.',
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
    color: ${theme.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-overflow: nowrap;
    h1 {
      font-size: 3rem;
    }
    @media only screen and (max-width: 639px) {
      font-size: 14px;
      h1 {
        font-size: 2rem;
      }
    }
  `;

  const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .7;
  }`;

  return (
    <div style={{ width: '100%' }}>
      {isModalOpen && (
        <Portal>
          <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
            <div
              className="fixed inset-0 transition-opacity z-20"
              onClick={() => setIsModalOpen(true)}
              onKeyPress={() => setIsModalOpen(true)}
              role="button"
              tabIndex={0}
            >
              <Overlay
                role="button"
                tabIndex={0}
                onClick={() => setIsModalOpen(false)}
                onKeyPress={() => setIsModalOpen(false)}
                className="absolute inset-0 opacity-75"
              >
                &nbsp;
              </Overlay>
            </div>
            <div
              style={{ backgroundColor: theme.colors.offWhite }}
              className="z-50 relative rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6"
            >
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  onKeyPress={() => setIsModalOpen(false)}
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                >
                  <img src={CloseSvg} alt="close window" />
                </button>
              </div>
              <div className="sm:flex sm:items-center">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
                  <h1
                    className="text-4xl leading-6 font-medium"
                    style={{ paddingTop: '18px', paddingBottom: '18px' }}
                  >
                    Coming Soon!
                  </h1>
                  <br />
                  <div className="mt-2">
                    <p
                      className="text-sm flex text-center"
                      style={{ paddingBottom: '24px', fontSize: '14px' }}
                    >
                      We’re hard at work getting RemoteShiva ready for release.
                      We’d love to keep you posted about our launch.
                    </p>
                    <form className="mt-8" onSubmit={() => null}>
                      <input type="hidden" name="remember" value="true" />
                      <div className="rounded-md shadow-sm">
                        <div>
                          <input
                            aria-label="Email address"
                            name="email"
                            type="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                            ref={register}
                            placeholder="Email address"
                          />
                        </div>
                        <br />
                        <div className="-mt-px">
                          <input
                            aria-label="Name"
                            name="name"
                            type="text"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                            placeholder="Name"
                          />
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="rabbi-or-leader"
                            name="rabbi-or-leader"
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            onClick={() => null}
                          />
                          <label
                            htmlFor="rabbi-or-leader"
                            className="ml-2 block text-sm leading-5 text-gray-900"
                          >
                            I am a rabbi or community leader
                          </label>
                        </div>
                      </div>

                      <div className="mt-6 flex justify-center">
                        <Button
                          size="big"
                          theme={theme}
                          themeType="secondary"
                          className="relative flex transition duration-150 ease-in-out"
                          onClick={() => null}
                        >
                          Send me updates
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
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
            maxWidth: '60%',
            fontSize: '1.25rem',
            lineHeight: 1.38,
            textAlign: 'center',
            paddingBottom: '24px',
            paddingTop: '18px',
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
          <Button
            size="big"
            themeType="secondary"
            theme={theme}
            // eslint-disable-next-line react/no-this-in-sfc
            onClick={() => setIsModalOpen(true)}
          >
            <Link
              to={{
                pathname: '/', // TODO: change to real link
                hash: '#contact',
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
          id="#how-it-works"
          style={{
            paddingTop: '24px',
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
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
            {steps.map((step) => (
              <div className="overflow-hidden rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <StepCard
                    key={step.number}
                    height="100%"
                    theme={theme}
                    title={step.title}
                    body={step.body}
                    step={step.number}
                  />
                </div>
              </div>
            ))}
          </div>
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
        className="flex"
        style={{ flexDirection: 'row', justifyContent: 'space-around' }}
      >
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <img
                src={Tips}
                alt="two people in front of computers on a video call"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg p-6">
            <div className="px-4 py-5 sm:p-6">
              <h1 style={{ fontSize: '2rem' }}>
                Tips for holding a remote shiva
              </h1>
              <p
                style={{
                  color: `${theme.text.tertiary}`,
                  fontSize: '14px',
                  paddingTop: '18px',
                }}
              >
                As part of our design process, we spoke with people who have
                recently held or participated in virtual shiva gatherings over
                the past few months. Here’s what we’ve learned has worked best
                when holding a shiva online.
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
                <Button
                  onClick={() => null}
                  size="big"
                  themeType="primary"
                  theme={theme}
                >
                  <Link
                    to={{
                      pathname: '/',
                    }}
                  >
                    Coming soon
                  </Link>
                </Button>
              </div>
            </div>
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
        <div
          style={{
            paddingBottom: '24px',
            paddingTop: '12px',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Button
            size="big"
            themeType="primary"
            theme={theme}
            onClick={() => null}
          >
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
          id="#contact"
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
        <Footer theme={theme} />
      </div>
    </div>
  );
}
