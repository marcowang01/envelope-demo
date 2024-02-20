import { v4 as uuidv4 } from "uuid";

export const summaryItems = [
  {
    id: uuidv4(),
    sender: "Lucas.I",
    title: "au and dxf files",
    date: "2024-01-31T15:00:00.000Z",
    seen: false,
    checked: false,
    active: true,
  },
  {
    id: uuidv4(),
    sender: "Sarah.C",
    title: "exa.ai logo design next steps",
    date: "2024-01-31T15:00:00.000Z",
    seen: false,
    checked: false,
    active: true,
  },
  {
    id: uuidv4(),
    sender: "Geoff.C",
    title: "Peter Stevenson intro",
    date: "2024-01-29T15:00:00.000Z",
    seen: false,
    checked: false,
    active: true,
  },
  {
    id: uuidv4(),
    sender: "Chris.C",
    title: "wibeeeeeee",
    date: "2024-01-29T15:00:00.000Z",
    seen: false,
    checked: false,
    active: true,
  },
];

export const todos = [
  {
    id: uuidv4(),
    sender: "Jim.W",
    title: "you might find this interesting",
    date: "2024-01-31T15:00:00.000Z",
    completed: false,
    active: true,
  },
  {
    id: uuidv4(),
    sender: "Elisa.V",
    title: "missing meeting today",
    date: "2024-01-30T15:00:00.000Z",
    completed: false,
    active: true,
  },
  {
    id: uuidv4(),
    sender: "Lilith.Y",
    title: "clock pcb",
    date: "2024-01-30T15:00:00.000Z",
    completed: false,
    active: true,
  },
  {
    id: uuidv4(),
    sender: "Marco.W",
    title: "can I merge?",
    date: "2024-01-29T15:00:00.000Z",
    completed: false,
    active: true,
  },
  {
    id: uuidv4(),
    sender: "Pamela.W",
    title: "Clean up code base",
    date: "2024-01-29T15:00:00.000Z",
    completed: false,
    active: true,
  },
  {
    id: uuidv4(),
    sender: "Jenny.R",
    title: "update the docs",
    date: "2024-01-29T15:00:00.000Z",
    completed: false,
    active: true,
  },
];

export const calendarEvents = [
  {
    id: uuidv4(),
    sender: "Rabbit.I",
    event: "rabbit <> Gary",
    label: "3:30 pm",
    date: "2024-02-02T15:30:00.000Z", // Assuming current date is 2024-02-02
    active: true,
  },
  {
    id: uuidv4(),
    sender: "Rabbit.I",
    event: "team all hands",
    label: "5:00 pm",
    date: "2024-02-02T17:00:00.000Z", // Assuming the same date for simplicity\
    active: true,
  },
  {
    id: uuidv4(),
    sender: "Northwestern.U",
    event: "thesis meeting",
    label: "tomorrow 7:00 am",
    date: "2024-02-03T07:00:00.000Z", // The next day
    active: true,
  },
  {
    id: uuidv4(),
    sender: "OpenTable",
    event: "dinner at the French Laundry",
    label: "in 2 days",
    date: "2024-02-04T15:00:00.000Z", // In 2 days from the assumed date
    active: true,
  },
  {
    id: uuidv4(),
    sender: "United.A",
    event: "flight to SF",
    label: "in 5 days",
    date: "2024-02-07T15:00:00.000Z", // In 5 days from the assumed date
    active: true,
  },
  {
    id: uuidv4(),
    sender: "AirBnb",
    event: "Trip at Yosemite",
    label: "in 2 weeks",
    date: "2024-02-16T15:00:00.000Z", // In 2 weeks from the assumed date
    active: true,
  },
];

export const trackingItems = [
  {
    id: uuidv4(),
    item: "mattress",
    status: "delivered 2 days ago",
    date: "2024-01-31T15:00:00.000Z", // 2 days ago from the assumed current date
    active: true,
  },
  {
    id: uuidv4(),
    item: "shampoo",
    status: "estimated delivery tomorrow",
    date: "2024-02-03T15:00:00.000Z", // The next day from the current date
    active: true,
  },
  {
    id: uuidv4(),
    item: "swiffer",
    status: "order placed",
    date: "2024-02-01T15:00:00.000Z", // Assuming order placed today
    active: true,
  },
  {
    id: uuidv4(),
    item: "toilet paper",
    status: "delivered 5 days ago",
    date: "2024-01-28T15:00:00.000Z", // 5 days ago from the current date
    active: true,
  },
  {
    id: uuidv4(),
    item: "coffee",
    status: "arriving in 2 days",
    date: "2024-02-01T15:00:00.000Z", // Assuming order placed today
    active: true,
  },
];
