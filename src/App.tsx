import React, { useState } from "react";
import logo from "./logo.svg";
import { Notification } from "./components/notify/Notification";
import { Notify } from "./types/notify";

function App() {
  const [notifications, setNotifications] = useState<Notify[]>([]);

  const createNotify = (item: Notify) => {
    setNotifications([...notifications, item]);
  };

  const onDelete = (id: number) => {
    setNotifications(notifications.filter((i) => i.id !== id));
  };

  const newNotify = (type: boolean) => {
    createNotify({
      text: "Notify",
      error: type,
      timeleft: 5,
      id: notifications.length,
    });
  };

  return (
    <div className="App">
      <button onClick={() => newNotify(false)}>Success</button>
      <button onClick={() => newNotify(true)}>Error</button>
      <Notification onDelete={onDelete} data={notifications} />
    </div>
  );
}

export default App;
