import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 700px;
  background: transparent;
  margin: 0 auto;
  display: flex;
`;


// LOGIN CONTAINER
export const LoginContainer = styled.div`
  background: #FFF;
  display: flex;
  flex: 1;
  border-radius: 1em 0 0 1em;
  padding: 30px;
  flex-direction: column;
`;

export const LoginForm = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const InputCustom = styled.input`
  font-size: 13px;
  padding: 10px;
  border-radius: 0.5em;
  border: #E8EAED solid 1.5px;
  width: calc(100% - 20px);

  &::placeholder {
    color: #808996;
  }
`;

export const BtnColored = styled.div`
  margin-top: 10px;
  font-size: 12px;
  border-radius: 0.5em;
  background: #7F56DA;
  color: #FFF;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnNormal = styled.div`
  margin-top: 10px;
  font-size: 12px;
  border-radius: 0.5em;
  background: #FFF;
  color: #000;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: #E8EAED solid 1.5px;
`;

//  BANNER CONTAINER
export const BannerContainer = styled.div`
  background: #F3F5F9;
  display: flex;
  flex: 1;
  border-radius: 0 1em 1em 0;
  justify-content: center;
  align-items: center;
`;

export const Ball = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #613DB7;
`;

export const Blotter = styled.div`
  width: 250px;
  height: 150px;
  background: #000;
  position: absolute;
  margin-top: 150px;
  background-color: rgba(243,244,248, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 0 0 100% 100%;
`;