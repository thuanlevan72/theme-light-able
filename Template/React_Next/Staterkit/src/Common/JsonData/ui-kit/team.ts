//import images
import avatar1 from "@assets/images/user/avatar-1.jpg";
import avatar2 from "@assets/images/user/avatar-2.jpg";
import avatar3 from "@assets/images/user/avatar-3.jpg";
import avatar4 from "@assets/images/user/avatar-4.jpg";
import avatar5 from "@assets/images/user/avatar-5.jpg";
import avatar6 from "@assets/images/user/avatar-6.jpg";
import avatar7 from "@assets/images/user/avatar-7.jpg";
import avatar8 from "@assets/images/user/avatar-8.jpg";
import avatar9 from "@assets/images/user/avatar-9.jpg";

const teamData = [
    {
        id: 1,
        color: "primary",
        icon: "ph-duotone ph-paint-brush f-18",
        designation: "Design",
        email: "Carson_Darrin@domain.com",
        organization: "SR.Pvt.Ltd",
        teamLeader: "Carson Darrin",
        img: avatar2,
        members: [{ img: avatar4, name: "john week" }, { img: avatar6, name: 'Lazaro' }, { img: avatar7, name: 'nia' }, { img: avatar8, name: 'John Doe' }],
        memberList: 1,
        location: "India"
    },
    {
        id: 2,
        color: "success",
        icon: "ph-duotone ph-buildings f-18",
        designation: "Managment",
        email: "John_Doe@domain.com",
        organization: "SMT.Pvt.Ltd",
        teamLeader: "John Doe",
        img: avatar8,
        members: [{ img: avatar1, name: '' }, { img: avatar5, name: 'leen' }, { img: avatar3, name: 'Adeline' }, { img: avatar4, name: 'john week' }],
        memberList: 5,
        location: "Indonasia"
    },
    {
        id: 3,
        color: "warning",
        icon: "ph-duotone ph-devices f-18",
        designation: "Production",
        email: "Adeline@domain.com",
        organization: "JCBK.Pvt.Ltd",
        teamLeader: "Adeline",
        img: avatar3,
        members: [{ img: avatar6, name: 'Lazaro' }, { img: avatar4, name: 'john week' }, { img: avatar1, name: '' }, { img: avatar7, name: 'nia' }],
        location: "Malaysia"
    },
    {
        id: 4,
        color: "danger",
        icon: "ph-duotone ph-gear-fine f-18",
        designation: "Service",
        email: "Lazaro@domain.com",
        organization: "DDMS.Pvt.Ltd",
        teamLeader: "Lazaro",
        img: avatar6,
        members: [{ img: avatar7, name: 'nia' }, { img: avatar9, name: 'cerry' }, { img: avatar1, name: '' }],
        location: "indonesia"
    },
    {
        id: 5,
        color: "primary",
        icon: "ph-duotone ph-paint-brush f-18",
        designation: "Design",
        email: "Carson_Darrin@domain.com",
        organization: "SR.Pvt.Ltd",
        teamLeader: "Carson Darrin",
        img: avatar2,
        members: [{ img: avatar4, name: "john week" }, { img: avatar6, name: "Lazaro" }, { img: avatar7, name: "nia" }, { img: avatar8, name: "John Doe" }],
        location: "India"
    },
    {
        id: 6,
        color: "success",
        icon: "ph-duotone ph-buildings f-18",
        designation: "Managment",
        email: "John_Doe@domain.com",
        organization: "SMT.Pvt.Ltd",
        teamLeader: "John Doe",
        img: avatar8,
        members: [{ img: avatar1, name: "" }, { img: avatar5, name: "leen" }, { img: avatar3, name: "Adeline" }, { img: avatar4, name: "" }],
        location: "indonesia"
    },
    {
        id: 7,
        color: "warning",
        icon: "ph-duotone ph-devices f-18",
        designation: "Production",
        email: "Adeline@domain.com",
        organization: "JCBK.Pvt.Ltd",
        teamLeader: "Adeline",
        img: avatar3,
        members: [{ img: avatar6, name: 'Lazaro' }, { img: avatar4, name: 'john week' }, { img: avatar1, name: '' }, { img: avatar7, name: 'nia' }],
        location: "Malaysia"
    },
    {
        id: 8,
        color: "danger",
        icon: "ph-duotone ph-gear-fine f-18 ",
        designation: "Service",
        email: "Lazaro@domain.com",
        organization: "DDMS.Pvt.Ltd",
        teamLeader: "Lazaro",
        img: avatar6,
        members: [{ img: avatar7, name: "nia" }, { img: avatar9, name: "cerry" }, { img: avatar1, name: "" }],
        location: "Australia"
    },
];

export {
    teamData
};