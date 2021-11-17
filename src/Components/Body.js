import BlogPostList from "./BlogPostList";
import PastPosts from "./PastPosts";

import { CircularProgress, Tooltip, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const Body = ({
  APIData,
  openModalHandler,
  deletePostHandler,
  getSampleData,
  deleteAllData,
  initState,
}) => {
  const Page = () => {
    return (
      <>
        {APIData.length > 0 ? (
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
        ) : (
          <div>
            <div>No Posts Found</div>
            <Tooltip title="Create Sample Data">
              <IconButton
                aria-label="get sample data"
                onClick={() => {
                  getSampleData();
                }}
              >
                <InsertEmoticonIcon />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </>
    );
  };

  return <div>{initState ? <>{Page()}</> : <CircularProgress />}</div>;
};

export default Body;
