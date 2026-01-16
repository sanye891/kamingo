import React, { useState } from "react";
import "./NewsUpdates.scss";
export default function NewsUpdates() {
    const [currentPage, setCurrentPage] = useState(0);
    // 新闻数据（3个内容循环）
    const newsItems = [
        {
            id: 1,
            image: "/images/5_1.jpg",
            title: "CareSix Selected for TIPS Program",
            description: "CareSix Selected for TIPS, Korea’s Tech Startup Support Program : Building on its CES double Innovation Award and recent investments, CareSix has been chosen for the TIPS general track, securing up to ₩800M in R&D and global scaling support.",
            link: "#",
        },
        {
            id: 2,
            image: "/images/5_2.jpg",
            title: "CareSix Selected as 1st Jeju Investment Fund Portfolio Company",
            description: "CareSix Selected as 1st Jeju IPO-Driven Investment Fund Portfolio Company. Securing ₩1B Investment - CareSix has been chosen as one of the first companies backed by Jeju's IPO-driven fund, receiving a ₩1 billion investment to accelerate its next stage of growth.",
            link: "#",
        },
        {
            id: 3,
            image: "/images/5_3.jpg",
            title: "The Conceptual Cotons AI Smart Collar",
            description: "The Conceptual Cotons AI Smart Collar, unveiled at CES, has been featured in TrendHunter's Top 100 Tech Trends for September, a leading platform in trend analysis.",
            link: "#",
        },
    ];
    // 生成6个卡片（循环3个内容）
    const displayItems = [...newsItems, ...newsItems.slice(0, 3)];
    const itemsPerPage = 6;
    const totalPages = Math.ceil(displayItems.length / itemsPerPage);
    const handlePrev = () => {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    };
    const handleNext = () => {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    };
    const visibleItems = displayItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    return (React.createElement("section", { className: "news-updates-section" },
        React.createElement("h2", { className: "section-title" }, "News & Updates"),
        React.createElement("div", { className: "news-grid" }, visibleItems.map((item, index) => (React.createElement("div", { key: `${item.id}-${index}`, className: "news-card" },
            React.createElement("div", { className: "card-image" },
                React.createElement("img", { src: item.image, alt: item.title })),
            React.createElement("div", { className: "card-content" },
                React.createElement("h3", { className: "card-title" }, item.title),
                React.createElement("p", { className: "card-description" }, item.description),
                React.createElement("a", { href: item.link, className: "card-link" }, "Click Here")))))),
        React.createElement("div", { className: "navigation-buttons" },
            React.createElement("button", { className: "nav-button prev-button", onClick: handlePrev, "aria-label": "Previous" },
                React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
                    React.createElement("path", { d: "M15 18l-6-6 6-6" }))),
            React.createElement("button", { className: "nav-button next-button", onClick: handleNext, "aria-label": "Next" },
                React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
                    React.createElement("path", { d: "M9 18l6-6-6-6" }))))));
}
export const layout = {
    areaId: "content",
    sortOrder: 50,
};
//# sourceMappingURL=NewsUpdates.js.map