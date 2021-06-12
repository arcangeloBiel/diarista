import React from "react";
import PageTitle from "ui/components/data-display/pageTitle/PageTitle";
import SafeInviroment from "ui/components/feeback/SafeInviroment/SafeInviroment";
import TextFieldMask from "ui/components/textField/TextFielMask";
import UserInformation from "ui/components/userInformation/UserInformation";

import { Button, Typography, Container } from "@material-ui/core";
import {
  FormElementContainer,
  ProfissionaisContainer,
  ProfissionaisPaper,
} from "@styles/index.style";

export default function Home() {
  return (
    <div>
      <SafeInviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subTitle={
          "Preencha seu endereço e veja todos os profissionais da sua região"
        }
      />

      <Container>
        <FormElementContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu cep"}
            fullWidth
            variant={"outlined"}
          />
          <Typography color={"error"}>Cep Invalido</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "200px" }}
          >
            Buscar
          </Button>
        </FormElementContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"Arcangelo"}
              rating={3}
              description={"Brusque"}
            />
            <UserInformation
              name={"Arcangelo"}
              rating={3}
              description={"Brusque"}
            />
            <UserInformation
              name={"Arcangelo"}
              rating={3}
              description={"Brusque"}
            />
            <UserInformation
              name={"Arcangelo"}
              rating={3}
              description={"Brusque"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
