import React from "react";
import { SafeInviromentContainer } from "./SafeInviroment.style";
import { Container } from "@material-ui/core";

const SafeInviroment = () => {
  return (
    <SafeInviromentContainer>
      <Container>
        ambiente seguro <i className={"twf-lock"} />
      </Container>
    </SafeInviromentContainer>
  );
};

export default SafeInviroment;
