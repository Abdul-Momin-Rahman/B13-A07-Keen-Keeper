import React from 'react';

const UseCurrentDate = () => {

    const date = new Date().toLocaleDateString("en-US", {
        month: 'long',
        day: "numeric",
        year: "numeric"
    });

    return date
};

export default UseCurrentDate;