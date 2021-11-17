import PastPostsItem from "./PastPostsItem";
import { Button } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Tooltip } from "@mui/material";

const PastPosts = ({
  APIData,
  openModalHandler,
  getSampleData,
  deleteAllData,
}) => {
  return (
    <div className="past-posts">
      <div className="past-posts-header">Past Posts:</div>
      {APIData.map((data, index) => {
        return <PastPostsItem key={index} postData={data} />;
      })}
      <Button
        onClick={() => {
          openModalHandler("new");
        }}
      >
        Create New Post
      </Button>
      <div>
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
        <Tooltip title="Delete ALL">
          <IconButton
            aria-label="delete all data"
            onClick={() => {
              deleteAllData();
            }}
          >
            <SentimentVeryDissatisfiedIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default PastPosts;
