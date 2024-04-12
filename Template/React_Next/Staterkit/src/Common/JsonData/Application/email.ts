import avatar1 from "@assets/images/user/avatar-1.jpg";
import avatar2 from '@assets/images/user/avatar-2.jpg';
import avatar3 from "@assets/images/user/avatar-3.jpg";

const emailInbox: any = [
    {
        id: 1,
        type: "Primary",
        status: "unread",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: false },
        user: {
            imageSrc: avatar1,
            name: "Barney Thea"
        },
        categorys: "Sent",
        labeltype: "Promotions",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.been the industry's standard dummy text ever since the 1500s.",
        date: "12 Jul 23 08:23 AM",
    },
    {
        id: 2,
        type: "Primary",
        status: "unread",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: true },
        user: {
            imageSrc: avatar3,
            name: "Mattie Reid",
            badges: ["Promotions", "Forums"]
        },
        categorys: "Sent",
        labeltype: "Promotions",
        message: "simply dummy text the industry's standard dummy text ever since the 1500s.",
        attachment: "ti-paperclip",
        date: "13 Jul 23 08:23 AM",
    },
    {
        id: 3,
        type: "Primary",
        status: "unread",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: false },
        user: {
            avatar: {
                background: "bg-light-primary",
                name: "N",
                color: "text-primary",
                size: "avtar-s"
            },
            name: "Nathaniel Vasquez",
            badges: [
                {
                    text: "Forums",
                    background: "btn-light-warning",
                    size: "rounded-pill",
                    padding: "py-1 px-2"
                }
            ]
        },
        categorys: "Draft",
        labeltype: "Promotions",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.been the industry's standard dummy text ever since the 1500s.",
        date: "15 Jul 23 08:23 AM",
    },
    {
        id: 4,
        type: "Promotions",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: true },
        user: {
            avatar: {
                background: "bg-facebook",
                icon: "ph-facebook-logo",
                color: "text-white",
                size: "avtar-s"
            },
            name: "facebook",
            badges: [
                {
                    text: "Promotions",
                    background: "btn-light-primary",
                    size: "rounded-pill",
                    padding: "py-1 px-2"
                }
            ]
        },
        categorys: "Draft",
        labeltype: "Forums",
        message: "of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text the industry's standard dummy text ever since the 1500s.",
        attachment: "ti-paperclip",
        date: "16 Jul 23 08:23 AM",
    },
    {
        id: 5,
        type: "Promotions",
        status: "unread",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: false },
        user: {
            avatar: {
                background: "bg-twitter",
                icon: "ph-twitter-logo",
                color: "text-white",
                size: "avtar-s"
            },
            name: "twitter",
        },
        categorys: "Spam",
        labeltype: "Forums",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.been the industry's standard dummy text ever since the 1500s.",
        date: "12 Jul 23 08:23 AM",
    },
    {
        id: 6,
        type: "Promotions",
        status: "unread",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: false },
        user: {
            avatar: {
                background: "bg-light-primary",
                name: "N",
                color: "text-primary",
                size: "avtar-s"
            },
            name: "Nathaniel Vasquez",
            badges: [
                {
                    text: "Forums",
                    background: "btn-light-warning",
                    size: "rounded-pill",
                    padding: "py-1 px-2"
                }
            ]
        },
        categorys: "Trash",
        labeltype: "Forums",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.been the industry's standard dummy text ever since the 1500s.",
        attachment: true,
        date: "15 Jul 23 08:23 AM",
    },
    {
        id: 7,
        type: "Social",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: true },
        user: {
            avatar: {
                background: "bg-facebook",
                icon: "ph-facebook-logo",
                color: "text-white",
                size: "avtar-s"
            },
            name: "facebook",
            badges: [
                {
                    text: "Promotions",
                    background: "btn-light-primary",
                    size: "rounded-pill",
                    padding: "py-1 px-2"
                }
            ]
        },
        categorys: "Trash",
        labeltype: "Starred",
        message: "of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text the industry's standard dummy text ever since the 1500s.",
        attachment: true,
        date: "16 Jul 23 08:23 AM",
    },
    {
        id: 8,
        type: "Social",
        status: "unread",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: false },
        user: {
            background: "bg-light-primary",
            imageSrc: avatar1,
            size: "img-user bg-light-primary rounded-circle",
            name: "Barney Thea",
        },
        categorys: "Sent",
        labeltype: "Starred",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.been the industry's standard dummy text ever since the 1500s.",
        attachment: null,
        date: "12 Jul 23 08:23 AM",
    },
    {
        id: 9,
        type: "Social",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: true },
        user: {
            imageSrc: avatar2,
            background: "rounded-circle",
            altText: "user-image",
            name: "Zachary Chambers",
            badges: [
                {
                    text: "Promotions",
                    background: "btn-light-primary",
                    size: "rounded-pill",
                    padding: "py-1 px-2"
                },
                {
                    text: "Forums",
                    background: "btn-light-warning",
                    size: "rounded-pill",
                    padding: "py-1 px-2"
                }
            ]
        },
        categorys: "Archive",
        labeltype: "Starred",
        message: "of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text the industry's standard dummy text ever since the 1500s.",
        attachment: true,
        date: "13 Jul 23 08:23 AM",
    },
    {
        id: 10,
        type: "Updates",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: true },
        user: {
            imageSrc: avatar2,
            background: "rounded-circle",
            altText: "user-image",
            name: "facebook",
            badges: [
                {
                    text: "Promotions",
                    background: "btn-light-primary",
                    size: "rounded-pill",
                    padding: "py-1 px-2"
                }
            ]
        },
        categorys: "Archive",
        labeltype: "Important",
        message: "of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text the industry's standard dummy text ever since the 1500s.",
        attachment: true,
        date: "16 Jul 23 08:23 AM",
    },
    {
        id: 11,
        type: "Updates",
        status: "unread",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: false },
        user: {
            imageSrc: avatar1,
            background: "rounded-circle",
            altText: "user-image",
            name: "Barney Thea",
        },
        categorys: "Sent",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.been the industry's standard dummy text ever since the 1500s.",
        date: "12 Jul 23 08:23 AM",
    },
    {
        id: 12,
        type: "Updates",
        status: "unread",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: false },
        user: {
            avatar: {
                background: "bg-success",
                name: "W",
                color: "text-white",
                size: "avtar-s"
            },
            name: "week jhon",
        },
        categorys: "Draft",
        labeltype: "Promotions",
        message: "printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.been the industry's standard dummy text ever since the 1500s.",
        date: "12 Jul 23 08:23 AM",
    },
    {
        id: 13,
        type: "Announcement",
        status: "unread",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: false },
        user: {
            imageSrc: avatar2,
            background: "rounded-circle",
            altText: "user-image",
            name: "mr. Jhon",
        },
        categorys: "Sent",
        labeltype: "Promotions",
        message: "the industry's standard dummy text ever since the 1500s.been the industry's standard dummy text ever since the 1500s.",
        date: "12 Jul 23 08:23 AM",
    },
    {
        id: 14,
        type: "Announcement",
        status: "unread",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: false },
        user: {
            avatar: {
                background: "bg-primary",
                name: "J",
                color: "text-white",
                size: "avtar-s"
            },
            name: "jhon smit",
        },
        categorys: "Draft",
        labeltype: "Forums",
        message: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.been the industry's standard dummy text ever since the 1500s.",
        date: "12 Jul 23 08:23 AM",
    },
    {
        id: 15,
        type: "Announcement",
        status: "unread",
        checkbox1: { isChecked: false },
        checkbox2: { isChecked: false },
        user: {
            imageSrc: avatar3,
            background: "rounded-circle",
            altText: "user-image",
            name: "Thea",
        },
        categorys: "Archive",
        labeltype: "Forums",
        message: "printing and typesetting industry",
        date: "12 Jul 23 08:23 AM",
    }
]

export { emailInbox };