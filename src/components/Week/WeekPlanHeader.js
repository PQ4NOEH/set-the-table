import React from "react";

import { TableHead, TableRow, TableCell } from "@material-ui/core";

const WeekPlanHeader = ({ days }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {(days || []).map(d => (
          <TableCell>{d}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default WeekPlanHeader;
