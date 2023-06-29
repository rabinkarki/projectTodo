import React from "react";
import "../styles/Home.scss";
import img from "../assets/mountain.png";

const Home = () => {
  return (
    <>
      <div className="container-1">
        <section className="section">
          <main className="content">
            <div className="heading">
              <h1>TODO</h1>
            </div>
          </main>
          <div className="content-2">
            <div className="input-1">
              <label>
                <input type="radio" name="create" value="create" />
                Create a new todo
              </label>
            </div>
            <section>
              <div className="input-2">
                <label>
                  <input type="radio" name="jogging" value="jogging" />
                  Jog around the park
                </label>
              </div>
              <div className="input-2">
                <label>
                  <input type="radio" name="jogging" value="jogging" />
                  10 minutes meditation
                </label>
              </div>
              <div className="input-2">
                <label>
                  <input type="radio" name="jogging" value="jogging" />
                  Read for 1 hour
                </label>
              </div>
              <div className="input-2">
                <label>
                  <input type="radio" name="jogging" value="jogging" />
                  Pick up grocery
                </label>
              </div>

              <div className="input-2">
                <label>
                  <input name="jogging" value="jogging" />
                  Complete Todo Frontend App Mentor
                </label>
              </div>
              <div className="input-2">
                <label>
                  <input type="radio" name="jogging" value="jogging" />
                  Female
                </label>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
