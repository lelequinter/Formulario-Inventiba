import React from "react";
import {
  FooterRing,
  StyledRing,
  Container,
  LogoFacebook,
  LogoTwitter,
  LogoInstagram,
  LogoLinkedin,
} from "./styles";

export const Footer = () => {
  return (
    <>
    <FooterRing>
        <StyledRing/>
    </FooterRing>
      <Container>
        <LogoFacebook
          href="https://www.facebook.com/inventiba"
          target="_blank"
        />
        <LogoTwitter href="https://twitter.com/inventiba" target="_blank" />
        <LogoInstagram
          href="https://www.instagram.com/inventibacreations/"
          target="_blank"
        />
        <LogoLinkedin
          href="https://www.linkedin.com/company/inventiba-creations/"
          target="_blank"
        />
      </Container>
    </>
  );
};
