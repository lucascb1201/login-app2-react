import { Ball, BannerContainer, Blotter, BtnColored, BtnNormal, Container, InputCustom, Label, LoginContainer, LoginForm, Welcome } from "./styles";
import { VscCircleLargeFilled } from 'react-icons/vsc';
import { BiCopyright } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { useEffect, useState } from "react";

const Login = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log("width", window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    setIsMobile(window.innerWidth < 760);
  }, [window.innerWidth]);


  return (
    <div style={{
      height: "100vh",
      display: "flex",
      alignItems: "center"
    }}>
      <Container isMobile={isMobile}>
        <LoginContainer isMobile={isMobile}>
          <div style={{
            display: "flex",
            alignItems: "center",
          }}>
            <VscCircleLargeFilled style={{fontSize: 13, marginRight: 5}} /> <b>LCB</b>
          </div>
          <LoginForm>
            <div style={{
              width: ( isMobile ? "100%" : "70%" ),
              height: "fit-content",
            }}>
              <h2 style={{ fontWeight: "bold" }}>
                Welcome back
              </h2>
              <h5 style={{ fontWeight: "normal", marginTop: -5, color: "#AFB2BA"}}>
                Welcome back! Please enter your details.
              </h5>
              <label>
                <Label>Email</Label>
                <InputCustom type="email" placeholder="Enter your email" />
              </label>
              <label>
                <Label>Password</Label>
                <InputCustom type="email" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
              </label>
              <div style={{ fontSize: 12, margin: '20px 0', display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label>
                  <input type="checkbox" />
                  Remember for 30 days
                </label>
                <a href="#">
                  Forgot password
                </a>
              </div>

              <BtnColored>
                Sign in
              </BtnColored>

              <BtnNormal>
                <FcGoogle style={{ fontSize: 20 }} />
                Sign in with Google
              </BtnNormal>

              <div style={{ fontSize: 10, margin: '20px 0', textAlign: "center", }}>
                Don't have an account? Sign up
              </div>
            </div>
          </LoginForm>
          <div style={{
            fontSize: 12,
            color: "#AFB2BA",
            display: "flex",
            alignItems: "center",
          }}>
            <BiCopyright style={{ marginRight: 5 }} /> LCB UI 2077
          </div>
        </LoginContainer>
        {
        !isMobile && (
          <BannerContainer>
            <Ball />
            <Blotter />
          </BannerContainer>
        )}
      </Container>
    </div>
  );
}


export { Login };