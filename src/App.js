import React from "react";

const App = () => {
  return (
    <div className="wrapper">
      <h1>To do list</h1>
      <p>create a task</p>
      <div className="main">
        <div className="form-container ">
          <form autoComplete="off" className="form-group ">
            <label for="task">Task</label>
            <br />
            <input
              placeholder="enter task name here..."
              type="text "
              className="form-controll m-1"
              id="task"
              required
            />
            <br />
            <label className="pt-3 ">Pick one or more titles</label>
            <div className="m-2">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="private"
                />
                <label className="form-check-label" for="private">
                  private
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="work" />
                <label className="form-check-label" for="work">
                  work
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="house"
                />
                <label className="mb-2 form-check-label" for="house">
                  house
                </label>
              </div>
            </div>

            <label className="pb-2">... and/or create your own title</label>
            <br />
            <input
              placeholder="enter title name here... "
              type="text "
              className="form-controll m-1  "
            />
            <br />
            <button className="btn btn-outline-secondary mt-2   " type="submit">
              create task
            </button>
          </form>
        </div>
        <div className="view-container">view</div>
      </div>
    </div>
  );
};

export default App;
