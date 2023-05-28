import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch(`https://internship-service.onrender.com/videos?page=${currentPage}`);
      const data = await response.json();
      setVideos(data.data.posts);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    fetchVideos();
  };

  return (
    <div className='container'>
      <div className='text-center'><img className='main-icon' src="https://camo.githubusercontent.com/0ee6ecf6bb2d5abf9503d986c617e03a44385d8f906ea8e767766cb0609ea06b/68747470733a2f2f63646e2e6d6f732e636d732e66757475726563646e2e6e65742f38677a6372365270475374765a4641327152743476362e6a7067" alt="YouTube" /></div>
      <div className='row'>
      {videos?.map((video) => (
        <div className='col-md-3 text-center' key={video.postId}>
          <img className='mb-3' src={video.submission.thumbnail} alt={video.title} onClick={() => {
            window.open(video.submission.mediaUrl, '_blank');
          }}/>
          <h4 className='mb-3'><b>{video.submission.title}</b></h4>
          <p className='desc text-muted'>{video.submission.description}</p>
        </div>
      ))}
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <center><button className='btn btn-lg btn-primary' onClick={handleNextPage}>Next Page</button></center>
        </div>
      </div>
    </div>
  );
}

export default Home;