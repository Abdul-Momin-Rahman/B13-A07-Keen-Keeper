import React, { useState } from 'react';
import { TimelineContext } from './TimelineContext';


const TimelineContextProvider = ({children}) => {

    const [timeline , SetTimeline] = useState([]);

    const data = {
        timeline,
        SetTimeline
    }
    return <TimelineContext value={data}>
        {children}
    </TimelineContext>
};

export default TimelineContextProvider;