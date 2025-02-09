import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
};

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description:
      "Link your Instagram account now to unlock powerful automation and streamline your workflow effortlessly!",
    icon: <InstagramDuoToneBlue />,
    strategy: "INSTAGRAM",
  },
  {
    title: "Connect Salesforce",
    description:
      "Connect your Salesforce account now to unlock powerful automation and streamline your sales and customer management effortlessly!",
    icon: <SalesForceDuoToneBlue />,
    strategy: "CRM",
  },
];
