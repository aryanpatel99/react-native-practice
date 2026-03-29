export type TaskStatus = "Done" | "In Progress" | "To-do";

export type TaskIcon = {
  name: string;
  backgroundColor: string;
};

export type Task = {
  id: string;
  category: string;
  title: string;
  description: string;
  time: string;
  status: TaskStatus;
  icon: TaskIcon;
};

export const TASKS: Task[] = [
  {
    id: "1",
    category: "Grocery shopping app design",
    title: "Market Research",
    description:
      "Analyze competitor grocery apps and gather user feedback on preferred features and UI elements.",
    time: "10:00 AM",
    status: "Done",
    icon: { name: "grid", backgroundColor: "#FF6B8A" },
  },
  {
    id: "2",
    category: "Grocery shopping app design",
    title: "Competitive Analysis",
    description:
      "Review top 3 grocery delivery apps to identify common patterns, strengths, and areas for improvement.",
    time: "12:00 PM",
    status: "In Progress",
    icon: { name: "grid", backgroundColor: "#FF6B8A" },
  },
  {
    id: "3",
    category: "Uber Eats redesign challenge",
    title: "Create Low-fidelity Wireframe",
    description:
      "Sketch out the basic layout of the home screen and order tracking screen on paper or digital whiteboard.",
    time: "07:00 PM",
    status: "To-do",
    icon: { name: "arrow-down-circle", backgroundColor: "#4ADE80" },
  },
  {
    id: "4",
    category: "About design sprint",
    title: "How to pitch a Design Sprint",
    description:
      "Prepare a presentation outlining the benefits, timeline, and required resources for conducting a 5-day design sprint.",
    time: "09:00 PM",
    status: "To-do",
    icon: { name: "bookmark", backgroundColor: "#FBBF24" },
  },
  {
    id: "5",
    category: "Food Delivery App",
    title: "High-fidelity Prototyping",
    description:
      "Add colors, typography, and interactive transitions to the checkout flow wireframes in Figma.",
    time: "09:00 AM",
    status: "In Progress",
    icon: { name: "code", backgroundColor: "#A78BFA" },
  },
  {
    id: "6",
    category: "Fintech Dashboard",
    title: "User Testing Interviews",
    description:
      "Conduct 30-minute interviews with 5 potential users to validate the new expense tracking dashboard.",
    time: "01:30 PM",
    status: "To-do",
    icon: { name: "people", backgroundColor: "#38BDF8" },
  },
  {
    id: "7",
    category: "Design System",
    title: "Create Component Library",
    description:
      "Build reusable button, input, and card components with proper variants and properties.",
    time: "04:00 PM",
    status: "Done",
    icon: { name: "layers", backgroundColor: "#F472B6" },
  },
  {
    id: "8",
    category: "Portfolio Website",
    title: "Write Case Studies",
    description:
      "Draft the problem statement, process, and outcome sections for the recent e-commerce project.",
    time: "08:00 PM",
    status: "To-do",
    icon: { name: "clipboard", backgroundColor: "#9CA3AF" },
  },
];

export const FILTER_OPTIONS = [
  "All",
  "To-do",
  "In Progress",
  "Completed",
] as const;

export type FilterOptions = (typeof FILTER_OPTIONS)[number];
