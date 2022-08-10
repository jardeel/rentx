import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary}
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(90)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;