import React from "react";
import "./Location.scss";
export default function Location() {
    return (React.createElement("section", { className: "location-section" },
        React.createElement("div", { className: "address-text" },
            React.createElement("p", null, "Building 3, No. 1688, Tianfu Avenue, Chengdu, Sichuan, China")),
        React.createElement("div", { className: "postal-code" },
            React.createElement("p", null, "610000")),
        React.createElement("div", { className: "location-image" },
            React.createElement("img", { src: "/images/7_1.png", alt: "Chengdu Location" }))));
}
export const layout = {
    areaId: "content",
    sortOrder: 80,
};
//# sourceMappingURL=Location.js.map