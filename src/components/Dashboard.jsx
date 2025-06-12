import { useContext } from 'react';
//css
import '../styles/Dashboard.css';

//components
import DeleteEvent from './DeleteEvent.jsx';

//context
import { EventContext } from '../context/EventContext.jsx';

function Dashboard() {
  const { events } = useContext(EventContext);

  return (
    <div className="dashboard">
      <div className="dashboard-title">
        <h2>Dashboard</h2>
        <DeleteEvent />
      </div>
      <div className="table">
        <div className="table-row ">
          <div className="date">Date</div>
          <div className="time">Time</div>
          <div className="name">Name</div>
          <div className="location">Location</div>
          <div className="description">Description</div>
        </div>
        {events.map((row, key) => (
          // if id is even add class even or odd if its odd
          <div className="table-row" key={key}>
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
