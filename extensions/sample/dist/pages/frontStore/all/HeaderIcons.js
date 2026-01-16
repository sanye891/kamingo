import { useEffect } from "react";
export default function HeaderIcons() {
    useEffect(() => {
        // 等待 DOM 加载完成后移动图标
        const moveIcons = () => {
            // 移动搜索框
            const searchBox = document.querySelector(".search__box");
            const searchPlaceholder = document.getElementById("search-box-placeholder");
            if (searchBox &&
                searchPlaceholder &&
                !searchPlaceholder.hasChildNodes()) {
                searchPlaceholder.appendChild(searchBox);
            }
            // 移动用户图标
            const userIcon = document.querySelector(".user-icon");
            const userPlaceholder = document.getElementById("user-icon-placeholder");
            if (userIcon && userPlaceholder && !userPlaceholder.hasChildNodes()) {
                userPlaceholder.appendChild(userIcon);
            }
            // 移动购物车
            const miniCart = document.querySelector(".mini__cart__wrapper");
            const cartPlaceholder = document.getElementById("mini-cart-placeholder");
            if (miniCart && cartPlaceholder && !cartPlaceholder.hasChildNodes()) {
                cartPlaceholder.appendChild(miniCart);
            }
        };
        // 多次尝试移动，确保元素已加载
        const timer1 = setTimeout(moveIcons, 100);
        const timer2 = setTimeout(moveIcons, 500);
        const timer3 = setTimeout(moveIcons, 1000);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);
    return null;
}
export const layout = {
    areaId: "body",
    sortOrder: 0,
};
//# sourceMappingURL=HeaderIcons.js.map