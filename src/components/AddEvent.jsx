import { useFormik } from 'formik';
//css
import '../styles/AddEvent.css';

function AddEvent() {
  return (
    <>
      <h2>Add Event</h2>

      <div className="addevent-container">
        <form>
          {/* name */}
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="name" />
          </div>
          {/* description */}
          <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" type="description" />
          </div>
          {/* date */}
          <div>
            <label htmlFor="date">Date</label>
            <input id="date" name="date" type="date" />
          </div>
          {/* time */}
          <div>
            <label htmlFor="time">Time (24h00)</label>
            <input id="time" name="time" type="time" />
          </div>
          {/* location */}
          <div>
            <label htmlFor="location">Location</label>
            <input id="location" name="location" type="location" />
          </div>

          <button type="submit">Add Event</button>
        </form>
      </div>
    </>
  );
}
export default AddEvent;
