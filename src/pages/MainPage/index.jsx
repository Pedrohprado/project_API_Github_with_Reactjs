import { useState } from "react";
import { MdSearch } from "react-icons/md";

import { Container, LogoGithub, Title, Form, Input, Button } from "./style";

import githublogo from "../../assets/images/github-logo.svg";

export default function MainPage() {
  const [login, setLogin] = useState("");

  return (
    <Container>
      <LogoGithub src={githublogo} alt="logo do github" />
      <Title>API GitHub</Title>
      <Form>
        <Input
          placeholder="informe o usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch fill="white" />
        </Button>
      </Form>
    </Container>
  );
}
