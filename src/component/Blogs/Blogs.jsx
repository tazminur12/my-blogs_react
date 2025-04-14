import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookmark, handlemarkedRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Total Blogs: {blogs.length}</h1>
      <div className="all-blogs grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              handleBookMark={handleBookmark}
              handlemarkedRead={handlemarkedRead}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Blogs;
