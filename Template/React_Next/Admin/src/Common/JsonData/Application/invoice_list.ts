import avatar1 from "@assets/images/user/avatar-1.jpg";
import avatar2 from "@assets/images/user/avatar-2.jpg";
import avatar3 from "@assets/images/user/avatar-3.jpg";
import avatar4 from "@assets/images/user/avatar-4.jpg";
import avatar5 from "@assets/images/user/avatar-5.jpg";
import mastercard from "@assets/images/application/img-mastercard.svg";
import brand1 from "@assets/images/application/img-brand-1.png";
import brand2 from "@assets/images/application/img-brand-2.png";
import brand3 from "@assets/images/application/img-brand-3.png";
import brand4 from "@assets/images/application/img-brand-4.png";
import brand5 from "@assets/images/application/img-brand-5.png";
import brand6 from "@assets/images/application/img-brand-6.png";


const invoiceData = [
    {
        customer: {
            id: 1,
            name: 'Addie Bass',
            image: avatar1,
        },
        status: 'text-danger',
        amount: '$20,000',
        txid: '#63579067848912',
        quantity: 10,
        paymentMethod: mastercard,
    },
    {
        customer: {
            id: 2,
            name: 'Mickie Melmoth',
            image: avatar2,
        },
        status: 'ph-clock-countdown text-warning',
        amount: '$20,000',
        txid: '#63579067848912',
        quantity: 10,
        paymentMethod: mastercard,
    },
    {
        customer: {
            id: 3,
            name: 'Abey Boseley',
            image: avatar3,
        },
        status: 'ph-check-circle text-success',
        amount: '$20,000',
        txid: '#63579067848912',
        quantity: 10,
        paymentMethod: mastercard,
    },
    {
        customer: {
            id: 4,
            name: 'Addie Bass',
            image: avatar4,
        },
        status: 'text-danger',
        amount: '$20,000',
        txid: '#63579067848912',
        quantity: 10,
        paymentMethod: mastercard,
    },
    {
        customer: {
            id: 5,
            name: 'Addie Bass',
            image: avatar5,
        },
        status: 'text-danger',
        amount: '$20,000',
        txid: '#63579067848912',
        quantity: 10,
        paymentMethod: mastercard,
    },
];

const invoicerecode = [
    {
        amount: '$1,245.80',
        status: 'ph-x-circle text-danger',
        txid: '#63579067848912',
        paymentMethod: 'Phonepe',
        createdDate: '10/10/2023',
        dueDate: '12/12/2023',
        quantity: '10',
        image: brand1,
        tooltip: 'Reject',
    },
    {
        amount: '$1,245.80',
        status: 'ph-clock-countdown text-warning',
        txid: '#63579067848912',
        paymentMethod: 'Phonepe',
        createdDate: '10/10/2023',
        dueDate: '12/12/2023',
        quantity: '10',
        image: brand2,
        tooltip: 'Pending',
    },
    {
        amount: '$1,245.80',
        status: 'ph-check-circle text-success',
        txid: '#63579067848912',
        paymentMethod: 'Phonepe',
        createdDate: '10/10/2023',
        dueDate: '12/12/2023',
        quantity: '10',
        image: brand3,
        tooltip: 'Approved',
    },
    {
        amount: '$1,245.80',
        status: 'ph-x-circle text-danger',
        txid: '#63579067848912',
        paymentMethod: 'Phonepe',
        createdDate: '10/10/2023',
        dueDate: '12/12/2023',
        quantity: '10',
        image: brand4,
        tooltip: 'Reject',
    },
    {
        amount: '$1,245.80',
        status: 'ph-clock-countdown text-warning',
        txid: '#63579067848912',
        paymentMethod: 'Phonepe',
        createdDate: '10/10/2023',
        dueDate: '12/12/2023',
        quantity: '10',
        image: brand5,
        tooltip: 'Pending',
    },
    {
        amount: '$1,245.80',
        status: 'ph-check-circle text-success',
        txid: '#63579067848912',
        paymentMethod: 'Phonepe',
        createdDate: '10/10/2023',
        dueDate: '12/12/2023',
        quantity: '10',
        image: brand6,
        tooltip: 'Approved',
    },
];

export { invoiceData, invoicerecode }