import { Container, Sidebar, Main } from "./style";

import Profile from "./Profile";
import Filter from "./Filter";

function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>Main</Main>
    </Container>
  );
}

export default RepositoriesPage;
