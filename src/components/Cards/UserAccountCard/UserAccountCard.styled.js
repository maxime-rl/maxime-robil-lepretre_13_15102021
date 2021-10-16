import styled from "styled-components";
import { styleColor } from "../../../utils/style/variables";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  margin: 0 auto 25px auto;
  padding: 25px;
  width: 80%;
  background: ${styleColor.colorWhite};
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

export const AccountContainer = styled.div`
  flex: 1;
  width: 100%;
`;

export const H3 = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
`;

export const AccountAmount = styled.p`
  margin: 0;
  font-size: 4rem;
`;

export const AccountDescription = styled.p`
  margin: 0;
`;
