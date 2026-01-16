import React from "react";
import "./HeroVideo.scss";

export default function HeroVideo() {
  return (
    <div className="hero-video-section">
      <div className="hero-video-container">
        <video autoPlay muted loop playsInline className="full-video">
          <source src="/videos/home_page.mp4" type="video/mp4" />
          您的浏览器不支持视频播放
        </video>
      </div>

      {/* 底部描述 */}
      <div className="hero-description">
        <p className="description-text">Sense 1 Home</p>
        <p className="availability-text">Available in January</p>
      </div>
    </div>
  );
}

export const layout = {
  areaId: "content",
  sortOrder: 10,
};
