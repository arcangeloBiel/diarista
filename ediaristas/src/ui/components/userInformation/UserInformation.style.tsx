import { experimentalStyled as styled } from "@material-ui/core/styles";

export const UserInformationContainer = styled("img")`
  height: 25px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 47px;
  }
`;
