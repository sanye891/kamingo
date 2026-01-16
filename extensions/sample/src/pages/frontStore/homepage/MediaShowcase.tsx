import React from "react";
import "./MediaShowcase.scss";

export default function MediaShowcase() {
  return (
    <section className="media-showcase-section">
      {/* 媒体 Logo 行 */}
      <div className="media-logos">
        <div className="logo-item">
          <img src="/images/2_1.png" alt="NBC" />
        </div>
        <div className="logo-item">
          <img src="/images/2_2.png" alt="Gizmodo" />
        </div>
        <div className="logo-item">
          <img src="/images/2_3.png" alt="FOX Business" />
        </div>
        <div className="logo-item">
          <img src="/images/2_4.png" alt="Behance" />
        </div>
        <div className="logo-item">
          <img src="/images/2_5.png" alt="Yanko Design" />
        </div>
        <div className="logo-item">
          <img src="/images/2_6.png" alt="The Economist" />
        </div>
      </div>

      {/* 主要展示区域 */}
      <div className="showcase-grid">
        {/* 左上图片 */}
        <div className="grid-top-left">
          <img src="/images/3_1.jpg" alt="Product Showcase Top" />
        </div>

        {/* 左中文字 */}
        <div className="grid-middle-text">
          <p>
            At CES 2023-2024, CareSix (Cotons AI) introduced AI-powered
            healthcare technology designed to precisely capture essential canine
            vital signs, including heart rate and respiration.
          </p>
        </div>

        {/* 右侧图片 */}
        <div className="grid-right">
          <img src="/images/3_2.jpg" alt="Product Display" />
        </div>

        {/* 左下图片 */}
        <div className="grid-bottom-left">
          <img src="/images/3_3.jpg" alt="Product Showcase Bottom" />
        </div>
      </div>
    </section>
  );
}

export const layout = {
  areaId: "content",
  sortOrder: 30,
};
