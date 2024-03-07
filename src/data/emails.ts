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

export const autocompleteSuggestions = [
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "Parchment, me",
    title: "You’ve Received a Document: TETFJYVRO",
    searchText: [...deconstruct("tri")],
    date: "2024-01-31T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "AT&T Online Services, me",
    title: "Time to Return Your AT&T Equipment",
    searchText: ["t"],
    date: "2024-02-10T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "AT&T Online Services, me",
    title: "Your Request to Move Your AT&T Service",
    searchText: ["t"],
    date: "2024-02-11T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "Rabab, Medina, Lindsey, me",
    title: "ShaoBo ZHANG - Questionnaires for NIV",
    searchText: [...deconstruct("trip "), ...deconstruct("all my bene", "all")],
    date: "2024-01-30T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "Parchment, me",
    title: "Document has been received",
    searchText: [...deconstruct("trip ", "tr")],
    date: "2024-01-30T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "United Airlines, me",
    title: "Your trip confirmation (LAX - ORD)",
    searchText: [
      ...deconstruct("trip confirmation", "trip"),
      "a",
      "all",
      "all my",
    ],
    date: "2024-01-30T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },

  {
    id: `autocomplete-${uuidv4()}`,
    sender: "American Airlines, me",
    title: "Prepare for your upcoming trip to Chicago",
    searchText: ["a"],
    date: "2024-03-04T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "qbe-rentersus-box@us.qbe.com, me",
    title: "Information about your new QBE Renters Insurance policy",
    searchText: ["a"],
    date: "2024-01-31T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "The Park Evanston Property, me",
    title: "Park Evanston #913 Lease Expiring 4/18/2024 **REPLY NEEDED**",
    searchText: ["a"],
    date: "2024-02-10T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "Anicka Yi, Remina Greenfield, Jenifer Cohen, me",
    title: "PROJECT INQUIRY - AnickaYi Studio - Generative Animation",
    searchText: ["a", "al"],
    date: "2024-02-24T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "Kevin Zhang, Alex Evans, Alen, me",
    title: "Curio Classified Intelligence Report - Edition 3",
    searchText: ["al"],
    date: "2023-05-18T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "Kevin Zhang, Alex Evans, Alen, me",
    title: "Curio Round Annoucement Tuesday",
    searchText: ["al"],
    date: "2023-02-20T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "Sarah Chieng, me",
    title: "Metaphor Next Steps",
    searchText: ["al", "all m"],
    date: "2023-10-24T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "Kevin Zhang, Alex Evans, Alen, me",
    title: "Curio Classified Intelligence Report - Edition 1",
    searchText: ["al"],
    date: "2023-02-15T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "rentersmail@assurant.com, me",
    title: "Your Liabiliy Insurance Policy",
    searchText: ["all", "all ", "all my"],
    date: "2023-03-14T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "support@residentshield.com, me",
    title:
      "ResidentShield Renteres Insurance Policy Confirmaion - Policy Holder:...",
    searchText: ["all", "all "],
    date: "2024-01-30T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "One Santa Fe, me",
    title: "Welcome Home!",
    searchText: ["all", "all ", "all my"],
    date: "2024-01-30T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "Lilith Yu, me",
    title: "端午节快乐!",
    searchText: ["all m", "all "],
    date: "2023-06-26T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "Wesley Block, Geoffrery Campbell, Lucas Igel, me",
    title: "Possible Intros - Geoff Campbell",
    searchText: ["all m", "all my b", "all my "],
    date: "2023-09-04T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "Wesley Block, Geoffrery Campbell, Lucas Igel, me",
    title: "Introduction to Peter Stevenson",
    searchText: ["all m", "all my b", "all my "],
    date: "2023-11-21T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "services@virtual.dmvonline.ca.gov",
    title: "DMV: Congratulations!",
    searchText: ["all my", "all my ", "all my b"],
    date: "2024-01-22T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "Carol Koh Evans via Docusign, me",
    title:
      "Completed: Complete with DocuSign: Offer Letter Shaobo Zhang REVISED",
    searchText: [...deconstruct("all my bene", "all my ")],
    date: "2024-01-18T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "me, Kevin, Michael",
    title:
      "New i20.pdf Department of Homeland Security I-20, Certificate of Eligibility...",
    searchText: [...deconstruct("all my bene", "all my be")],
    date: "2024-01-27T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "me, alberly6986@gmail.com",
    title:
      'VIRSF Board - center panel.pdf "Page 1" Megamind An Intelligent Cycling...',
    searchText: [...deconstruct("all my ben", "all my be")],
    date: "2017-04-08T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "George Matus via DocuSign, me",
    title:
      "Completed: Please DocuSign: Curiosity Research, Inc. - Signature Packet...",
    searchText: [...deconstruct("all my bene", "all my be")],
    date: "2022-09-22T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
  {
    id: `autocomplete-${uuidv4()}`,
    sender: "Delta Air Lines, me",
    title: "Welcome To the SkyMiles Program: Your Next Great Adventure",
    searchText: ["all my bene"],
    date: "2019-09-24T15:00:00.000Z",
    type: EmailType.Summary,
    seen: false,
    active: true,
  },
];

function deconstruct(str: string, minStr?: string): string[] {
  const result: string[] = [];

  for (let i = str.length; i >= 1; i--) {
    result.push(str.substring(0, i));

    if (str.substring(0, i) === minStr) {
      break;
    }
  }

  return result;
}
