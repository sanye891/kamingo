import React from "react";
import "./AllProducts.scss";
export default function AllProducts({ products }) {
    const productList = (products === null || products === void 0 ? void 0 : products.items) || [];
    return (React.createElement("div", { className: "all-products-page" },
        React.createElement("div", { className: "page-container" }, productList.length === 0 ? (React.createElement("div", { className: "empty-state" },
            React.createElement("p", null, "No products available yet."))) : (React.createElement("div", { className: "products-grid" }, productList.map((product) => (React.createElement("a", { href: product.url, key: product.productId, className: "product-card" },
            React.createElement("div", { className: "product-image-wrapper" }, product.image ? (React.createElement("img", { src: product.image.url, alt: product.image.alt || product.name, className: "product-image" })) : (React.createElement("div", { className: "product-image-placeholder" }))),
            React.createElement("div", { className: "product-details" },
                React.createElement("h3", { className: "product-name" }, product.name),
                React.createElement("div", { className: "product-price" }, product.price.special ? (React.createElement(React.Fragment, null,
                    React.createElement("span", { className: "price-special" }, product.price.special.text),
                    React.createElement("span", { className: "price-regular" }, product.price.regular.text))) : (React.createElement("span", { className: "price-current" }, product.price.regular.text))))))))))));
}
export const layout = {
    areaId: "content",
    sortOrder: 10,
};
export const query = `
  query {
    products(filters: []) {
      items {
        productId
        uuid
        name
        price {
          regular {
            value
            text
          }
          special {
            value
            text
          }
        }
        image {
          url
          alt
        }
        url
      }
      total
    }
  }
`;
//# sourceMappingURL=AllProducts.js.map