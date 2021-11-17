import BlogPost from "./BlogPost";

const BlogPostList = ({ APIData, openModalHandler, deletePostHandler }) => {
  return (
    <div className="blog-post-list">
      {APIData.map((data, index) => {
        return (
          <BlogPost
            key={index}
            postData={data}
            openModalHandler={openModalHandler}
            deletePostHandler={deletePostHandler}
          />
        );
      })}
    </div>
  );
};

export default BlogPostList;
