// import { useSelector } from "react-redux";
import { LoadMoreButton } from "../../components/LoadMoreButton/LoadMoreButton";
import { TweetList } from "../../components/TweetList/TweetList"
import { useGetUsersQuery } from "../../redux/users/slice";
import { useState } from "react";
import { Container } from "./Tweets.stryled";
import Loader from "../../components/Loader/Loader";
const cardsPerPage = 3;
export const Tweets = () => {
  const { data,isLoading } = useGetUsersQuery();
  const [page, setPage] = useState(1);

  if (!data) return;
const paginatedUsers = data.slice(0, page * cardsPerPage);
const loadMore = () => setPage(page + 1);
const totalPages = Math.ceil(data.length / cardsPerPage);

  return (
    <Container>
    {  isLoading ? <Loader /> :
      <>
        <TweetList users={paginatedUsers} />
        {totalPages !== page && <LoadMoreButton loadMore={loadMore} />}
      </>}
    </Container>
  );
}
