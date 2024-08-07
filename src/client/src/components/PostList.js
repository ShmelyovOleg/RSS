import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `/api/posts?page=${currentPage}&limit=${postsPerPage}`
        );
        setPosts(response.data.posts);
        setTotalPages(Math.ceil(response.data.totalPosts / postsPerPage));
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
            <p>{post.contentSnippet}</p>
            <small>{new Date(post.pubDate).toLocaleString()}</small>
          </li>
        ))}
      </ul>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostList;
