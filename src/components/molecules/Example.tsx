import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '../../assets/theme';
import shivaDesktop from '../../assets/images/shiva-desktop-800w.png';
import shivaMobile from '../../assets/images/shiva-mobile-600w.png';

interface NavigationProps {
  theme: Theme;
}

function Sample() {
  const ExampleDiv = styled.div`
    background-image: url(${shivaDesktop});
    width: 100vw;
    height: 1330px;
    background-repeat: no-repeat;
    background-position: center;
    @media only screen and (max-width: 600px) {
      background-image: url(${shivaMobile});
      width: 80vw;
      height: 2000px;
    }
  `;
  return <ExampleDiv>&nbsp;</ExampleDiv>;
}

export default function Example({ theme }: NavigationProps) {
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
        <Sample />
      </div>
    </ThemeProvider>
  );
}
