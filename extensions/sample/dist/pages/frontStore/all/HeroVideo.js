import React from "react";
import "./HeroVideo.scss";
export default function HeroVideo() {
    return (React.createElement("div", { className: "hero-video-section" },
        React.createElement("div", { className: "hero-video-container" },
            React.createElement("video", { autoPlay: true, muted: true, loop: true, playsInline: true, className: "full-video" },
                React.createElement("source", { src: "/videos/home_page.mp4", type: "video/mp4" }),
                "\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u89C6\u9891\u64AD\u653E")),
        React.createElement("div", { className: "hero-description" },
            React.createElement("p", { className: "description-text" }, "Sense 1 Home"),
            React.createElement("p", { className: "availability-text" }, "Available in January"),
            React.createElement("button", { className: "learn-more-btn" }, "Learn more"))));
}
export const layout = {
    areaId: "body",
    sortOrder: -10,
};
//# sourceMappingURL=HeroVideo.js.map