import {
  Container,
  Name,
  Description,
  ContainerFoot,
  Lang,
  Link,
} from "./style";

export default function Repository() {
  const langs = [
    {
      name: "JavaScript",
      count: 5,
      color: "#f1c40f",
    },
    {
      name: "Shell",
      count: 2,
      color: "#95a5a6",
    },
    {
      name: "PHP",
      count: 3,
      color: "#3498db",
    },
    {
      name: "PHP",
      count: 3,
      color: "#3498db",
    },
    {
      name: "PHP",
      count: 3,
      color: "#3498db",
    },
    {
      name: "PHP",
      count: 3,
      color: "#3498db",
    },
  ];

  const repositorys = langs.map(({ name, color }) => (
    <Container key={name.toLowerCase()} color={color}>
      <Name>titulo projeto</Name>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quas. Ut
        harum voluptates incidunt, quaerat amet beatae praesentium est molestias
      </Description>
      <ContainerFoot color={color}>
        <Lang>{name}</Lang>
        <Link href="http://google.com.br" target="_blank">
          {name}
        </Link>
      </ContainerFoot>
    </Container>
  ));
  return <>{repositorys}</>;
}
