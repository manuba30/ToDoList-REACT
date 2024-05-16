import React, { useState, useEffect } from "react";

/**
 * DigitalClock Component
 * Displays a live digital clock, updating every second.
 * Shows the current time in a 12-hour format with AM/PM notation.
 */
function DigitalClock() {

    // State to hold the current time
    const [time, setTime] = useState(new Date());

    // useEffect hook to set up the timer
    useEffect(() => {
        // Set up an interval to update the time every second
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    // Function to format the time into a 12-hour clock format with AM/PM notation
    function formatTime() {
        let hours = time.getHours(); // Get current hours
        const minutes = time.getMinutes(); // Get current minutes
        const seconds = time.getSeconds(); // Get current seconds
        const meridien = hours >= 12 ? "PM" : "AM"; // Determine AM/PM

        // Convert from 24-hour format to 12-hour format
        hours = hours % 12 || 12;

        // Return the formatted time string
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridien}`;
    }

    // Function to pad single-digit numbers with a leading zero
    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    // Render the clock
    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;
