import React, { useEffect, useState } from "react";

const App = () => {
  // createing an array to store in the single tasks with optional titles
  // initializing the useState hook with an empty array
  // when creating a task, an object will be stored in the previously empty array
  // input field states

  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [title, setTitle] = useState("");

  // form submit event handler
  // adding e.preventDefault() function to avoid default behaviour of submit
  // page is not going to reload when after clicking "create task" button

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    // creating an object to store task data
    let task = {
      // if name of key and value is the exact same, ES6 allows us to write just one thing instead of key value pairs
      taskName,
      title,
    };
    // pushing the object to the tasks array
    setTaskName([...tasks, task]);
    // clearing the input field after submitting
    setTaskName("");
    setTitle("");
  };

  // using useEffect hook to save data to local storage
  // passing an empty array as a second argument to useEffect hook
  // this will run the function every time the component is rendered ,in other words --> every time a task is created on submit
  // becuase local storage is always a string, we need to convert the object to a string with JSON.stringify

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="wrapper">
      <h1>To do list</h1>
      <p>create a task</p>
      <div className="main">
        <div className="form-container ">
          {/* TASKNAME */}
          <form
            autoComplete="off"
            className="form-group "
            onSubmit={handleTaskSubmit}
          >
            <label for="task">Task</label>
            <br />
            <input
              placeholder="enter task name here..."
              type="text "
              className="form-controll m-1"
              id="task"
              required
              onChange={(e) => setTaskName(e.target.value)}
              value={taskName}
            />
            <br />
            {/* PICK TITLE */}
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

            {/* CREATE TITLE */}
            <label className="pb-2">... and/or create your own title</label>
            <br />
            <input
              placeholder="enter title name here... "
              type="text "
              className="form-controll m-1  "
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
