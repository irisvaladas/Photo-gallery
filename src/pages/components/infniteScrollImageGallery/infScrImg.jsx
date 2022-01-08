import React, { useState, useEffect, useContext } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import './infScrImg.css';
import {SearchContext} from '../SearchContext'

const InfScrImg = () => {
  
  const input = useContext(SearchContext)
  
  console.log(input);
  
  const UnsplashImage = ({ url, key }) => (
    <div className="image-item" key={key}>
      <img src={url} />
    </div>
  );
  
  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "e70So3cqXKFJiJY7y66YFQq1gpAzueuAp0gPUfPQ6_0";

    axios
      .get(`${apiRoot}/search/photos?per_page=30&query=${input}&client_id=${accessKey}`)
      .then((res) => {
        setImages([...images, ...res.data.results]);
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
            next={() => fetchImages()}
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