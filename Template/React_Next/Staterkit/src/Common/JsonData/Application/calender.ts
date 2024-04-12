
var date = new Date();
var d: any = date.getDate();
var m: any = date.getMonth();
var y: any = date.getFullYear();

interface Event {
    id: number;
    title: string;
    start: Date;
    end?: Date;
    allDay: boolean;
    description: string;
    venue: string;
    className: string;
    groupId?: number;
    // url?: any;
};

const events: any = [
    {
        id: 1,
        title: 'All Day Event',
        start: new Date(y, m, 1),
        allDay: true,
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
        venue: 'City Town',
        className: 'event-warning'
    },
    {
        id: 2,
        title: 'Long Event',
        start: new Date(y, m, 7),
        end: new Date(y, m, 10),
        allDay: true,
        description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        venue: 'City Town',
        className: 'event-primary'
    },
    {
        id: 3,
        groupId: 999,
        title: 'Repeating Event',
        start: new Date(y, m, 9, 16, 0),
        allDay: false,
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
        venue: 'City Town',
        className: 'event-danger'
    },
    {
        id: 4,
        groupId: 999,
        title: 'Repeating Event',
        start: new Date(y, m, 16, 16, 0),
        allDay: false,
        description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        venue: 'City Town',
        className: 'event-danger'
    },
    {
        id: 5,
        title: 'Conference',
        start: new Date(y, m, 11),
        end: new Date(y, m, 13),
        allDay: true,
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
        venue: 'City Town',
        className: 'event-info'
    },
    {
        id: 6,
        title: 'Meeting',
        start: new Date(y, m, 12, 10, 30),
        end: new Date(y, m, 12, 12, 30),
        allDay: false,
        description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        venue: 'City Town',
        className: 'event-danger'
    },
    {
        id: 7,
        title: 'Lunch',
        start: new Date(y, m, 12, 12, 30),
        allDay: false,
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
        venue: 'City Town',
        className: 'event-success'
    },
    {
        id: 8,
        title: 'Meeting',
        start: new Date(y, m, 14, 14, 30),
        allDay: false,
        description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        venue: 'City Town',
        className: 'event-warning'
    },
    {
        id: 9,
        title: 'Happy Hour',
        start: new Date(y, m, 14, 17, 30),
        allDay: false,
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
        venue: 'City Town',
        className: 'event-info'
    },
]

export { events };
