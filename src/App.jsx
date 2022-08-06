import Navbar from "./Components/Navbar";
import Tabs from "./Components/Tabs";
import { useState, useEffect } from "react";
import "./index.css"
import CardContainer from "./Components/CardContainer";

function App() {
  const initEvent = [
    {
      title: 'Add a new Event',
      ['To do']: [],
      ['In progress']: [],
      ['Completed']: [],
    },
  ];

  const [events, setEvents] = useState(() => {
    return localStorage.getItem('events')
      ? JSON.parse(localStorage.getItem('events'))
      : initEvent;
  });

  const [currentEvent, setCurrentEvent] = useState(events[0]);

  // Set localStorage
  useEffect(() => {
    if (!events.length) {
      localStorage.setItem('events', JSON.stringify(initEvent));
      setEvents(JSON.parse(localStorage.getItem('events')));
    } else {
      localStorage.setItem('events', JSON.stringify(events));
    }
  }, [events]);


  return (
    <div>
      <Navbar />
      <Tabs />
      <CardContainer
        events={events}
        setEvents={setEvents}
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
      />
    </div>
  );
}

export default App;
