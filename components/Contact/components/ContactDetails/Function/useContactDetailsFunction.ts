import React from "react";

export const useContactDetailsFunction = () => {
  const [dubaiTime, setDubaiTime] = React.useState("");

  React.useEffect(() => {
    const update = () => {
      const now = new Date();

      // Format date (DD/MM/YYYY)
      const date = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Dubai",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(now);

      // Format time (12-hour)
      const time = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now);

      setDubaiTime(`${date} • ${time}`);
    };

    update(); // initial run
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);
  return { dubaiTime };
};
