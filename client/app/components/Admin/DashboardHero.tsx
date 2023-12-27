import React, { FC, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import { ThemeSwitcher } from "@/app/utils/ThemeSwitcher";
import { IoMdNotifications } from "react-icons/io";

type Props = {};

const DashboardHero: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <DashboardHeader />
    </div>
  );
};

export default DashboardHero;
