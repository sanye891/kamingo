import React from "react";
export default function CustomFooter() {
    return (React.createElement("div", { style: {
            backgroundColor: "rgb(220, 210, 190)",
            padding: "3rem 2rem",
            marginTop: "2rem",
        } },
        React.createElement("div", { style: {
                maxWidth: "1400px",
                margin: "0 auto",
            } },
            React.createElement("div", { style: { marginBottom: "2rem" } },
                React.createElement("p", { style: { margin: 0, fontSize: "0.9rem" } }, "cotons ai. hello from jeju !")),
            React.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "1.5rem",
                } },
                React.createElement("div", { style: { flex: "1 1 250px" } },
                    React.createElement("p", { style: { margin: "0 0 0.5rem 0", fontSize: "0.85rem" } }, "Contact email: service@cotons.ai"),
                    React.createElement("p", { style: { margin: "0 0 0.5rem 0", fontSize: "0.85rem" } }, "Company number: +82 64-756-7333"),
                    React.createElement("p", { style: { margin: 0, fontSize: "0.85rem" } }, "Copyright \u00A9 2024 CareSix | Cotons AI")),
                React.createElement("div", { style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        fontSize: "0.85rem",
                        flex: "0 1 auto",
                    } },
                    React.createElement("span", null, "About CareSix,"),
                    React.createElement("span", null, "Terms and Conditions,"),
                    React.createElement("span", null, "Privacy Policies,"),
                    React.createElement("span", null, "Sales,"),
                    React.createElement("span", null, "Legal"))))));
}
export const layout = {
    areaId: "content",
    sortOrder: 100,
};
//# sourceMappingURL=Footer.js.map