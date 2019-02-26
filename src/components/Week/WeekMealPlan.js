import React from "react";

import { TableHead, TableRow, TableCell } from "@material-ui/core";

const WeekMealPlan = ({ meal }) => {
  //meal.name, meal.days
  return (
      <TableRow>
        <TableCell>{meal.name}</TableCell>
        {(meal.days || []).map(d => (
          <TableCell>
            
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default WeekMealPlan;
