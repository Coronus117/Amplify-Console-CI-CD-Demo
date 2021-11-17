import { Modal, Box } from "@mui/material";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import BackendServer from "./BackendServer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddEditModal = ({
  modalMeta,
  setModalMeta,
  modalBlogPost,
  setModalBlogPost,
}) => {
  // On button click, post the Blog Post
  const postData = () => {
    // Get current time and add it to the blog post meta data
    let timestamp = new Date();
    const blogPostData = { ...modalBlogPost, timestamp: timestamp };
    console.log(blogPostData);

    // new or update
    switch (modalMeta.operation) {
      case "new":
        BackendServer.post("", blogPostData);
        break;
      case "update":
        BackendServer.put(`/${blogPostData.id}`, blogPostData);
        break;
      default:
    }

    closeModal();
  };

  const closeModal = () => {
    setModalMeta({ ...modalMeta, open: false });
  };

  return (
    <Modal
      open={modalMeta.open}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="modal-title-text">{modalMeta.title}</div>
        <Box className="modal-input-fields">
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            value={modalBlogPost ? modalBlogPost.title : ""}
            onChange={(e) =>
              setModalBlogPost({ ...modalBlogPost, title: e.target.value })
            }
          />
          <TextField
            id="text"
            label="Text"
            variant="outlined"
            multiline
            rows={10}
            value={modalBlogPost ? modalBlogPost.text : ""}
            onChange={(e) =>
              setModalBlogPost({ ...modalBlogPost, text: e.target.value })
            }
          />
          <Button variant="contained" onClick={postData}>
            {modalMeta.buttonText}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddEditModal;
