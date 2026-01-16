import React from "react";
import "./SocialMedia.scss";

export default function SocialMedia() {
  return (
    <section className="social-media-section">
      {/* 第一行：标题 */}
      <h2 className="social-title">Follow us on social</h2>

      {/* 第二行：5张图片 */}
      <div className="social-images">
        <div className="social-image-item">
          <img src="/images/6_1.png" alt="Social post 1" />
        </div>
        <div className="social-image-item">
          <img src="/images/6_2.png" alt="Social post 2" />
        </div>
        <div className="social-image-item">
          <img src="/images/6_3.png" alt="Social post 3" />
        </div>
        <div className="social-image-item">
          <img src="/images/6_4.png" alt="Social post 4" />
        </div>
        <div className="social-image-item">
          <img src="/images/6_5.png" alt="Social post 5" />
        </div>
      </div>

      {/* 第三行：Social 链接 */}
      <div className="social-link">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Social
        </a>
      </div>
    </section>
  );
}

export const layout = {
  areaId: "content",
  sortOrder: 70,
};
