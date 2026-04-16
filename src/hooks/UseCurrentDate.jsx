import React from 'react';

const UseCurrentDate = () => {

    const date = new Date().toLocaleDateString("en-US", {
        month: 'long',
        day: "numeric",
        year: "numeric",
        hour : "2-digit",
        minute : "2-digit",
        hour12 : true
    });

    return date
};

export default UseCurrentDate;