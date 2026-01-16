import React from "react";
import "./SocialMedia.scss";
export default function SocialMedia() {
    return (React.createElement("section", { className: "social-media-section" },
        React.createElement("h2", { className: "social-title" }, "Follow us on social"),
        React.createElement("div", { className: "social-images" },
            React.createElement("div", { className: "social-image-item" },
                React.createElement("img", { src: "/images/6_1.png", alt: "Social post 1" })),
            React.createElement("div", { className: "social-image-item" },
                React.createElement("img", { src: "/images/6_2.png", alt: "Social post 2" })),
            React.createElement("div", { className: "social-image-item" },
                React.createElement("img", { src: "/images/6_3.png", alt: "Social post 3" })),
            React.createElement("div", { className: "social-image-item" },
                React.createElement("img", { src: "/images/6_4.png", alt: "Social post 4" })),
            React.createElement("div", { className: "social-image-item" },
                React.createElement("img", { src: "/images/6_5.png", alt: "Social post 5" }))),
        React.createElement("div", { className: "social-link" },
            React.createElement("a", { href: "https://www.instagram.com", target: "_blank", rel: "noopener noreferrer" }, "Social"))));
}
export const layout = {
    areaId: "content",
    sortOrder: 70,
};
//# sourceMappingURL=SocialMedia.js.map