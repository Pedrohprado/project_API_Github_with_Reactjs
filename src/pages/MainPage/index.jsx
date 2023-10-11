import { Container, LogoGithub, Title, Form, Input, Button } from "./style";

import { MdSearch } from "react-icons/md";

import githublogo from "../../assets/images/github-logo.svg";

export default function MainPage() {
  return (
    <Container>
      <LogoGithub src={githublogo} alt="logo do github" />
      <Title>API GitHub</Title>

      <Form>
        <Input placeholder="informe o usuário" />
        <Button>
          <MdSearch fill="white" />
        </Button>
      </Form>
    </Container>
  );
}
