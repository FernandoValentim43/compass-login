import styled from "styled-components";

const WeatherContainer = styled.div`
  justify-content: flex-end;
  flex: 1;
  display: flex;
  padding-top: 10px;

  margin-left: 60px;
  user-select: none;

  @media(max-width: 800px) {
   
   margin-left: 0px;
}
`;
const ContentCity = styled.div`
  align-items: center;
  justify-content: center;
`;

const Paragraph = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  text-align: center;
  color: #222222;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const Temperature = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  color: #222222;
  padding: 20px;

  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const ImgWeather = styled.img`
  min-width: 40px;
  min-height: 40px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-right: 5px;
`;

const ContentTemperature = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

export {
  WeatherContainer,
  Paragraph,
  Temperature,
  ImgWeather,
  ContentTemperature,
  ContentCity,
};
