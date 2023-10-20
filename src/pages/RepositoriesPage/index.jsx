import { Container, Sidebar, Main } from "./style";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

import { getLangsFrom } from "../../services/api";

function RepositoriesPage() {
  const user = {
    login: "Pedrohprado",
    name: "Pedro Henrique Prado",
    avatar_url: "https://avatars.githubusercontent.com/u/67080026?v=4",
    followers: 1,
    following: 1,
    company: null,
    blog: "https://portfolio-pedro-react.vercel.app/",
    location: "Bauru/SP",
  };

  const repositories = [
    {
      name: "Repo 1",
      description: "descrição",
      html_url: "https://portfolio-pedro-react.vercel.app/",
      language: "Javascript",
    },
    {
      name: "Repo 2",
      description: "descrição",
      html_url: "https://portfolio-pedro-react.vercel.app/",
      language: "Ruby",
    },
    {
      name: "Repo 3",
      description: "descrição",
      html_url: "https://portfolio-pedro-react.vercel.app/",
      language: "PHP",
    },
    {
      name: "Repo 4",
      description: "descrição",
      html_url: "https://portfolio-pedro-react.vercel.app/",
      language: "Java",
    },
    {
      name: "Repo 5",
      description: "descrição",
      html_url: "https://portfolio-pedro-react.vercel.app/",
      language: "Javascript",
    },
    {
      name: "Repo 6",
      description: "descrição",
      html_url: "https://portfolio-pedro-react.vercel.app/",
      language: "Python",
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
