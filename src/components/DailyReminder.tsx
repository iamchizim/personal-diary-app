import React, { useEffect, useState } from "react";

const DailyReminder = () => {
  const [hasRemindedToday, setHasRemindedToday] = useState(false);

  const getDaily7AM = () => {
    const now = new Date();
    const reminderTime = new Date();
    reminderTime.setHours(7, 0, 0, 0); // Set to 7 AM
    return reminderTime;
  };

  useEffect(() => {
    const checkReminder = () => {
      const now = new Date();
      const reminderTime = getDaily7AM();

      if (
        now.getHours() === reminderTime.getHours() &&
        now.getMinutes() === reminderTime.getMinutes() &&
        !hasRemindedToday
      ) {
        alert("Fill in your diary");
        setHasRemindedToday(true);
      }

      if (now.getHours() === 0 && now.getMinutes() === 0) {
        setHasRemindedToday(false);
      }
    };

    const interval = setInterval(checkReminder, 60 * 1000); 

    return () => clearInterval(interval); 
  }, [hasRemindedToday]);

  return null; 
};

export default DailyReminder;
