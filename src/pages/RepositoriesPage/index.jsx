import { Container, Sidebar, Main } from "./style";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

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
  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
