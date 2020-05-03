import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { NavLinkProps } from 'react-router-dom';
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

export default function About({ theme }: NavigationProps) {
  const Title = styled.div`
    width: 100%;
    font-size: 3.5rem;
    font-family: Lora;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  const PARAGRAPHS = [
    {
      key: 1,
      body: `We have all suffered through painful moments as the COVID-19 pandemic causes illness, death, and chaos in our lives. One of the especially painful consequences of the disease has been our inability to gather together in person to mourn lives lost during this time.`,
    },
    {
      key: 2,
      body: `With traditional grieving practices off-limits, many mourning families and communities have turned to video-conference platforms like Zoom to allow memorial services and shiva visits to take place online. Unfortunately, up until now, most video-conference technology has been designed for business meetings, webinars, and other formally structured gatherings. This means that many people have been struggling to adapt these platforms to fit the needs of an intimate gathering like a shiva call.`,
    },
    {
      key: 3,
      body: `Here at RemoteShiva, our team of volunteers is working on building a software tool that will make hosting shiva on the internet a less challenging experience for both mourners and visitors.`,
    },
    {
      key: 4,
      body: `We believe that the practice of sitting shiva is more important than ever during this time of social distancing and beyond the pandemic as many of us live far away from friends and family. No matter where you are in the world, you should be able to show your support to those experiencing loss and to honor the memory of those who have passed.`,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:p-24">
          <Title>
            About Us
            <div
              style={{
                paddingTop: '36px',
                fontFamily: 'Lato',
                fontSize: '14px',
                lineHeight: '1.5',
              }}
            >
              {PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.key}>
                  {paragraph.body}
                  <br />
                  <br />
                </p>
              ))}
            </div>
          </Title>
        </div>
      </div>
    </ThemeProvider>
  );
}
