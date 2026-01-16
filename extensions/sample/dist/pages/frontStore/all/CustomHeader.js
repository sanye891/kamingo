import React from "react";
import "./CustomHeader.scss";
export default function CustomHeader() {
    return (React.createElement("header", { className: "custom-header" },
        React.createElement("div", { className: "custom-header-container" },
            React.createElement("div", { className: "header-logo" },
                React.createElement("a", { href: "/", className: "logo-link" }, "cotons ai")),
            React.createElement("div", { className: "header-right" },
                React.createElement("a", { href: "/", className: "nav-link" }, "home"),
                React.createElement("a", { href: "/products", className: "nav-link" }, "shop"),
                React.createElement("a", { href: "https://www.instagram.com", target: "_blank", rel: "noopener noreferrer", className: "nav-link instagram-link", "aria-label": "Instagram" },
                    React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                        React.createElement("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
                        React.createElement("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
                        React.createElement("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" }))),
                React.createElement("div", { className: "nav-divider" }),
                React.createElement("div", { id: "search-box-placeholder" }),
                React.createElement("a", { href: "/account/login", className: "nav-link user-link", "aria-label": "Account" },
                    React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                        React.createElement("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                        React.createElement("circle", { cx: "12", cy: "7", r: "4" }))),
                React.createElement("div", { id: "mini-cart-placeholder" })))));
}
export const layout = {
    areaId: "content",
    sortOrder: 1,
};
//# sourceMappingURL=CustomHeader.js.map