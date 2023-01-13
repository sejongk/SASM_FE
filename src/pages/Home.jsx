import React from "react";
import styled from "styled-components";
import picture from "../assets/img/Home/LandingPage.png";
import { Pc, Tablet, Mobile } from "../device"
import sasm_logo from "../assets/img/sasm_logo.png";
import map_category from "../assets/img/Home/map_category.svg"
import map from "../assets/img/Home/map_image.png";
import story from "../assets/img/Home/story_image.png";
import mypick from "../assets/img/Home/mypick_image.png";
import footer from "../assets/img/Home/footer.svg";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`

const IntroImg = styled.img`
  float: right;
  position: absolute;
  right: 0;
  @media screen and (max-width: 768px) {
    width: 50%;
  } 
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 50%;
  } 
  @media screen and (min-width: 1920px) {
    width: 30%;
  }
`;

//SASM
const SASM = styled.div`
  width: 60%;
  height: 550px;
  margin-left: 10%;
  margin-top: 10%;
  color: black;
  display: block;
  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
    margin-left: 0%;
  } 
`;
const SASMDescription = styled.div`
  display: flex;
  width: 60%;
  margin-left: 10vw;
  margin-top: 15vh;
  @media screen and (max-width: 768px) {
    margin-left: 10vw;
    width: auto;
    flex-direction: column;
  } 
`
const SASMLogo = styled.img`
  position: absolute;
  width: 1.5vw;
  @media screen and (max-width: 768px) {
    width: 4vw;
  }
  ${props => props.rotate ? "transform: rotate(180deg) translate(120%, 0%);" : ""};
`

const SubLogo = styled.div`
  font-size: 1.5vw;
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 2vw;
  } 
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const SubTitle = styled.div`
  margin-left: 10%;
  font-size: 1.5vw;
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    margin-left: 10%;
    font-size: 2vw;
    width: 30%;
  } 
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    margin-left: 0;
    margin-top: 10%;
  }
`
const TitleBox = styled.div`
  display: flex;
  margin-bottom : 7%;
`
const Tittle = styled.div`
  box-sizing: border-box;
  color: black;
  font-size: 10vw;
  font-weight: 700;
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 9vw;
  } 
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
    padding-left: 10%;
  } 
`;

const Content = styled.div`
  box-sizing: border-box;
  font-size: 2vw;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 3vw;
  } 
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 15vh;
    margin-left: 5%;
  } 
`;
const ContentBox = styled.div`
  margin-top: 30vh;
  margin-left: 15vw;
  font-size: 2vw;
  position: relative;
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 3vw;
  } 
  @media screen and (max-width: 768px) {
    margin-top: 10vh;
    font-size: 0.9rem;
  } 
`
//Function SASM 기능 정의
const Function = styled.div`
  margin-top: 2.5vw;
`
const FunctionWrapper = styled.div`
  display: flex;
  height: 4vw;
  align-items: center;
  line-height: 4vw;
  padding: 5vh 0 5vh 15vw;
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 50%;
  } 
  &: nth-of-type(2) {
    padding-left: 22vw;
  }
  & + & {
    border-top: 1px rgba(0,0,0,0.5) solid;
  }
  @media screen and (max-width: 768px) {
    padding: 3vh 0 3vh 3vw;
    &: nth-of-type(2) {
      padding-left: 12vw;
    }
  } 
`
const FunctionBox = styled.div`
  padding-top: auto;
  padding-bottom: auto;
  line-height: 3vw;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
  height: 5vh;
  background: linear-gradient(102.78deg, rgba(255, 255, 255, 0.7) 4.48%, rgba(255, 255, 255, 0) 90.51%), ${props => props.backgroundColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 75px;
  @media screen and (max-width: 768px) {
    width: 20vw;
    font-size: 0.8rem;
    height: 3vh;
  } 
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 20vw;
  } 
`
const FunctionDescp = styled.div`
  margin-left: 2vw;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`
const ContentTitle = styled.p`
  line-height: 100%;
  margin: 0 0 3vh 0;
  font-weight: 700;
  font-size: 8rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`
const MapTitle = styled.div`
  color: #FFFFFF;
  background: linear-gradient(222.99deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100.52%), #00613E;
  padding-top: 10vh;
  width: 100%;
  height: auto;
`
const MapSubtitle = styled.div`
  text-align: center;
  font-size: 1.5vw;
  line-height: 150%;
  border-right: 4px solid #FFFFFF;
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 3vw;
  } 
  width: 20%;
  @media screen and (max-width: 768px) {
    width: 35%;
    font-size: 1rem;
    padding-top: 1.5vh;
  }
`
const MapImage = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 35vh;
  }
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    bottom: 80vw;
    height: auto;
  }
`
const MapText = styled.div`
  line-height: 150%;
  font-size: 1.5vw;
  padding-left: 1.5vw;
  @media screen and (max-width: 768px) {
    width: 65%;
    font-size: 0.8rem;
  }
`
const StoryTitle = styled.div`
  display: flex;
  color: #FFFFFF;
  padding-top: 10vh;
  width: 100%;
  height: auto;
  background: linear-gradient(119.48deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 96.37%), #03216C;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const StoryImage = styled.img`
  width: 100%;
`
const StorySubtitle = styled.div`
  margin-top: 20vh;
  padding: 1vw 0 1vw 3vw;
  width: 75%;
  font-size: 2vw;
  border-bottom: 4px #FFFFFF solid;
  @media screen and (max-width: 768px) {
    margin-top: 0;
    font-size: 1rem;
  }
`
const StoryText = styled.div`
  margin: 5vh 5vw;
  font-size: 1.5rem;
  line-height: 150%;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    margin: 5vh 3vw;
  }
`
const MyPickTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh 0;
  width: 100%;
  height: auto;
  background: linear-gradient(246.63deg, #FFFFFF 2.13%, rgba(255, 255, 255, 0) 96.85%), rgba(255, 240, 224, 0.6);
  position: relative;
`
const MyPickSubtitle = styled.div`
  font-weight: 600;
  font-size: 2vw;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 3vh;
  }
`
const MyPickImage = styled.img`
  width: 100%;
  margin: 5vh 0;
`
const MyPickText = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`
//
export default function Home() {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)"
  });
  return (
    <Wrapper>
      <IntroImg src={picture}></IntroImg>
      <SASM>
        <TitleBox>
          <Tittle>SASM</Tittle>
        </TitleBox>
        <Content>
          <SASMLogo src={sasm_logo} rotate="true" />
          SASM은 지속가능한 공간을 큐레이팅하여, <br />한국 도시의 지속가능한
          발전을 돕습니다.
          <SASMLogo src={sasm_logo} />
        </Content>
      </SASM>
      <SASMDescription>
        <SubLogo>
          <span style={{ color: "#44ADF7" }}>S</span>USTAINABLE<br />
          <span style={{ color: "#29E48A" }}>A</span>CT<br />
          <span style={{ color: "#44ADF7" }}>S</span>PACE<br />
          <span style={{ color: "#29E48A" }}>M</span>AP<br />
        </SubLogo>
        <SubTitle>
          SASM은 SDGs 목표 실현에 기여하는 여가 공간을<br />
          '지속가능한 공간'으로 정의하고,<br />
          이에 대한 지도화 및 큐레이션을 제공합니다. <br /><br />
          <b>'음식점 및 카페, 녹색공간, 제로웨이스트샵, 전시 및 체험공간,<br />
            복합문화공간, 도시재생 및 친환경 건축물'<br /><br /></b>
          6개의 테마로 분류하여, 다양한 지속가능한 공간을 연결해드립니다.<br /><br />
          <b>SASM은 이를 통해 지역 커뮤니티를 활성화하고,<br />
            건강한 생산과 소비 활동을 촉진시켜 일상의 지속가능화를 지향합니다.</b>
        </SubTitle>
      </SASMDescription>
      <ContentBox>
        <SASMLogo src={sasm_logo} rotate="true" />
        <b>SASM</b>은 공간 큐레이션 플랫폼으로, <br />
        크게 <b>세 가지 기능</b>을 제공하고 있습니다.
        <SASMLogo src={sasm_logo} />
      </ContentBox>
      <br />
      <Function>
        <FunctionWrapper>
          <FunctionBox backgroundColor="#3AE894">Map</FunctionBox>
          <FunctionDescp>지속가능한 공간을 탐색하고 방문해보세요.</FunctionDescp>
        </FunctionWrapper>
        <FunctionWrapper>
          <FunctionBox backgroundColor="#01A0FC" marginLeft="8%">Story</FunctionBox>
          <FunctionDescp>공간에 대한 자세한 정보와 인사이트를 얻어가세요.</FunctionDescp>
        </FunctionWrapper>
        <FunctionWrapper>
          <FunctionBox backgroundColor="#FFE9D0">My Pick</FunctionBox>
          <FunctionDescp>마음에 드는 공간들의 컬렉션을 만들 수 있어요.</FunctionDescp>
        </FunctionWrapper>
      </Function>
      <br /><br />
      <MapTitle>
        <div style={{ display: "flex" }}>
          <MapSubtitle>
            SASM 아니면 몰랐을<b>지도</b><br />
            이렇게나 많은 지속가능성
          </MapSubtitle>
          <MapText>
            <ContentTitle>Map</ContentTitle>
            <b>식당/카페, 전시/체험, 제로웨이스트<br />
              건축물, 복합문화, 녹색공간<br /></b>
            <br />
            SASM은 총 여섯 종류의 지속가능한 공간을 소개합니다. <br />
            필터를 선택해서 원하는 유형의 공간을 찾거나, 지역이나 장소를 검색할 수 있어요.<br />
            하트를 클릭하면 My Pick에 해당 공간을 저장할 수 있습니다.<br />
          </MapText>
        </div>
        <MapImage>
          <img src={map} style={{ width: '90%' }} />
          <img src={map_category} />
        </MapImage>
      </MapTitle>
      <StoryTitle>
        <div style={{ width: isMobile ? '100%' : '40%' }} >
          <StorySubtitle>
            공간에 대한 깊은 이해를 원한다면
          </StorySubtitle>
          <StoryText>
            <ContentTitle style={{ marginBottom: '5vh' }}>Story</ContentTitle>
            Story에서는 지속가능한 공간에 대한 구체적인 이야기를 들을 수 있어요. <br />
            <br />
            SASM 서비스를 제작한 SDP 구성원들이 직접 공간을 답사한 작성하는데요, <br />
            <br />
            <b>공간의 인테리어, 특징, 컨텐츠 등 온라인에서는 확인하기 어려운 다양한 디테일과 알찬 인사이트를 사진과 함께 설명해드려요.</b>
          </StoryText>
        </div>
        <div style={{ width: isMobile ? '100%' : '60%', padding: '0 3vh' }}>
          <StoryImage src={story}></StoryImage>
        </div>
      </StoryTitle>
      <MyPickTitle>
        <div style={{ display: "flex", flexDirection: 'column', textAlign: 'center' }}>
          <MyPickSubtitle>
            나만의 지속가능성
          </MyPickSubtitle>
          <ContentTitle>My Pick</ContentTitle>
        </div>
        <MyPickImage src={mypick}></MyPickImage>
        <MyPickText>
          Map과 Story에서 '좋아요'를 누른 컨텐츠를<br />
          My Pick에서 저장하고 확인할 수 있어요. <br /><br />
          <span style={{ color: '#843700', fontWeight: '700', fontSize: isMobile?'1.5rem':'2.5rem' }}>SASM과 함께 나만의 지속가능한 영역을 확장시켜보세요!</span>
        </MyPickText>
      </MyPickTitle>
      <img style={{ width: '100%' }} src={footer} />
    </Wrapper>
  );
}
