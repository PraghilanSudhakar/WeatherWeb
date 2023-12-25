import React from "react";

const ConvertClock = ({ localTimestamp }) => {
  const time = new Date(localTimestamp);

  return (
    <div>
      <strong>
        {time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </strong>
    </div>
  );
};

export default ConvertClock;
