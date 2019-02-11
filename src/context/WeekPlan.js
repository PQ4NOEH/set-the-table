import React from 'react';


const WeekPlan = ({match})=>{
    const {year, weekNumber} = match.params;
    return <div>
        This is the Plan for the year: {year} and week: {weekNumber}
    </div>
}

export default  WeekPlan;