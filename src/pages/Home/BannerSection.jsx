import React from 'react';
import { BannerImg } from '../../assets';

const BannerSection = () => {
  return (
    <div>
      <div className="banner-section">
          <div className='banner'>
            <img src={ BannerImg } alt="" className='banner-img' />
          </div>
          <div className="banner-content">
            <p>Limited Edition</p>
            <h2>Hurry Up! 30% OFF</h2>
            <span>Offer expires in:</span>
            <div className="timer">
              <div className="timer-count">
                <div className="timer-count-item">
                  <span>02</span>
                  <span>12</span>
                  <span>45</span>
                  <span>05</span>
                </div>
              </div>
            </div>
            <button className='btn'>Shop Now</button>
          </div>
      </div>
    </div>
  )
}

export default BannerSection
