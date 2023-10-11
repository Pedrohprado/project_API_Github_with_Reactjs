import { Container, LogoGithub, Title, Form, Input, Button } from "./style";

import githublogo from "../../assets/images/github-logo.svg";

export default function MainPage() {
  return (
    <Container>
      <LogoGithub src={githublogo} alt="logo do github" />
      <Title>API GitHub</Title>

      <Form>
        <Input placeholder="informe o nome"></Input>
        <Button>Lupa</Button>
      </Form>
    </Container>
  );
}
