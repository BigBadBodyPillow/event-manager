import { useContext } from 'react';
import { useFormik } from 'formik';

//css
import '../styles/AddEvent.css';

//context
import { EventContext } from '../context/EventContext.jsx';

function AddEvent() {
  const { addEvent } = useContext(EventContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      date: '',
      time: '',
      location: '',
    },

    onSubmit: (values, { resetForm }) => {
      addEvent(values);
      resetForm();
    },
  });

  return (
    <div className="addEvent">
      <h2>Add Event</h2>

      <div className="addevent-container">
        <form onSubmit={formik.handleSubmit}>
          {/* name */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          {/* description */}
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              type="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </div>
          {/* date */}
          <div>
            <label htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.date}
            />
          </div>
          {/* time */}
          <div>
            <label htmlFor="time">Time (24h00)</label>
            <input
              id="time"
              name="time"
              type="time"
              onChange={formik.handleChange}
              value={formik.values.time}
            />
          </div>
          {/* location */}
          <div>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              type="location"
              onChange={formik.handleChange}
              value={formik.values.location}
            />
          </div>

          <button type="submit">Add Event</button>
        </form>
      </div>
    </div>
  );
}
export default AddEvent;
