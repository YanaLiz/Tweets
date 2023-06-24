import { Button } from "./LoadMoreButton.styled";
import PropTypes from "prop-types";

export const LoadMoreButton = ({loadMore}) => {
  return (
   
      <Button onClick={loadMore}>LoadMoreButton</Button>
  
  );
}
LoadMoreButton.propTypes = {
  loadMore: PropTypes.func.isRequired,
};