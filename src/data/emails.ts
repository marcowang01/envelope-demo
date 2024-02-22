import { v4 as uuidv4 } from "uuid";
import { UniqueIdentifier } from "@dnd-kit/core";

export enum EmailType {
  Summary = "summary",
  Todo = "todo",
  Calendar = "calendar",
  Tracking = "tracking",
}

export interface Email {
  id: UniqueIdentifier;
  date: string;
  active: boolean;
  type: EmailType;
  sender?: string;
  title?: string;
  seen?: boolean;
  completed?: boolean;
  content?: string;
  status?: string;
}

export interface SummaryEmail extends Email {
  sender: string;
  title: string;
  seen: boolean;
}

export interface TodoEmail extends Email {
  sender: string;
  title: string;
  completed: boolean;
}

export interface CalendarEmail extends Email {
  sender: string;
  content: string;
  status: string;
}

export interface TrackingEmail extends Email {
  content: string;
  status: string;
}

export const summaryEmails: SummaryEmail[] = [
  {
    id: `summary-${uuidv4()}`,
    sender: "Lucas.I",
    title: "au and dxf files",
    date: "2024-01-31T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `summary-${uuidv4()}`,
    sender: "Sarah.C",
    title: "exa.ai logo design next steps",
    date: "2024-01-31T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `summary-${uuidv4()}`,
    sender: "Geoff.C",
    title: "Peter Stevenson intro",
    date: "2024-01-29T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `summary-${uuidv4()}`,
    sender: "Chris.C",
    title: "wibeeeeeee",
    date: "2024-01-29T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
];

export const todos: TodoEmail[] = [
  {
    id: `todo-${uuidv4()}`,
    sender: "Jim.W",
    title: "you might find this interesting",
    date: "2024-01-31T15:00:00.000Z",
    type: EmailType.Todo,
    completed: false,
    active: true,
  },
  {
    id: `todo-${uuidv4()}`,
    sender: "Elisa.V",
    title: "missing meeting today",
    date: "2024-01-30T15:00:00.000Z",
    type: EmailType.Todo,
    completed: false,
    active: true,
  },
  {
    id: `todo-${uuidv4()}`,
    sender: "Lilith.Y",
    title: "clock pcb",
    date: "2024-01-30T15:00:00.000Z",
    type: EmailType.Todo,
    completed: false,
    active: true,
  },
  {
    id: `todo-${uuidv4()}`,
    sender: "Marco.W",
    title: "can I merge?",
    date: "2024-01-29T15:00:00.000Z",
    type: EmailType.Todo,
    completed: false,
    active: true,
  },
  {
    id: `todo-${uuidv4()}`,
    sender: "Pamela.W",
    title: "Clean up code base",
    date: "2024-01-29T15:00:00.000Z",
    type: EmailType.Todo,
    completed: false,
    active: true,
  },
  {
    id: `todo-${uuidv4()}`,
    sender: "Jenny.R",
    title: "update the docs",
    date: "2024-01-29T15:00:00.000Z",
    type: EmailType.Todo,
    completed: false,
    active: false,
  },
];

export const calendarEvents: CalendarEmail[] = [
  {
    id: `calendar-${uuidv4()}`,
    sender: "Rabbit.I",
    content: "rabbit <> Gary",
    status: "3:30 pm",
    type: EmailType.Calendar,
    date: "2024-02-02T15:30:00.000Z", // Assuming current date is 2024-02-02
    active: true,
  },
  {
    id: `calendar-${uuidv4()}`,
    sender: "Rabbit.I",
    content: "team all hands",
    status: "5:00 pm",
    type: EmailType.Calendar,
    date: "2024-02-02T17:00:00.000Z", // Assuming the same date for simplicity\
    active: true,
  },
  {
    id: `calendar-${uuidv4()}`,
    sender: "Northwestern.U",
    content: "thesis meeting",
    status: "tomorrow 7:00 am",
    type: EmailType.Calendar,
    date: "2024-02-03T07:00:00.000Z", // The next day
    active: true,
  },
  {
    id: `calendar-${uuidv4()}`,
    sender: "OpenTable",
    content: "dinner at the French Laundry",
    status: "in 2 days",
    type: EmailType.Calendar,
    date: "2024-02-04T15:00:00.000Z", // In 2 days from the assumed date
    active: true,
  },
  {
    id: `calendar-${uuidv4()}`,
    sender: "United.A",
    content: "flight to SF",
    status: "in 5 days",
    type: EmailType.Calendar,
    date: "2024-02-07T15:00:00.000Z", // In 5 days from the assumed date
    active: true,
  },
  {
    id: `calendar-${uuidv4()}`,
    sender: "AirBnb",
    content: "Trip at Yosemite",
    status: "in 2 weeks",
    type: EmailType.Calendar,
    date: "2024-02-16T15:00:00.000Z", // In 2 weeks from the assumed date
    active: true,
  },
];

export const trackingItems: TrackingEmail[] = [
  {
    id: `tracking-${uuidv4()}`,
    content: "mattress",
    status: "delivered 2 days ago",
    type: EmailType.Tracking,
    date: "2024-01-31T15:00:00.000Z", // 2 days ago from the assumed current date
    active: true,
  },
  {
    id: `tracking-${uuidv4()}`,
    content: "shampoo",
    status: "estimated delivery tomorrow",
    type: EmailType.Tracking,
    date: "2024-02-03T15:00:00.000Z", // The next day from the current date
    active: true,
  },
  {
    id: `tracking-${uuidv4()}`,
    content: "swiffer",
    status: "order placed",
    type: EmailType.Tracking,
    date: "2024-02-01T15:00:00.000Z", // Assuming order placed today
    active: true,
  },
  {
    id: `tracking-${uuidv4()}`,
    content: "toilet paper",
    status: "delivered 5 days ago",
    type: EmailType.Tracking,
    date: "2024-01-28T15:00:00.000Z", // 5 days ago from the current date
    active: true,
  },
  {
    id: `tracking-${uuidv4()}`,
    content: "coffee",
    status: "arriving in 2 days",
    type: EmailType.Tracking,
    date: "2024-02-01T15:00:00.000Z", // Assuming order placed today
    active: true,
  },
];
