import { createContext, useContext, useEffect, useState } from 'react';
import { LoginContext } from './LoginContext.jsx';

export const EventContext = createContext();

const defaultEvents = [
  {
    date: '2025-06-09',
    time: '10:00',
    name: 'Event 1',
    location: 'Location 1',
    description: 'description 1.',
  },
  {
    date: '2025-06-10',
    time: '14:00',
    name: 'Event 2',
    location: 'Location 2',
    description: 'description 2.',
  },
  {
    date: '2025-06-11',
    time: '09:30',
    name: 'Event 3',
    location: 'Location 3',
    // description: 'description 3.',
    description:
      'description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.description 3.',
  },
];

export function EventProvider({ children }) {
  const { isLoggedIn, username } = useContext(LoginContext);
  const [events, setEvents] = useState(defaultEvents);

  // get events from localstorage of logged in user
  useEffect(() => {
    if (isLoggedIn && username) {
      //user spesific events
      const stored = localStorage.getItem(`events_${username}`);

      if (stored) {
        //clear
        setEvents([]);
        // add from local storage
        setEvents(JSON.parse(stored));
      } else {
        //clear
        setEvents([]);
      }

      // stored ? setEvents(JSON.parse(stored)) : setEvents([]);
    } else {
      // setEvents([]);
      setEvents(defaultEvents);
    }
  }, [isLoggedIn, username]);

  //save to local storage when logged in
  useEffect(() => {
    if (isLoggedIn && username) {
      localStorage.setItem(`events_${username}`, JSON.stringify(events));
    }
  }, [events, isLoggedIn, username]);

  // add to end of the default events
  function addEvent(newEvent) {
    setEvents((previousEvents) => [...previousEvents, newEvent]);
  }

  // delete
  function deleteEvent(selectedEvent) {
    // keep events that are != to selectedEvent
    setEvents((previousEvents) =>
      previousEvents.filter((_, id) => id != selectedEvent)
    );
  }

  return (
    <EventContext.Provider value={{ events, addEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
}
