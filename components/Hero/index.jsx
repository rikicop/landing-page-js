
import { Typewriter } from "react-simple-typewriter";
import { useRouter } from "next/router";
import { Fade as Efecto } from "react-reveal";

import {
  Container,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Button,
} from "./HeroElements";

/* interface HeroProps {
  primary?: boolean;
  lightBg?: boolean;
  topLine?: string;
  lightTopLine?: boolean;
  lightText?: boolean;
  lightTextDesc?: boolean;
  headline?: string;
  description?: string;
  buttonLabel?: string;
  img?: any;
  alt?: string;
  imgStart?: any;
  start?: any;
} */

function Hero({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
}) {
  const router = useRouter();
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>Aprende a programar  <Typewriter words={[`${topLine}`, 'en Python', 'JavaScript', '']} /></TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc} /><Efecto bottom cascade>{description}</Efecto>
                <Button
                  big
                  fontBig
                  primary={primary}
                  onClick={() =>
                    router.push(
                      "https://u.pcloud.link/publink/show?code=XZFTMRVZbxSEfFJ0f5jqKjwlLmS0yzScj6aV"
                    )
                  }
                >
                  {buttonLabel}
                </Button>

              </TextWrapper>
            </InfoColumn>
            <InfoColumn>

              <ImgWrapper start={start}>
                <Efecto bottom cascade ><Img src={img} alt={alt} width={580} height={460} /></Efecto>
              </ImgWrapper>

            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default Hero;
