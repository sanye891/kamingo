import React from "react";
import "./Testimonial.scss";
export default function Testimonial() {
    return (React.createElement("section", { className: "testimonial-section" },
        React.createElement("div", { className: "testimonial-grid" },
            React.createElement("div", { className: "profile-image" },
                React.createElement("img", { src: "/images/4_1.png", alt: "Professor" })),
            React.createElement("div", { className: "quote-text" },
                React.createElement("p", { className: "quote" }, "\"Cotons Sense 1 emerged from a profound comprehension of the challenges in veterinary medicine. With a vision to revolutionize veterinary care, we meticulously developed this innovative product, charting a new course in the field.\""),
                React.createElement("p", { className: "author" }, "Professor Youngmin Yun \u00B7 JNU of Veterinary Medicine")),
            React.createElement("div", { className: "description-text" },
                React.createElement("p", null, "After the release of Sense 1 Vet, we've seen a lot of purchases and inquiries. As people install and use it, we're discovering many areas for improvement. We're committed to evolving this product to better monitor pet health. We're also grateful for the collaboration with veterinary hospitals, whose insights contribute to our development process. Your feedback is invaluable and drives us to work hard for a superior product. Stay tuned for more updates!")),
            React.createElement("div", { className: "collage-image" },
                React.createElement("img", { src: "/images/4_2.png", alt: "Product Collage" })))));
}
export const layout = {
    areaId: "content",
    sortOrder: 40,
};
//# sourceMappingURL=Testimonial.js.map