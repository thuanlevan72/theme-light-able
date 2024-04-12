//import images
import status2 from "@assets/images/widget/img-status-2.svg";
import status1 from "@assets/images/widget/img-status-1.svg";
import status3 from "@assets/images/widget/img-status-3.svg";

import avatar1 from "@assets/images/user/avatar-1.jpg";
import avatar2 from "@assets/images/user/avatar-2.jpg";
import avatar3 from "@assets/images/user/avatar-3.jpg";
import avatar4 from "@assets/images/user/avatar-4.jpg";
import avatar5 from "@assets/images/user/avatar-5.jpg";
import avatar6 from "@assets/images/user/avatar-6.jpg";
import avatar7 from "@assets/images/user/avatar-7.jpg";

const affiliateWidget = [
    {
        id: 1,
        cardImg: status2,
        iconColor: "bg-brand-color-1",
        icon: "ph-duotone ph-currency-dollar f-26",
        title: "Referrals",
        price: 134.6,
        suffix: "$ ",
        prefix: " k",
        percentage: 55,
        badgeColor: "success"
    },
    {
        id: 2,
        cardImg: status1,
        iconColor: "bg-brand-color-2",
        icon: "ph-duotone ph-scales f-26",
        title: "Conversion Rate",
        price: 8.57,
        prefix: "%",
        percentage: 3.6,
        badgeColor: "danger"
    },
    {
        id: 3,
        cardImg: status3,
        iconColor: "bg-brand-color-3",
        icon: "ph-duotone ph-users-four f-26",
        title: "Visits",
        price: 278,
        percentage: 7,
        badgeColor: "success"
    }
];

const affiliateData = [
    {
        id : 1,
        img : avatar2,
        name : "John Doe",
        subTitle : "Dashboard",
        price : 38,
        percentage : 5.8,
        arrowUp : true  
    },
    {
        id : 2,
        img : avatar1,
        name : "Keefs",
        subTitle : "New Website",
        price : 928,
        percentage : 51.2,
        arrowUp : false  
    },
    {
        id : 3,
        img : avatar3,
        name : "Lazaro",
        subTitle : "Dashboard",
        price : 674,
        percentage : 17.1,
        arrowUp : true  
    },
    {
        id : 4,
        img : avatar4,
        name : "Adeline",
        subTitle : "New Website",
        price : 1438,
        percentage : 15.8,
        arrowUp : false  
    },
    {
        id : 5,
        img : avatar5,
        name : "John Doe",
        subTitle : "Invoice",
        price : 90,
        percentage : 9.8,
        arrowUp : true  
    },
    {
        id : 6,
        img : avatar6,
        name : "Keefs",
        subTitle : "Dashboard",
        price : 123,
        percentage : 5.8,
        arrowUp : true  
    },
    {
        id : 7,
        img : avatar7,
        name : "Lazaro",
        subTitle : "Landing page",
        price : 928,
        percentage : 51.2,
        arrowUp : false  
    },
];

const topVisitorData = [

    {
        id : 1,
        img : avatar4,
        name : "Adeline",
        subTitle : "New Website",
        price : 1438,
        percentage : 15.8,
        arrowUp : false  
    },
    {
        id : 2,
        img : avatar5,
        name : "John Doe",
        subTitle : "Invoice",
        price : 90,
        percentage : 9.8,
        arrowUp : true  
    },
    {
        id : 3,
        img : avatar6,
        name : "Keefs",
        subTitle : "Dashboard",
        price : 123,
        percentage : 5.8,
        arrowUp : true  
    },
    {
        id : 4,
        img : avatar7,
        name : "Lazaro",
        subTitle : "Landing page",
        price : 928,
        percentage : 51.2,
        arrowUp : false  
    },
    {
        id : 5,
        img : avatar2,
        name : "John Doe",
        subTitle : "Dashboard",
        price : 38,
        percentage : 5.8,
        arrowUp : true  
    },
    {
        id : 6,
        img : avatar1,
        name : "Keefs",
        subTitle : "New Website",
        price : 928,
        percentage : 51.2,
        arrowUp : false  
    },
    {
        id : 7,
        img : avatar3,
        name : "Lazaro",
        subTitle : "Dashboard",
        price : 674,
        percentage : 17.1,
        arrowUp : true  
    }
];

export { affiliateWidget, affiliateData, topVisitorData };