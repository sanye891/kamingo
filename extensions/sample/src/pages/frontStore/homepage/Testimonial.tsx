import React from "react";
import "./Testimonial.scss";

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-grid">
        {/* 左上：圆形图片 */}
        <div className="profile-image">
          <img src="/images/4_1.png" alt="Professor" />
        </div>

        {/* 右上：引用文字 */}
        <div className="quote-text">
          <p className="quote">
            "Cotons Sense 1 emerged from a profound comprehension of the
            challenges in veterinary medicine. With a vision to revolutionize
            veterinary care, we meticulously developed this innovative product,
            charting a new course in the field."
          </p>
          <p className="author">
            Professor Youngmin Yun · JNU of Veterinary Medicine
          </p>
        </div>

        {/* 左下：描述文字 */}
        <div className="description-text">
          <p>
            After the release of Sense 1 Vet, we've seen a lot of purchases and
            inquiries. As people install and use it, we're discovering many
            areas for improvement. We're committed to evolving this product to
            better monitor pet health. We're also grateful for the collaboration
            with veterinary hospitals, whose insights contribute to our
            development process. Your feedback is invaluable and drives us to
            work hard for a superior product. Stay tuned for more updates!
          </p>
        </div>

        {/* 右下：长方形图片 */}
        <div className="collage-image">
          <img src="/images/4_2.png" alt="Product Collage" />
        </div>
      </div>
    </section>
  );
}

export const layout = {
  areaId: "content",
  sortOrder: 40,
};
