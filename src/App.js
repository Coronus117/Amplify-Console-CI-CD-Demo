import { useState, useEffect } from "react";
import "./App.css";

import Header from "./Components/Header";
import Body from "./Components/Body";
import BackendServer from "./Components/BackendServer";
import AddEditModal from "./Components/AddEditModal";

function App() {
  // has this app been initialized
  const [initState, setInitState] = useState(false);

  // Store incoming data
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    BackendServer.get().then((response) => {
      setInitState(true);
      setAPIData(response.data.response);
    });
  }, []);

  // Store information about the post inside the modal
  const initialBlogPost = {
    id: "",
    title: "",
    text: "",
    timeStamp: "",
  };
  // Temp store the blog post as we create it
  const [modalBlogPost, setModalBlogPost] = useState({ ...initialBlogPost });

  // Store information about the modal
  const initialModalMeta = {
    open: false,
    operation: "", // "new" or "update"
    title: "",
    buttonText: "",
  };
  const [modalMeta, setModalMeta] = useState({ ...initialModalMeta });

  const openModalHandler = (mode, postId) => {
    let modalTitle,
      buttonText,
      operation = "";
    switch (mode) {
      case "new":
        modalTitle = "New Post";
        buttonText = "Post";
        operation = "new";
        setModalBlogPost({ ...initialBlogPost });
        break;
      case "edit":
        modalTitle = "Edit Post";
        buttonText = "Update";
        operation = "update";
        break;
      default:
        break;
    }

    setModalMeta(() => {
      return {
        open: true,
        title: modalTitle,
        buttonText: buttonText,
        operation: operation,
      };
    });

    console.log(postId);
    getPostById(postId);
  };

  const getPostById = async (postId) => {
    await BackendServer.get(`/${postId}`).then((response) => {
      console.log(response);
      setModalBlogPost((prevState) => {
        return { ...prevState, ...response.data.response };
      });
    });
  };

  const getSampleData = async () => {
    await BackendServer.get("/generateSampleData").then((response) => {
      console.log(response);
      setModalBlogPost((prevState) => {
        return { ...prevState, ...response.data.response };
      });
    });
  };

  const deleteAllData = () => {
    BackendServer.delete();
  };

  const deletePostHandler = (postId) => {
    BackendServer.delete(`/${postId}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Body
          APIData={APIData}
          openModalHandler={openModalHandler}
          deletePostHandler={deletePostHandler}
          getSampleData={getSampleData}
          deleteAllData={deleteAllData}
          initState={initState}
        />
        <AddEditModal
          modalMeta={modalMeta}
          setModalMeta={setModalMeta}
          modalBlogPost={modalBlogPost}
          setModalBlogPost={setModalBlogPost}
        />
      </header>
    </div>
  );
}

export default App;
