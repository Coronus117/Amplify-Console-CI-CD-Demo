import { Card } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const BlogPost = ({ postData, openModalHandler, deletePostHandler }) => {
  return (
    <Card className="blog-post-card">
      <div className="blog-post-title">{postData.title}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.text }} />
      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <IconButton
          aria-label="edit"
          onClick={() => {
            openModalHandler("edit", postData.id);
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => {
            deletePostHandler(postData.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Card>
  );
};

export default BlogPost;
