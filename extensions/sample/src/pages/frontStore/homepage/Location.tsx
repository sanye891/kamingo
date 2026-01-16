import React from "react";
import "./Location.scss";

export default function Location() {
  return (
    <section className="location-section">
      {/* 左上角：地址 */}
      <div className="address-text">
        <p>Building 3, No. 1688, Tianfu Avenue, Chengdu, Sichuan, China</p>
      </div>

      {/* 右上角：邮编 */}
      <div className="postal-code">
        <p>610000</p>
      </div>

      {/* 右下角：图片 */}
      <div className="location-image">
        <img src="/images/7_1.png" alt="Chengdu Location" />
      </div>
    </section>
  );
}

export const layout = {
  areaId: "content",
  sortOrder: 80,
};
