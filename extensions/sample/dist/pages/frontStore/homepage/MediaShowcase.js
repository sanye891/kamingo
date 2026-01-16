import React from "react";
import "./MediaShowcase.scss";
export default function MediaShowcase() {
    return (React.createElement("section", { className: "media-showcase-section" },
        React.createElement("div", { className: "media-logos" },
            React.createElement("div", { className: "logo-item" },
                React.createElement("img", { src: "/images/2_1.png", alt: "NBC" })),
            React.createElement("div", { className: "logo-item" },
                React.createElement("img", { src: "/images/2_2.png", alt: "Gizmodo" })),
            React.createElement("div", { className: "logo-item" },
                React.createElement("img", { src: "/images/2_3.png", alt: "FOX Business" })),
            React.createElement("div", { className: "logo-item" },
                React.createElement("img", { src: "/images/2_4.png", alt: "Behance" })),
            React.createElement("div", { className: "logo-item" },
                React.createElement("img", { src: "/images/2_5.png", alt: "Yanko Design" })),
            React.createElement("div", { className: "logo-item" },
                React.createElement("img", { src: "/images/2_6.png", alt: "The Economist" }))),
        React.createElement("div", { className: "showcase-grid" },
            React.createElement("div", { className: "grid-top-left" },
                React.createElement("img", { src: "/images/3_1.jpg", alt: "Product Showcase Top" })),
            React.createElement("div", { className: "grid-middle-text" },
                React.createElement("p", null, "At CES 2023-2024, CareSix (Cotons AI) introduced AI-powered healthcare technology designed to precisely capture essential canine vital signs, including heart rate and respiration.")),
            React.createElement("div", { className: "grid-right" },
                React.createElement("img", { src: "/images/3_2.jpg", alt: "Product Display" })),
            React.createElement("div", { className: "grid-bottom-left" },
                React.createElement("img", { src: "/images/3_3.jpg", alt: "Product Showcase Bottom" })))));
}
export const layout = {
    areaId: "content",
    sortOrder: 30,
};
//# sourceMappingURL=MediaShowcase.js.map