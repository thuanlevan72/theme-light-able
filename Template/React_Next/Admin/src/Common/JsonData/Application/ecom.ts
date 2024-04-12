import prod1 from "@assets/images/application/img-prod-1.jpg";
import prod2 from "@assets/images/application/img-prod-2.jpg";
import prod3 from "@assets/images/application/img-prod-3.jpg";
import prod4 from "@assets/images/application/img-prod-4.jpg";
import prod5 from "@assets/images/application/img-prod-5.jpg";
import prod6 from "@assets/images/application/img-prod-6.jpg";
import prod7 from "@assets/images/application/img-prod-7.jpg";
import prod8 from "@assets/images/application/img-prod-8.jpg";
import prod9 from "@assets/images/application/img-prod-9.jpg";
import brand5 from '@assets/images/application/img-prod-brand-5.png';
import brand4 from '@assets/images/application/img-prod-brand-4.png';
import brand3 from '@assets/images/application/img-prod-brand-3.png';
import brand2 from '@assets/images/application/img-prod-brand-2.png';
import brand1 from "@assets/images/application/img-prod-brand-1.png";

const ecomData = [
    {
        id: 1,
        name: "Apple watch -1",
        price: 299.0,
        originalPrice: 399.0,
        rating: 4.5,
        imageUrl: prod1,
        discount: null
    },
    {
        id: 2,
        name: "Apple watch -4",
        price: 299.0,
        originalPrice: 399.0,
        rating: 4.5,
        imageUrl: prod2,
        discount: "30%"
    },
    {
        id: 3,
        name: "Apple watch -3",
        price: 299.0,
        originalPrice: 399.0,
        rating: 4.5,
        imageUrl: prod3,
        discount: null
    },
    {
        id: 4,
        name: "Apple watch -4",
        price: 299.0,
        originalPrice: 399.0,
        rating: 4.5,
        imageUrl: prod4,
        discount: "30%"
    },
    {
        id: 5,
        name: "Apple watch -6",
        price: 299.0,
        originalPrice: 399.0,
        rating: 4.5,
        imageUrl: prod5,
        discount: "30%"
    },
    {
        id: 6,
        name: "Apple watch -5",
        price: 299.0,
        originalPrice: 399.0,
        rating: 4.5,
        imageUrl: prod6,
        discount: "30%"
    },
    {
        id: 7,
        name: "Apple watch -4",
        price: 299.0,
        originalPrice: 399.0,
        rating: 4.5,
        imageUrl: prod7,
        discount: null
    },
    {
        id: 8,
        name: "Apple watch -7",
        price: 299.0,
        originalPrice: 399.0,
        rating: 4.5,
        imageUrl: prod8,
        discount: "30%"
    },
    {
        id: 9,
        name: "Apple watch -9",
        price: 299.0,
        originalPrice: 399.0,
        rating: 4.5,
        imageUrl: prod9,
        discount: null
    }
];

const productData = [
    {
        imgSrc: prod2,
        title: "Apple watch -4",
        price: "$299.00",
        discountPrice: "$399.00",
        rating: 4.5
    },
    {
        imgSrc: prod3,
        title: "Apple watch -4",
        price: "$299.00",
        discountPrice: "$399.00",
        rating: 4.5
    },
    {
        imgSrc: prod4,
        title: "Apple watch -4",
        price: "$299.00",
        discountPrice: "$399.00",
        discount: "30%",
        rating: 4.5
    },
    {
        imgSrc: prod5,
        title: "Apple watch -4",
        price: "$299.00",
        discountPrice: "$399.00",
        rating: 4.5
    }
];

const ecomList = [
    {
        id: 1,
        title: "Apple Series 4 GPS A38 MM Space",
        description: "Apple Watch SE Smartwatch",
        category: "Electronics, Laptop",
        price: "$14.59",
        quantity: 70,
        status: "success",
        image: prod1,
        brand: brand1
    },
    {
        id: 2,
        title: "Boat On-Ear Wireless",
        description: "Mic(Bluetooth 4.2, Rockerz 450R",
        category: "Electronics, Headphones",
        price: "$81.99",
        quantity: 45,
        status: "warning",
        image: prod2,
        brand: brand2
    },
    {
        id: 3,
        title: "Fitbit MX30 Smart Watch",
        description: "(MX30- waterproof) watch",
        category: "Fashion, Watch",
        price: "$49.9",
        quantity: 21,
        status: "danger",
        image: prod3,
        brand: brand3
    },
    {
        id: 4,
        title: "Apple Series 4 GPS A38 MM Space",
        description: "Apple Watch SE Smartwatch",
        category: "Electronics, Laptop",
        price: "$14.59",
        quantity: 70,
        status: "success",
        image: prod4,
        brand: brand4
    },
    {
        id: 5,
        title: "Boat On-Ear Wireless",
        description: "Mic(Bluetooth 4.2, Rockerz 450R",
        category: "Electronics, Headphones",
        price: "$81.99",
        quantity: 45,
        status: "warning",
        image: prod5,
        brand: brand5
    },
    {
        id: 6,
        image: prod4,
        title: "Apple Series 4 GPS A38 MM Space",
        description: "Apple Watch SE Smartwatch",
        category: "Electronics, Laptop",
        price: "$14.59",
        quantity: 70,
        status: "success",
        brand: brand4
    },
    {
        id: 7,
        image: prod5,
        title: "Boat On-Ear Wireless",
        description: "Mic(Bluetooth 4.2, Rockerz 450R",
        category: "Electronics, Headphones",
        price: "$81.99",
        quantity: 45,
        status: "warning",
        brand: brand5
    },
    {
        id: 8,
        image: prod1,
        title: "Apple Series 4 GPS A38 MM Space",
        description: "Apple Watch SE Smartwatch",
        category: "Electronics, Laptop",
        price: "$14.59",
        quantity: 70,
        status: "success",
        brand: brand1
    },
    {
        id: 9,
        image: prod2,
        title: "Boat On-Ear Wireless",
        description: "Mic(Bluetooth 4.2, Rockerz 450R",
        category: "Electronics, Headphones",
        price: "$81.99",
        quantity: 45,
        status: "warning",
        brand: brand2
    },
    {
        id: 10,
        image: prod3,
        title: "Fitbit MX30 Smart Watch",
        description: "(MX30- waterproof) watch",
        category: "Fashion, Watch",
        price: "$49.9",
        quantity: 21,
        status: "danger",
        brand: brand3
    },
    {
        id: 11,
        image: prod1,
        title: "Apple Series 4 GPS A38 MM Space",
        description: "Apple Watch SE Smartwatch",
        category: "Electronics, Laptop",
        price: "$14.59",
        quantity: 70,
        status: "success",
        brand: brand1
    },
    {
        id: 12,
        image: prod2,
        title: "Boat On-Ear Wireless",
        description: "Mic(Bluetooth 4.2, Rockerz 450R",
        category: "Electronics, Headphones",
        price: "$81.99",
        quantity: 45,
        status: "warning",
        brand: brand2
    },
    {
        id: 13,
        image: prod3,
        title: "Fitbit MX30 Smart Watch",
        description: "(MX30- waterproof) watch",
        category: "Fashion, Watch",
        price: "$49.9",
        quantity: 21,
        status: "danger",
        brand: brand3
    },
    {
        id: 14,
        image: prod4,
        title: "Apple Series 4 GPS A38 MM Space",
        description: "Apple Watch SE Smartwatch",
        category: "Electronics, Laptop",
        price: "$14.59",
        quantity: 70,
        status: "success",
        brand: brand4
    },
    {
        id: 15,
        image: prod6,
        title: "Boat On-Ear Wireless",
        description: "Mic(Bluetooth 4.2, Rockerz 450R",
        category: "Electronics, Headphones",
        price: "$81.99",
        quantity: 45,
        status: "warning",
        brand: brand5
    },
    {
        id: 16,
        image: prod1,
        title: "Apple Series 4 GPS A38 MM Space",
        description: "Apple Watch SE Smartwatch",
        category: "Electronics, Laptop",
        price: "$14.59",
        quantity: 70,
        status: "success",
        brand: brand1
    },
    {
        id: 17,
        image: prod2,
        title: "Boat On-Ear Wireless",
        description: "Mic(Bluetooth 4.2, Rockerz 450R",
        category: "Electronics, Headphones",
        price: "$81.99",
        quantity: 45,
        status: "warning",
        brand: brand2
    },
    {
        id: 18,
        image: prod3,
        title: "Fitbit MX30 Smart Watch",
        description: "(MX30- waterproof) watch",
        category: "Fashion, Watch",
        price: "$49.9",
        quantity: 21,
        status: "danger",
        brand: brand3
    }
];

export { ecomData, productData, ecomList };
