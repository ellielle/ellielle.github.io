"use client";

import { useState } from "react";

const Construction = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

  const dismissNotification = () => {
    setIsOpen(false);
  };

  const notificationVisible = isOpen ? "opacity-100" : "hidden";

  return (
    <div
      className={`${notificationVisible} card-container header z-10 transition-all absolute w-full top-0 left-0 md:w-auto md:top-auto md:left-auto md:fixed md:bottom-12 md:right-6 px-4 cursor-pointer`}
      onClick={dismissNotification}>
      <p>
        🚧Under construction🚧. Click to dismiss.
      </p>
    </div>
  );
};

export default Construction;
