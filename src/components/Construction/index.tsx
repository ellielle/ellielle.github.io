"use client";

import { useState } from "react";

export default function Construction() {
  const [isOpen, setIsOpen] = useState(true);

  const dismissNotification = () => {
    setIsOpen(false);
  };

  const notificationVisible = isOpen ? "opacity-100" : "hidden";

  return (
    <div
      className={`${notificationVisible} card-container header z-10 transition-all fixed w-full top-0 left-0 md:w-auto md:top-auto md:left-auto md:bottom-12 md:right-6 px-4 cursor-pointer`}
      onClick={dismissNotification}>
      <p>🚧Under construction🚧. Click to dismiss.</p>
    </div>
  );
}
