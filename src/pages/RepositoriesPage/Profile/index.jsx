/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

import { Container, Header, Avatar, Login, Name, Inner, Data } from "./style";

export default function Profile({ user }) {
  const blogFree = () => {
    const blog = user.blog; //This trying????
    return blog.slice(6);
  };

  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          {user.following} seguidores &middot; {user.followers} seguindo
        </Data>
        <Data>
          <MdWork size={20} />
          {user.company}
        </Data>
        <Data>
          <MdLocationCity size={20} />
          {user.location}
        </Data>
        <Data>
          <MdLink size={20} />
          <a href={`\\${user.blog}`}>{blogFree()}</a>
        </Data>
      </Inner>
    </Container>
  );
}

Profile.PropTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};
