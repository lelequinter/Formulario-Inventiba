import styled from "styled-components";
import Ring from "../../imgs/footer-ring.png";
import mdiFacebook from "../../imgs/mdi_facebook.png";
import mdiTwitter from "../../imgs/mdi_twitter.png";
import mdiInstagram from "../../imgs/mdi_instagram.png";
import mdiLinkedin from "../../imgs/mdi_linkedin.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 195px;
  background: #063954;
  border-top: 15px solid;
  border-color: #9cca1f;

  @media (max-width: 400px) {
    height: 120px;
  }
`;

export const FooterRing = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  padding-top: 20px;

  @media (max-width: 400px) {
    padding-top: 0;
  }
`;

export const StyledRing = styled.a`
  width: 186px;
  height: 82px;
  background: url(${Ring});
  transform: scale(0.5)
`;

export const LogoFacebook = styled.a`
  background: url(${mdiFacebook});
  height: 36px;
  width: 36px;
`;

export const LogoTwitter = styled.a`
  background: url(${mdiTwitter});
  height: 36px;
  width: 36px;
`;

export const LogoInstagram = styled.a`
  background: url(${mdiInstagram});
  height: 36px;
  width: 36px;
`;

export const LogoLinkedin = styled.a`
  background: url(${mdiLinkedin});
  height: 36px;
  width: 36px;
`;
