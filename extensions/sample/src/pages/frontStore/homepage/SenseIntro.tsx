import React from "react";
import "./SenseIntro.scss";

export default function SenseIntro() {
  return (
    <section className="sense-intro-section">
      {/* 标题和描述 */}
      <div className="intro-text">
        <h2 className="intro-title">Sense 1</h2>
        <p className="intro-description">
          " Professional-grade veterinary pet biosignals at home could be coming
          in the form of a <span className="highlight">smart collar</span>,
          which Cotons AI claims can extend the life of a dog by offering
          precise health metrics and transferring them to your phone."{" "}
          <strong>Nikolas Lanum</strong>
        </p>
        <p className="intro-source">Fox News Digital</p>
      </div>

      {/* 图片区域 */}
      <div className="image-container">
        {/* 左边：长方形图片 */}
        <div className="image-left">
          <img src="/images/1_1.jpg" alt="CES 2025 Venetian Suite" />
        </div>

        {/* 右边：椭圆形 GIF */}
        <div className="image-right">
          <img src="/images/1_2.gif" alt="Product in hand" />
        </div>
      </div>

      {/* Awards 部分 */}
      <div className="awards-section">
        <div className="award-badge">
          <img
            src="/images/1_3.png"
            alt="CES Innovation Award 2023"
          />
        </div>
        <div className="award-text">
          <p className="award-label">Awards</p>
          <h3 className="award-title">
            CES2023 Innovation Awarded, Cotons Sense 1 & Sense 1 Pro.
          </h3>
        </div>
      </div>
    </section>
  );
}

export const layout = {
  areaId: "content",
  sortOrder: 20,
};
