import React from "react";
import "./AllProducts.scss";

export default function AllProducts({ products }) {
  const productList = products?.items || [];

  return (
    <div className="all-products-page">
      <div className="page-container">
        {productList.length === 0 ? (
          <div className="empty-state">
            <p>No products available yet.</p>
          </div>
        ) : (
          <div className="products-grid">
            {productList.map((product) => (
              <a
                href={product.url}
                key={product.productId}
                className="product-card"
              >
                <div className="product-image-wrapper">
                  {product.image ? (
                    <img
                      src={product.image.url}
                      alt={product.image.alt || product.name}
                      className="product-image"
                    />
                  ) : (
                    <div className="product-image-placeholder" />
                  )}
                </div>
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">
                    {product.price.special ? (
                      <>
                        <span className="price-special">
                          {product.price.special.text}
                        </span>
                        <span className="price-regular">
                          {product.price.regular.text}
                        </span>
                      </>
                    ) : (
                      <span className="price-current">
                        {product.price.regular.text}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
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
