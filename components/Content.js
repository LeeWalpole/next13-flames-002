import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Content = ({ data }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const res = await fetch(
    //   `https://jsonplaceholder.typicode.com/todos?_start=${posts.length}&_limit=30`
      `https://www.thaiflames.app/backend/wp-json/data/v1/profiles?_start=${posts.length}`
    );
    const newPosts = await res.json();
    setPosts((post) => [...post, ...newPosts]);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading 30...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((data) => (
          <div key={data.username}>
            <div className="back">
              <strong> {data.username}</strong> {data.username}
            </div>
            {data.completed}
          </div>
        ))}
      </InfiniteScroll>
      <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
};

export default Content;