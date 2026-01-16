import React from "react";
import "./CustomHeader.scss";

export default function CustomHeader() {
  return (
    <header className="custom-header">
      <div className="custom-header-container">
        {/* Logo */}
        <div className="header-logo">
          <a href="/" className="logo-link">
            cotons ai
          </a>
        </div>

        {/* Right Navigation */}
        <div className="header-right">
          {/* Home Link */}
          <a href="/" className="nav-link">
            home
          </a>

          {/* Shop Link */}
          <a href="/products" className="nav-link">
            shop
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link instagram-link"
            aria-label="Instagram"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* Divider */}
          <div className="nav-divider"></div>

          {/* Search Icon */}
          <div id="search-box-placeholder"></div>

          {/* User Icon - 登录/账户 */}
          <a
            href="/account/login"
            className="nav-link user-link"
            aria-label="Account"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>

          {/* Cart Icon */}
          <div id="mini-cart-placeholder"></div>
        </div>
      </div>
    </header>
  );
}

export const layout = {
  areaId: "content",
  sortOrder: 1,
};
