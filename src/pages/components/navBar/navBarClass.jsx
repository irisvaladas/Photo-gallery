import React, { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import './infScrImg.css'

class InfScrImg extends React.Component {
    
    



    
    
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