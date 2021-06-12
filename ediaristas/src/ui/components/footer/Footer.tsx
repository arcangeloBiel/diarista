import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style.";
import { Typography, Box } from "@material-ui/core";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos?</FooterTitle>
          <Typography variant={"body2"} sx={{ marginTop: "16px" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            neque illum corporis necessitatibus eveniet ipsam veniam similique
            expedita ducimus debitis quaerat porro recusandae eos molestias
            dolorum iusto, inventore quis rerum?
          </Typography>
        </Box>

        <div>
          <Typography>Baixe nossos aplicativos ?</Typography>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>

            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"Play Store"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
