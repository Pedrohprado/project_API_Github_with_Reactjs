import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

import { Container, Header, Avatar, Login, Name, Inner, Data } from "./style";

export default function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/67080026?v=4" />
        <Login>Pedro H</Login>
        <Name>Pedro Henrique Prado</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          30 seguidores &middot; 10 seguindo
        </Data>
        <Data>
          <MdWork size={20} />
          Pedertractor
        </Data>
        <Data>
          <MdLocationCity size={20} />
          Pederneiras
        </Data>
        <Data>
          <MdLink size={20} />
          <a href="https://www.notion.so/ad4f30285d2f4098a780a8b333a3e4f4?v=f9ef2d1e9ae441f198ef525eeee61d0d">
            teste
          </a>
        </Data>
      </Inner>
    </Container>
  );
}
