import React, { useState } from "react";
import PageTitle from "ui/components/data-display/pageTitle/PageTitle";
import SafeInviroment from "ui/components/feeback/SafeInviroment/SafeInviroment";
import TextFieldMask from "ui/components/textField/TextFielMask";
import UserInformation from "ui/components/userInformation/UserInformation";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import {
  FormElementContainer,
  ProfissionaisContainer,
  ProfissionaisPaper,
} from "@styles/index.style";

import useIndex from "data/hooks/UserIndex";

export default function Home() {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    error,
    diarista,
    buscaFeita,
    carregando,
    diaristaRestantes,
  } = useIndex();

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
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {error && <Typography color={"error"}>{error}</Typography>}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "200px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementContainer>

        {buscaFeita &&
          (diarista.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diarista.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={item.nome_completo}
                      picture={item.foto_usuario}
                      rating={item.reputacao}
                      description={item.cidade}
                    />
                  );
                })}
              </ProfissionaisContainer>

              <Container sx={{ textAlign: "center" }}>
                {diaristaRestantes > 0 && (
                  <Typography>
                    ... e mais {diaristaRestantes} profissional em sua região
                  </Typography>
                )}

                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ marginTop: 2 }}
                >
                  Contratar um profissional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos diaristas disponivel em sua região
            </Typography>
          ))}
      </Container>
    </div>
  );
}
