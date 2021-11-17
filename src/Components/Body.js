import BlogPostList from "./BlogPostList";
import PastPosts from "./PastPosts";

import { CircularProgress } from "@mui/material";

const Body = ({
  APIData,
  openModalHandler,
  deletePostHandler,
  getSampleData,
  deleteAllData,
}) => {
  const fullPage = () => {
    return (
      <div className="body">
        <PastPosts
          APIData={APIData}
          openModalHandler={openModalHandler}
          getSampleData={getSampleData}
          deleteAllData={deleteAllData}
        />
        <BlogPostList
          APIData={APIData}
          openModalHandler={openModalHandler}
          deletePostHandler={deletePostHandler}
        />
      </div>
    );
  };

  return (
    <div>{APIData.length > 1 ? <>{fullPage()}</> : <CircularProgress />}</div>
  );
};

export default Body;
