import dayjs from "dayjs";

const currentDate = new Date();
const tomorrow = new Date(currentDate);
tomorrow.setDate(currentDate.getDate() + 5);

export const mockedTasks = [
  {
    id: 1,
    priority: "high",
    text: "Lorem ipsum 1",
    status: "active",
    dueDate: dayjs(Date.now()).format(),
  },
  {
    id: 2,
    priority: "high",
    text: "Lorem ipsum 2",
    status: "done",
    dueDate: dayjs(tomorrow.setDate(currentDate.getDate() + 2)).format(),
  },
  {
    id: 3,
    priority: "medium",
    text: "Lorem ipsum 3",
    status: "active",
    dueDate: dayjs(tomorrow.setDate(currentDate.getDate() + 2)).format(),
  },
  {
    id: 4,
    priority: "medium",
    text: "Lorem ipsum 4",
    status: "deleted",
    dueDate: dayjs(tomorrow.setDate(currentDate.getDate() + 5)).format(),
  },
  {
    id: 5,
    priority: "low",
    text: "Lorem ipsum 5",
    status: "active",
    dueDate: dayjs(tomorrow.setDate(currentDate.getDate() + 1)).format(),
  },
  {
    id: 6,
    priority: "low",
    text: "Lorem ipsum 6",
    status: "done",
    dueDate: dayjs(tomorrow.setDate(currentDate.getDate() + 7)).format(),
  },
  {
    id: 7,
    priority: "low",
    text: "Lorem ipsum 7",
    status: "active",
    dueDate: dayjs(tomorrow.setDate(currentDate.getDate() + 3)).format(),
  },
  {
    id: 8,
    priority: "medium",
    text: "Lorem ipsum 8",
    status: "active",
    dueDate: dayjs(tomorrow.setDate(currentDate.getDate() + 10)).format(),
  },
  {
    id: 9,
    priority: "low",
    text: "Lorem ipsum 9",
    status: "active",
    dueDate: dayjs(tomorrow.setDate(currentDate.getDate() + 9)).format(),
  },
  {
    id: 10,
    priority: "high",
    text: "Lorem ipsum 10",
    status: "active",
    dueDate: dayjs(tomorrow.setDate(currentDate.getDate() + 7)).format(),
  },
];
