import { FollowButton } from '../FollowButton/FollowButton'
import { Container, ImageContainer,Text,Img,ProfileImgContainer,Line,Logo } from "./TweetCard.styled"
import PropTypes from "prop-types";

export const TweetCard = ({user}) => {
  return (
    <Container>
      <ImageContainer></ImageContainer>
      <Text>{user.tweets} tweets</Text>
      <Text>{user.followers.toLocaleString("en-US")} followers</Text>
      <FollowButton currentUser={user} />
      <ProfileImgContainer>
        <Img src={user.avatar} alt="profile" />
      </ProfileImgContainer>
      <Line></Line>
      <Logo></Logo>
    </Container>
  );
}


TweetCard.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      tweets: PropTypes.string,
    })
  ).isRequired,
  followers: PropTypes.func.isRequired,
};