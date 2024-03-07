import { v4 as uuidv4 } from "uuid";

export interface Event {
  id: string;
  date: string;
  title: string;
  bgColor?: string;
  textColor?: string;
}

const flightToTokyo = (date: string) => {
  return {
    id: uuidv4(),
    date: date,
    title: "Flight to Tokyo",
    bgColor: "bg-[#D4E5EF]",
    textColor: "text-[#2E4C8C]",
  };
};

const stayInMeguro = (date: string) => {
  return {
    id: uuidv4(),
    date: date,
    title: "Stay in Meguro",
    bgColor: "bg-pink-100",
    textColor: "text-pink-500",
  };
};

const ticketTo2121 = (date: string) => {
  return {
    id: uuidv4(),
    date: date,
    title: "Ticket to 21_21",
    bgColor: "bg-gray-200",
    textColor: "text-blue-300",
  };
};

const dinnerAtShin = (date: string) => {
  return {
    id: uuidv4(),
    date: date,
    title: "Dinner at Udon Shin",
    bgColor: "bg-red-400",
    textColor: "text-gray-350",
  };
};

const meetCarlHauser = (date: string) => {
  return {
    id: uuidv4(),
    date: date,
    title: "Meet Carlhauser",
    bgColor: "bg-blue-500",
    textColor: "text-gray-350",
  };
};

export const japan: Record<string, Event[]> = {
  "2024-04-03T00:00:00.000Z": [flightToTokyo("2024-04-12T00:00:00.000Z")],
  "2024-04-04T00:00:00.000Z": [
    flightToTokyo("2024-04-12T00:00:00.000Z"),
    stayInMeguro("2024-04-12T00:00:00.000Z"),
    ticketTo2121("2024-04-12T00:00:00.000Z"),
    dinnerAtShin("2024-04-12T00:00:00.000Z"),
  ],
  "2024-04-05T00:00:00.000Z": [
    stayInMeguro("2024-04-12T00:00:00.000Z"),
    meetCarlHauser("2024-04-12T00:00:00.000Z"),
  ],
  "2024-04-06T00:00:00.000Z": [stayInMeguro("2024-04-12T00:00:00.000Z")],
  "2024-04-07T00:00:00.000Z": [stayInMeguro("2024-04-12T00:00:00.000Z")],
  "2024-04-08T00:00:00.000Z": [stayInMeguro("2024-04-12T00:00:00.000Z")],
  "2024-04-09T00:00:00.000Z": [stayInMeguro("2024-04-12T00:00:00.000Z")],
  "2024-04-10T00:00:00.000Z": [stayInMeguro("2024-04-12T00:00:00.000Z")],
};
