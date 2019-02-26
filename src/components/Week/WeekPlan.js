import React from "react";

import Table from "@material-ui/core/Table";
import WeekPlanHeader from "./WeekPlanHeader";

const WeekPlan = ({ days, meals }) => {
  return (
    <Table>
      <WeekPlanHeader days={days} />
    </Table>
  );
};

export default WeekPlan;