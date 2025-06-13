import { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext.jsx';

export default function DeleteEvent() {
  const { events, deleteEvent } = useContext(EventContext);
  const [selectedIndex, setSelectedIndex] = useState('');

  const handleDelete = () => {
    if (selectedIndex !== '') {
      deleteEvent(Number(selectedIndex));
      setSelectedIndex('');
    }
  };

  return (
    <div className="delete-event">
      <select
        value={selectedIndex}
        onChange={(e) => setSelectedIndex(e.target.value)}
      >
        <option value="">Select event</option>
        {events.map((event, key) => (
          <option key={key} value={key}>
            {event.name}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Remove</button>
    </div>
  );
}
