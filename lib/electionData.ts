export type ElectionPhase = {
  id: number;
  title: string;
  description: string;
  duration: string;
};

export const electionTimeline: ElectionPhase[] = [
  {
    id: 1,
    title: "Election Announcement",
    description: "The official declaration of the upcoming election, including dates and important deadlines.",
    duration: "1 day",
  },
  {
    id: 2,
    title: "Voter Registration",
    description: "Eligible citizens register to vote and update their details to ensure they can participate.",
    duration: "1-3 months",
  },
  {
    id: 3,
    title: "Candidate Nomination",
    description: "Political parties and independent candidates submit their nominations to run for office.",
    duration: "2-4 weeks",
  },
  {
    id: 4,
    title: "Campaign Period",
    description: "Candidates actively campaign, share their platforms, and engage with the public to secure votes.",
    duration: "1-3 months",
  },
  {
    id: 5,
    title: "Voting Day",
    description: "Registered voters cast their ballots at designated polling stations.",
    duration: "1 day",
  },
  {
    id: 6,
    title: "Vote Counting",
    description: "Votes are collected and counted under strict supervision to ensure accuracy and fairness.",
    duration: "1-3 days",
  },
  {
    id: 7,
    title: "Result & Government Formation",
    description: "Official results are announced, and the winning candidates begin the process of forming the government.",
    duration: "1-4 weeks",
  },
];
