import { Container, Header, Avatar, Login, Name } from "./style";

export default function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/67080026?v=4" />
        <Login>Pedro H</Login>
        <Name>pedro henrique Prado</Name>
      </Header>
    </Container>
  );
}
