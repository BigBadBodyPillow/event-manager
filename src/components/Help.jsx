import { Link } from 'react-router-dom';
//css
import '../styles/Help.css';

function Help() {
  return (
    <div className="help-container">
      <h2>Help</h2>
      <div className="help-sections">
        <h1>The Stars Dont Align?</h1>
        <section className="signup-section">
          <h3>Sign up</h3>
          {/* <iframe
            src="https://youtu.be/XoBGQ0WRXDg?si=aYyV5kvfRAproM3u"
          ></iframe> */}
          <iframe
            //height="315"
            src="https://www.youtube-nocookie.com/embed/KVdJyP4mjmQ?si=oDpzaIJev0H3RJXi"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <ul>
            <li>
              <p>
                Go to the <Link to="/">Home</Link> Page
              </p>
            </li>
            <li>
              <p>
                Enter your username into the Input with the title "Username".
              </p>
            </li>
            <li>
              <p>Enter your email into the Input with the title "Email".</p>
            </li>
            <li>
              <p>
                Enter your password into the Input with the title "Password".
              </p>
            </li>
            <li>
              <p>Click the "Sign Up" button.</p>
            </li>
          </ul>
          <hr />
        </section>
        <section className="login-section">
          <h3>Log In</h3>
          <iframe
            //height="315"
            src="https://www.youtube-nocookie.com/embed/rrn0TaAHCZ8?si=vvkifNFdp8Xd-9wS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <ul>
            <li>
              <p>
                Go to the <Link to="/">Home</Link> Page
              </p>
            </li>
            <li>
              <p>Click the link to "log in" at the bottom</p>
            </li>
            <li>
              <p>Enter your email into the Input with the title "Email".</p>
            </li>
            <li>
              <p>
                Enter your password into the Input with the title "Password".
              </p>
            </li>
            <li>
              <p>Click the "Log In" button.</p>
            </li>
          </ul>
          <hr />
        </section>
        <section className="add-event-section">
          <h3>Add Events</h3>
          <iframe
            //height="315"
            src="https://www.youtube-nocookie.com/embed/yb2bwjnQmkE?si=JUFiTHwBJLcsZn49"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <ul>
            <li>
              <p>
                Go to the <Link to="/addevent">Add Event</Link> Page
              </p>
            </li>
            <li>
              <p>
                Enter a name for your event in the input with the title "Name".
              </p>
            </li>
            <li>
              <p>
                Enter a description for your event in the input with the title
                "Description".
              </p>
            </li>
            <li>
              <p>
                Enter a date for your event in the input with the title "Date".
              </p>
            </li>
            <li>
              <p>
                Enter a time for your event in the input with the title "Time".
              </p>
            </li>
            <li>
              <p>
                Enter a Location for your event in the input with the title
                "Location".
              </p>
            </li>
            <li>
              <p>Click the "Add Event" button.</p>
            </li>
            <h4>General Info</h4>
            <p>Your events can only be saved if you are logged in!</p>
          </ul>
          <hr />
        </section>
        <section className="delete-event-section">
          <h3>Delete Events</h3>
          <iframe
            //height="315"
            src="https://www.youtube-nocookie.com/embed/3-aMSZy10es?si=REXRni_8JUFigVLx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <ul>
            <li>
              <p>
                Go to the <Link to="/dashboard">Dashboard</Link> Page.
              </p>
            </li>
            <li>
              <p>
                Click the drop-down menu in the top right with the text "Select
                Event".
              </p>
            </li>
            <li>
              <p>
                While the drop down menu is open, select the name of the event
                you wish to delete.
              </p>
            </li>
            <li>
              <p>Click the button with the text "Delete Event".</p>
            </li>
          </ul>
          <hr />
        </section>
        {/* i just took these tips from the first google search result */}
        <section className="tips-section">
          <h3>Tips on How to Organise Your Events</h3>
          <ol>
            <li>
              <p>Define Event Goals and Objectives:</p>
              <p>
                Clearly articulate the purpose of the event and what you hope to
                achieve, whether it's raising awareness, generating leads, or
                building relationships.
              </p>
            </li>
            <li>
              <p>Budgeting and Funding:</p>
              <p>
                Allocate a realistic budget, considering all costs involved, and
                explore potential funding sources like sponsorships.
              </p>
            </li>
            <li>
              <p>Timeline and Checklist:</p>
              <p>
                Create a detailed timeline with specific deadlines for each
                task, ensuring everything is on track and no details are missed.
              </p>
            </li>
            <li>
              <p>Venue and Date Selection:</p>
              <p>
                Choose a venue that aligns with your event's theme and target
                audience, and finalize the date early to secure availability.
              </p>
            </li>
            <li>
              <p>Team Organization:</p>
              <p>
                Delegate responsibilities to a core team and recruit volunteers
                as needed, ensuring everyone is aware of their roles and tasks.
              </p>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
export default Help;
