import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '../../assets/theme';

interface NavigationProps {
  theme: Theme;
}

export default function TipsPage({ theme }: NavigationProps) {
  const Title = styled.div`
    padding-top: 72px;
    width: 600px;
    font-size: 3rem;
    font-family: Lora;
    display: flex;
    justify-self: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  const PARAGRAPHS = [
    {
      key: 1,
      body: `As part of our design process, we talked to people that have recently held or participated in virtual shiva gatherings over the past few months. Here’s what we’ve learned works best when holding a shiva online.`,
    },
  ];
  const TIPS = [
    {
      key: 1,
      body: `A Remote Shiva needs a “host.” Facilitating a shiva space online is not the same as an organic gathering in someone’s home. A friend or community member who feels comfortable with the technology should be in charge of creating the structure for the shiva, maintaining that structure during the gathering, and smoothing over technical difficulties.`,
    },
    {
      key: 2,
      body: `If possible, a detailed schedule should be set in advance. In the real world, visitors often drop by a shiva house during a long window of time. This does not work nearly as well in the digital world. Set specific hours when the mourners will be available and be sure to communicate who will be on when so visitors can join when the mourner they are closest to is on.`,
    },
    {
      key: 3,
      body: `Regularly remind attendees to “mute” themselves if they are not talking. Background noise and echoes can make it very hard to hear who is speaking. If there are more than five people attending at a time, encourage participants to “raise their hand” or write in the chat box when they want to speak, so the host can call on them.`,
    },
    {
      key: 4,
      body: `It is difficult to sing together in large groups over video-conference due to the time lag in audio traveling over the internet. However, one “leader” can sing on behalf of the group, and other people can sing along while on mute so that their delayed audio does not confuse the singer.`,
    },
    {
      key: 5,
      body: `Check the security settings on your video platform. Consider adding a password to the video conference room, and send it out only to people who have confirmed that they want to attend. This way you can ensure that only invited guests can join, even if the link gets sent out widely. Consider using a “waiting room” or other setting that requires the host to approve all requests to enter the shiva meeting.`,
    },
    {
      key: 6,
      body: `Ask the family if they want to record the shiva. For privacy reasons, some families may prefer not to record this intimate gathering, while others might appreciate having a recording of the shared stories and memories.`,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="overflow-hidden rounded-lg">
        <div
          className="px-4 py-5"
          style={{ maxWidth: '600px', margin: '14px' }}
        >
          <Title>
            Tips for holding a remote shiva
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
              {TIPS.map((tip) => (
                <p key={tip.key}>
                  &bull;&nbsp;&nbsp;
                  {tip.body}
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
