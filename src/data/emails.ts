import { v4 as uuidv4 } from "uuid";

export const catchupEmails = [
  {
    id: uuidv4(),
    sender: "Lucas.I",
    title: "au and dxf files",
    date: "2024-01-31T15:00:00.000Z",
    seen: false,
    checked: false,
  },
  {
    id: uuidv4(),
    sender: "Sarah.C",
    title: "exa.ai logo design next steps",
    date: "2024-01-31T15:00:00.000Z",
    seen: false,
    checked: false,
  },
  {
    id: uuidv4(),
    sender: "Geoff.C",
    title: "Peter Stevenson intro",
    date: "2024-01-29T15:00:00.000Z",
    seen: false,
    checked: false,
  },
  {
    id: uuidv4(),
    sender: "Chris.C",
    title: "wibeeeeeee",
    date: "2024-01-29T15:00:00.000Z",
    seen: false,
    checked: false,
  },
];

export const todos = [
  {
    id: uuidv4(),
    sender: "Jim.W",
    title: "you might find this interesting",
    date: "2024-01-31T15:00:00.000Z",
    completed: true,
  },
  {
    id: uuidv4(),
    sender: "Elisa.V",
    title: "missing meeting today",
    date: "2024-01-30T15:00:00.000Z",
    completed: true,
  },
  {
    id: uuidv4(),
    sender: "Lilith.Y",
    title: "clock pcb",
    date: "2024-01-30T15:00:00.000Z",
    completed: true,
  },
  {
    id: uuidv4(),
    sender: "Marco.W",
    title: "can I merge?",
    date: "2024-01-29T15:00:00.000Z",
    completed: true,
  },
];

export const calendarEvents = [
  {
    id: uuidv4(),
    sender: "Rabbit.I",
    event: "rabbit <> Gary",
    time: "2024-02-02T15:30:00.000Z", // Assuming current date is 2024-02-02
  },
  {
    id: uuidv4(),
    sender: "Rabbit.I",
    event: "team all hands",
    time: "2024-02-02T17:00:00.000Z", // Assuming the same date for simplicity
  },
  {
    id: uuidv4(),
    sender: "Northwestern.U",
    event: "thesis meeting",
    time: "2024-02-03T07:00:00.000Z", // The next day
  },
  {
    id: uuidv4(),
    sender: "United.A",
    event: "flight to SF",
    time: "2024-02-07T15:00:00.000Z", // In 5 days from the assumed date
  },
];

export const trackingItems = [
  {
    id: uuidv4(),
    item: "mattress",
    status: "delivered",
    date: "2024-01-31T15:00:00.000Z", // 2 days ago from the assumed current date
  },
  {
    id: uuidv4(),
    item: "shampoo",
    status: "estimated delivery tomorrow",
    date: "2024-02-03T15:00:00.000Z", // The next day from the current date
  },
  {
    id: uuidv4(),
    item: "swiffer",
    status: "order placed",
    date: "2024-02-01T15:00:00.000Z", // Assuming order placed today
  },
];
