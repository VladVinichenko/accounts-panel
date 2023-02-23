import { useDispatch } from "react-redux";
import { Container } from "../../components/Container";
import { Button } from "react-bootstrap";
import { openModal } from "../../redux/account/account-slice";

import styled from "styled-components";

export const Header = () => {
  const dispatch = useDispatch();
  const onOpenModal = () => dispatch(openModal());

  return (
      <HeaderBlock>
        <Container>
          <Button variant="primary" onClick={onOpenModal}>
            Додати новий платіж
          </Button>
        </Container>
      </HeaderBlock>
  );
};

const HeaderBlock = styled.header`
padding: 10px 0;
background-color: #11072783;
border-bottom: 2px solid #58555e8f;
position: sticky;
backdrop-filter: blur(10px);
top: 0;
	left: 0;
`;



