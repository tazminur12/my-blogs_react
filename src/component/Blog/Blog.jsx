import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark = () => {}, handlemarkedRead = () => {} }) => {
  return (
    <div className='m-2'>
      <div className="card bg-base-100 w-96 shadow-sm border p-4">
        <figure>
          <img
            src={blog?.coverPhoto}
            alt={blog?.name}
            className="rounded-md w-full"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <img src={blog?.authorImage} alt="" className="w-10 h-10 rounded-full" />
              <h3 className="font-semibold">{blog?.authorName}</h3>
            </div>
            <button onClick={() => handleBookMark(blog)}>
              <FaBookmark size={22} className="text-blue-600 hover:text-blue-800" />
            </button>
          </div>

          <h2 className="card-title text-xl font-bold">{blog?.name}</h2>
          <p className="text-sm text-gray-600">{blog?.description}</p>

          <div className="card-actions justify-end mt-3">
            <button onClick={() => handlemarkedRead(blog.readingTime,blog.id)} className="btn btn-primary">
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
