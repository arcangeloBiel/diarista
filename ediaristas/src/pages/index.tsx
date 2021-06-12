import React from "react";
import PageTitle from "ui/components/data-display/pageTitle/PageTitle";
import SafeInviroment from "ui/components/feeback/SafeInviroment/SafeInviroment";
import UserInformation from "ui/components/userInformation/UserInformation";

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
      <UserInformation name={"Arcangelo"} rating={3} description={"Brusque"} />
    </div>
  );
}
