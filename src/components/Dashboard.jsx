import { useContext } from 'react';
//css
import '../styles/Dashboard.css';

//context
import { EventContext } from '../context/EventContext.jsx';

// const data = [
//   {
//     date: '2025-06-09',
//     time: '10:00',
//     name: 'Event 1',
//     location: 'Location 1',
//     description: 'description.',
//   },
//   {
//     date: '2025-06-10',
//     time: '14:00',
//     name: 'Event 2',
//     location: 'Location 2',
//     description: 'description.',
//   },
//   {
//     date: '2025-06-11',
//     time: '09:30',
//     name: 'Event 3',
//     location: 'Location 3',
//     description: 'description.',
//   },
// ];

function Dashboard() {
  const { events } = useContext(EventContext);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <div className="table">
        <div className="table-row table-header">
          <div className="date">Date</div>
          <div className="time">Time</div>
          <div className="name">Name</div>
          <div className="location">Location</div>
          <div className="description">Description</div>
        </div>
        {events.map((row, id) => (
          // if id is even add class even or odd if its odd
          <div
            className={`table-row ${id % 2 === 0 ? ' even' : ' odd'}`}
            key={id}
          >
            <div className="date cell">{row.date}</div>
            <div className="time cell">{row.time}</div>
            <div className="name cell">{row.name}</div>
            <div className="location cell">{row.location}</div>
            <div className="description cell">{row.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
