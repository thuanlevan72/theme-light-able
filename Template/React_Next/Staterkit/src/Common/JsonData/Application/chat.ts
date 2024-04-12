import avatar3 from '@assets/images/user/avatar-3.jpg';
import avatar2 from '@assets/images/user/avatar-2.jpg';
import avatar1 from '@assets/images/user/avatar-1.jpg';

const chatList = [
    {
        id: 1,
        name: "John Doe",
        avatar: avatar1,
        badgeColor: "bg-success",
        status: "1 week ago",
        message: "when meeting schedule"
    },
    {
        id: 2,
        name: "Keefs",
        avatar: avatar2,
        badgeColor: "bg-success",
        status: "1 week ago",
        message: "when meeting schedule"
    },
    {
        id: 3,
        name: "Lazaro",
        avatar: avatar3,
        badgeColor: "bg-success",
        status: "1 week ago",
        message: "when meeting schedule"
    },
    {
        id: 4,
        name: "Adeline",
        avatar: avatar3,
        status: "1 week ago",
        badgeColor: "bg-success",
        message: "when meeting schedule"
    },
    {
        id: 5,
        name: "Smith Doe",
        avatar: avatar1,
        badgeColor: "bg-success",
        message: "when meeting schedule",
        status: "1 week ago"
    },
    {
        id: 6,
        name: "Ibrahim",
        avatar: avatar2,
        badgeColor: "bg-secondary bg-opacity-50",
        message: "when meeting schedule",
        status: "1 week ago"
    },
    {
        id: 7,
        name: "Lizz",
        avatar: avatar3,
        badgeColor: "bg-secondary bg-opacity-50",
        message: "when meeting schedule",
        status: "1 week ago"
    },
    {
        id: 8,
        name: "John week",
        avatar: avatar3,
        badgeColor: "bg-secondary bg-opacity-50",
        message: "when meeting schedule",
        status: "1 week ago"
    }
];

const userChat: any = [
    {
        id: 1,
        name: "Adeline",
        userData: [
            { id: 1, roomNO: 1, msg: "Hey.. Bill", time: "9H ago" },
            { id: 2, roomNO: 2, msg: "Hi...Henny!!", time: "9.31 pm" },
            { id: 3, roomNO: 1, msg: "How can i cap you today?", time: "9.34 pm" },
            { id: 4, roomNO: 2, msg: "nice to meet you!", time: "9.36 pm" },
            { id: 5, roomNO: 1, msg: "Are u listening me ?", time: "9.40 pm" },
        ]
    },
    {
        id: 2,
        name: "Lazaro",
        userData: [
            { id: 1, roomNO: 1, msg: "Hey.. Bill", time: "9.40 am" },
            { id: 2, roomNO: 2, msg: "Hi...Henny!!", time: "9.41 am" }
        ]
    }, {
        id: 3,
        name: "Keefs",
        userData: [
            { id: 1, roomNO: 1, msg: "Hey.. Bill", time: "9.40 pm" },
            { id: 5, roomNO: 1, msg: "Are u listening me ?", time: "9.41 pm" },
        ]
    }, {
        id: 4,
        name: "John Doe",
        userData: [
            { id: 1, roomNO: 1, msg: "Hey.. Bill", time: "6.40 am" },
            { id: 2, roomNO: 2, msg: "Hi...Henny!!", time: "6.40 am" },
            { id: 3, roomNO: 1, msg: "How can i cap you today?", time: "6.40 am" },
        ]
    },
    {
        id: 5,
        name: "Smith",
        userData: [
            { id: 1, roomNO: 1, msg: "Hey.. Bill", time: "9H ago" },
            { id: 2, roomNO: 2, msg: "Hi...Henny!!", time: "9.31 pm" },
            { id: 3, roomNO: 1, msg: "How can i cap you today?", time: "9.34 pm" },
            { id: 4, roomNO: 2, msg: "nice to meet you!", time: "9.36 pm" },
            { id: 5, roomNO: 1, msg: "Are u listening me ?", time: "9.40 pm" },
        ]
    },
    {
        id: 6,
        name: "Ibrahim",
        userData: [
            { id: 1, roomNO: 1, msg: "Hey.. Bill", time: "9.40 am" },
            { id: 2, roomNO: 2, msg: "Hi...Henny!!", time: "9.41 am" }
        ]
    }, {
        id: 7,
        name: "Lizz",
        userData: [
            { id: 1, roomNO: 1, msg: "Hey.. Bill", time: "9.40 pm" },
            { id: 5, roomNO: 1, msg: "Are u listening me ?", time: "9.41 pm" },
        ]
    }, {
        id: 8,
        name: "John week",
        userData: [
            { id: 1, roomNO: 1, msg: "Hey.. Bill", time: "6.40 am" },
            { id: 2, roomNO: 2, msg: "Hi...Henny!!", time: "6.40 am" },
            { id: 3, roomNO: 1, msg: "How can i cap you today?", time: "6.40 am" },
        ]
    }
]
export { chatList, userChat };
