import React, { useState } from "react";
import "./FAQ.scss";
export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const faqData = [
        {
            question: "How is this a veterinary level device?",
            answer: "Our device uses advanced sensors and AI algorithms that meet veterinary-grade standards. It has been tested and validated by veterinary professionals to ensure accurate monitoring of vital signs including heart rate, respiratory rate, and temperature. The technology is designed to provide clinical-level accuracy for professional veterinary use.",
        },
        {
            question: "How do you train your AI algorithm?",
            answer: "Our AI algorithm is trained using extensive datasets collected from thousands of dogs across various breeds, sizes, and health conditions. We collaborate with veterinary hospitals and research institutions to continuously improve our model. The training process involves supervised learning with data validated by veterinary professionals to ensure high accuracy and reliability.",
        },
        {
            question: "Can general consumers use Sense 1 Vet edition?",
            answer: "The Sense 1 Vet edition is specifically designed for veterinary professionals and clinics. However, we are developing a consumer version called Sense 1 Home that will be available for pet owners. This version will have features tailored for home use while maintaining our high standards of accuracy and reliability.",
        },
        {
            question: "I'm a veterinary professional, where can I place my order?",
            answer: "Veterinary professionals can place orders directly through our website or by contacting our sales team. We offer special pricing for veterinary clinics and hospitals. Please visit our contact page or email us at sales@cotons.ai for more information about bulk orders and professional accounts.",
        },
        {
            question: "Does it support countries out of Korea?",
            answer: "Yes, we are expanding our services internationally. Currently, we support shipping to select countries in Asia, North America, and Europe. We are continuously working to expand our global reach. Please check our shipping page for the most up-to-date list of supported countries or contact our customer service for specific inquiries.",
        },
        {
            question: "When do you open up to the general consumers?",
            answer: "We are planning to launch Sense 1 Home for general consumers in early 2025. We are currently in the final stages of product testing and regulatory approval. Sign up for our newsletter to be notified when pre-orders become available and to receive exclusive early-bird pricing.",
        },
    ];
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (React.createElement("section", { className: "faq-section" },
        React.createElement("h2", { className: "faq-title" }, "FAQs"),
        React.createElement("div", { className: "faq-list" }, faqData.map((faq, index) => (React.createElement("div", { key: index, className: `faq-item ${openIndex === index ? "open" : ""}` },
            React.createElement("button", { className: "faq-question", onClick: () => toggleFAQ(index) },
                React.createElement("span", null, faq.question),
                React.createElement("svg", { className: "chevron-icon", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
                    React.createElement("path", { d: "M6 9l6 6 6-6" }))),
            openIndex === index && (React.createElement("div", { className: "faq-answer" },
                React.createElement("p", null, faq.answer)))))))));
}
export const layout = {
    areaId: "content",
    sortOrder: 60,
};
//# sourceMappingURL=FAQ.js.map