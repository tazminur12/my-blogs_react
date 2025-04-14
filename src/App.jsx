import './App.css';
import Navbar from './component/navbar/navbar.jsx';
import Blogs from './component/Blogs/Blogs.jsx';
import { useState } from 'react';

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = (blog) => {
    const alreadyBookmarked = bookmarked.find(b => b.id === blog.id);
    if (!alreadyBookmarked) {
      setBookmarked([...bookmarked, blog]);
    }
  };

  const handlemarkedRead = (time,id) => {
    const Newtime = readingCount + time;
    setReadingCount(Newtime);
  };
  const handleRemoveBookmark = (id) => {
    const updatedBookmarks = bookmarked.filter(b => b.id !== id);
    setBookmarked(updatedBookmarks);
  }

  return (
    <>
      <Navbar />

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookmark={handleBookMark} handlemarkedRead={handlemarkedRead} />
        </div>
        <div className="right-container w-[30%] p-4 bg-gray-100 rounded-md">
          <h1 className="text-xl font-semibold mb-2">Reading time: {readingCount} min</h1>
          <h1 className="text-xl font-semibold mb-2">Bookmarked count: {bookmarked.length}</h1>
          {
            bookmarked.map((marked, index) => (
              <p key={index} className="bg-red-600 p-2 shadow m-2 text-white text-left">{marked.name}</p>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
