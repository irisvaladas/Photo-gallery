import React, { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import './infScrImg.css'

const InfScrImg = () => {
  
  const UnsplashImage = ({ url, key }) => (
    <div className="image-item" key={key}>
      <img src={url} />
    </div>
  );

  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "e70So3cqXKFJiJY7y66YFQq1gpAzueuAp0gPUfPQ6_0";

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        setImages([...images, ...res.data]);
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="hero is-fullheight is-bold is-info">
      <div className="hero-body">
        <div className="container">
          <InfiniteScroll
            dataLength={images}
            next={() => fetchImages(5)}
            hasMore={true}
            loader={
              <img
                src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                alt="loading"
              />
            }
          >
            <div className="image-grid">
              {loaded
                ? images.map((image, index) => (
                    <UnsplashImage url={image.urls.regular} key={index} />
                  ))
                : ""}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default InfScrImg;
