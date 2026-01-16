import React from "react";
import "./AllProducts.scss";
export default function AllProducts({ products }: {
    products: any;
}): React.JSX.Element;
export declare const layout: {
    areaId: string;
    sortOrder: number;
};
export declare const query = "\n  query {\n    products(filters: []) {\n      items {\n        productId\n        uuid\n        name\n        price {\n          regular {\n            value\n            text\n          }\n          special {\n            value\n            text\n          }\n        }\n        image {\n          url\n          alt\n        }\n        url\n      }\n      total\n    }\n  }\n";
