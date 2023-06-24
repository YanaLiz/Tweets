import { TweetCard } from "../TweetCard/TweetCard"
import { Tweets } from "./TweetList.styled";
import PropTypes from "prop-types";

export const TweetList = ({users}) => {



  return (
    <Tweets>
      {users.map((user) => (
        <TweetCard key={user.id} user={user}  />
      ))}
    </Tweets>
  );
}
TweetList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
 
}.isRequired;