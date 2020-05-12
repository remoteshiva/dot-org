/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Portal } from 'react-portal';
import styled from 'styled-components';
import { Theme } from '../../assets/theme';
import * as FirestoreService from '../../services/firestore';
import Button from '../atoms/Button';
import CloseSvg from '../../assets/images/close.svg';
/* Banner vector created by upklyak - www.freepik.com */
import livingroom from '../../assets/images/livingroom.png';
/* Camera vector created by sentavio - www.freepik.com */
import Tips from '../../assets/images/illustration-for-tips.png';

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
    flex-direction: column;
    background-color: ${theme.colors.warmGray};
    color: ${theme.text.secondary};
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    height: 100px;
  `;

  const today = new Date();

  return (
    <PageFooter>
      <div className="flex justify-center" style={{ width: '100px' }}>
        {/* GITHUB */}
        <a href="https://github.com/remoteshiva/dot-org">
          <svg
            width="70%"
            height="70%"
            fill="#ffffff"
            viewBox="0 0 136 133"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1,0,0,1,-317.926,-179.59)">
              <g transform="matrix(4.16667,0,0,4.16667,385.792,312.523)">
                <path d="M0,-31.904C-8.995,-31.904 -16.288,-24.611 -16.288,-15.614C-16.288,-8.417 -11.621,-2.312 -5.148,-0.157C-4.333,-0.008 -4.036,-0.511 -4.036,-0.943C-4.036,-1.329 -4.05,-2.354 -4.058,-3.713C-8.589,-2.729 -9.545,-5.897 -9.545,-5.897C-10.286,-7.778 -11.354,-8.279 -11.354,-8.279C-12.833,-9.29 -11.242,-9.27 -11.242,-9.27C-9.607,-9.154 -8.747,-7.591 -8.747,-7.591C-7.294,-5.102 -4.934,-5.821 -4.006,-6.237C-3.858,-7.29 -3.438,-8.008 -2.972,-8.415C-6.589,-8.826 -10.392,-10.224 -10.392,-16.466C-10.392,-18.244 -9.757,-19.698 -8.715,-20.837C-8.883,-21.249 -9.442,-22.905 -8.556,-25.148C-8.556,-25.148 -7.188,-25.586 -4.076,-23.478C-2.777,-23.839 -1.383,-24.02 0.002,-24.026C1.385,-24.02 2.779,-23.839 4.08,-23.478C7.19,-25.586 8.555,-25.148 8.555,-25.148C9.444,-22.905 8.885,-21.249 8.717,-20.837C9.761,-19.698 10.392,-18.244 10.392,-16.466C10.392,-10.208 6.583,-8.831 2.954,-8.428C3.539,-7.925 4.06,-6.931 4.06,-5.411C4.06,-3.234 4.04,-1.477 4.04,-0.943C4.04,-0.507 4.333,0 5.16,-0.159C11.628,-2.318 16.291,-8.419 16.291,-15.614C16.291,-24.611 8.997,-31.904 0,-31.904" />
              </g>
            </g>
          </svg>
        </a>
        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/remoteshiva"
          style={{ marginTop: '-10px' }}
        >
          <svg
            height="100%"
            width="100%"
            clipRule="evenodd"
            fillRule="evenodd"
            viewBox="0 0 560 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m410.096 200.048c0-71.818-58.23-130.048-130.048-130.048s-130.048 58.23-130.048 130.048c0 64.905 47.55 118.709 109.73 128.476v-90.875h-33.029v-37.601h33.029v-28.658c0-32.59 19.422-50.604 49.122-50.604 14.228 0 29.115 2.542 29.115 2.542v32.005h-16.405c-16.148 0-21.196 10.022-21.196 20.318v24.396h36.064l-5.761 37.601h-30.304v90.875c62.18-9.749 109.73-63.553 109.73-128.476z"
              fill="#ffffff"
            />
            <path
              fill="transparent"
              d="m330.67 237.648 5.761-37.601h-36.064v-24.396c0-10.278 5.029-20.318 21.196-20.318h16.405v-32.005s-14.886-2.542-29.115-2.542c-29.7 0-49.122 17.996-49.122 50.604v28.658h-33.029v37.601h33.029v90.875c6.62 1.041 13.405 1.572 20.318 1.572s13.698-.549 20.318-1.572v-90.875h30.304z"
            />
          </svg>
        </a>
      </div>
      <div>
        ©&nbsp;RemoteShiva&nbsp;
        {today.getFullYear()}
      </div>
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
    padding-left: 18px;
    padding-right: 18px;
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

interface EarlyAdopter {
  email: string;
  fullName: string;
  isRabbiOrLeader: boolean;
}

export default function Home({ theme }: HomeProps) {
  const { register, handleSubmit, errors } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onSubmitEarlyAdopter = (values: EarlyAdopter) => {
    const { email, fullName, isRabbiOrLeader } = values;
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    FirestoreService.authenticateAnonymously().then(
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      FirestoreService.createEarlyAdopter(email, fullName, isRabbiOrLeader)
        .then((earlyAdopter) => {
          alert(`Thank you for signing up`);
          setIsModalOpen(false);
        })
        .catch((error) => {
          alert(`We could not sign you up. Please try again.`);
          console.log(`Error returned by createEarlyAdopter: ${error}`);
        })
    );
  };

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
                    <form
                      className="mt-8"
                      onSubmit={handleSubmit(onSubmitEarlyAdopter)}
                    >
                      <input type="hidden" name="remember" value="true" />
                      <div className="rounded-md shadow-sm">
                        <div>
                          <input
                            aria-label="Email address"
                            name="email"
                            type="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                            ref={register({
                              required: 'Required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address',
                              },
                            })}
                            placeholder="Email address"
                          />
                          <div
                            style={{
                              color: 'rgb(146, 70, 35',
                              marginTop: '1px',
                            }}
                          >
                            {errors.email && errors.email.message}
                          </div>
                        </div>
                        <br />
                        <div className="-mt-px">
                          <input
                            aria-label="Name"
                            name="fullName"
                            type="text"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                            ref={register}
                            placeholder="Name"
                          />
                        </div>
                        <div
                          style={{ color: 'rgb(146, 70, 35', marginTop: '1px' }}
                        >
                          {errors.fullName && errors.fullName.message}
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="is-rabbi-or-leader"
                            name="isRabbiOrLeader"
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            ref={register}
                          />
                          <label
                            htmlFor="is-rabbi-or-leader"
                            className="ml-2 block text-sm leading-5 text-gray-900"
                          >
                            I am a rabbi or community leader
                          </label>
                        </div>
                      </div>

                      <div className="mt-6 flex justify-center">
                        <Button
                          onClick={() => null}
                          size="big"
                          theme={theme}
                          themeType="secondary"
                          className="relative flex transition duration-150 ease-in-out"
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
          We&apos;re here to help mourners and their extended communities gather
          together for shiva digitally
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
                <div className="px-4 py-5">
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
                      pathname: '/tips',
                    }}
                  >
                    Shiva tips
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
