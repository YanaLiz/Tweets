import { Button } from "./FollowButton.styled";
import { useChangeFollowersQuantityMutation } from "../../redux/users/slice";
import { useDispatch, useSelector } from "react-redux";
import { plusFollowList, minusFollowList } from '../../redux/follow/slice'
import PropTypes from "prop-types";

export const FollowButton = ({ currentUser }) => {
  const dispatch = useDispatch();
  const  followList  = useSelector((state) => state.followList);
  const followStatus = followList.includes(currentUser.id);
  const [changeFollowersQuantity, { isLoading }] =
    useChangeFollowersQuantityMutation();
  const incrementFollower = () => {
    const { id, user, avatar, tweets, followers } = currentUser;
    const newBody = {
      id,
      user,
      avatar,
      tweets,
      followers: Number(followers) + 1,
    };
    changeFollowersQuantity(newBody);
    dispatch(plusFollowList(id));
  };
  const decrementFollower = () => {
    const { id, user, avatar, tweets, followers } = currentUser;
    const newBody = {
      id,
      user,
      avatar,
      tweets,
      followers: Number(followers) - 1,
    };
    changeFollowersQuantity(newBody);
    dispatch(minusFollowList(id));
  };

  return (
    <Button
      followStatus={followStatus}
      onClick={!followStatus ? incrementFollower : decrementFollower}
    >
      {isLoading ? "wait...." : followStatus ? "following" : "follow"}
    </Button>
  );
};
// export default FollowButton;

FollowButton.propTypes = {
  currentUser: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.string,
      avatar: PropTypes.string,
      tweets: PropTypes.string,
    })
  ).isRequired,
  followers: PropTypes.func.isRequired,
}
 
  
