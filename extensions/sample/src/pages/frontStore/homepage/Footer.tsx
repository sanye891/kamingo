import React from "react";

export default function CustomFooter() {
  return (
    <div
      style={{
        backgroundColor: "rgb(220, 210, 190)",
        padding: "3rem 2rem",
        marginTop: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* 第一行：问候语 */}
        <div style={{ marginBottom: "2rem" }}>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            cotons ai. hello from jeju !
          </p>
        </div>

        {/* 第二行：左边联系信息，右边链接 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          {/* 左侧：联系信息和版权 */}
          <div style={{ flex: "1 1 250px" }}>
            <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.85rem" }}>
              Contact email: service@cotons.ai
            </p>
            <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.85rem" }}>
              Company number: +82 64-756-7333
            </p>
            <p style={{ margin: 0, fontSize: "0.85rem" }}>
              Copyright © 2024 CareSix | Cotons AI
            </p>
          </div>

          {/* 右侧：链接（水平排列） */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              fontSize: "0.85rem",
              flex: "0 1 auto",
            }}
          >
            <span>About CareSix,</span>
            <span>Terms and Conditions,</span>
            <span>Privacy Policies,</span>
            <span>Sales,</span>
            <span>Legal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: "content",
  sortOrder: 100,
};
