const PastPostsItem = ({ postData }) => {
  return (
    <div className="past-posts-item">
      <div className="past-posts-item-title">{postData.title}</div>
      <div className="past-posts-item-timestamp">{postData.timestamp}</div>
    </div>
  );
};

export default PastPostsItem;
