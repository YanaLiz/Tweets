import { FollowButton } from '../FollowButton/FollowButton'
import { Container, ImageContainer,Text,Img,ProfileImgContainer,Line,Logo } from "./TweetCard.styled"

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
