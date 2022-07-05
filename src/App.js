import React, { useEffect, useState } from "react";
import View from "./View";

// getting the values from local storage in the browser
// if there is data in local storage, return data in JSON format
// else return an empty array
const getDatafromLocalStorage = () => {
  const data = localStorage.getItem("todos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const App = () => {
  // creating an array to store in the object state, initially the getDatafromLocalStorage variable is passed
  // main array of object state --> title and category
  const [todos, setTodos] = useState(getDatafromLocalStorage());

  //input field states and setters
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  //when pressing submit button, an object will be stored in todo useState

  // creating an eventhandler to handle submit
  // the idea is to push the todo object into useStae todo
  const handleTodoSubmit = (e) => {
    // avoiding reload on submit
    e.preventDefault();
    // creating an object
    // This object will be pushed into useState with setTodos
    let todo = {
      title,
      category,
    };
    // using spread operator --> creates an empty array initially with todos
    // --> then on submit, all the new values will be added to todo
    setTodos([...todos, todo]);
    // resetting input fields after submit
    setTitle("");
    setCategory("");
  };

  // saving data to local storage
  // providing [todos] as a dependancy parameter
  // whenever a new todo is added to the array --> this useEffect is fired and the new todo is stored in todos array
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
            onSubmit={handleTodoSubmit}
          >
            <label htmlFor="title">Title</label>
            <br />
            <input
              placeholder="enter title..."
              type="text "
              className="form-controll m-1"
              id="title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <br />
            {/* PICK CATEGORY */}
            <label className="pt-3 ">Pick one or more categories</label>
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

            {/* CREATE CATEGORY */}
            <label className="pb-2">... and/or create your own category</label>
            <br />
            <input
              placeholder="enter category... "
              type="text "
              className="form-controll m-1  "
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
            <br />
            <button className="btn btn-outline-secondary mt-2   " type="submit">
              create todo
            </button>
          </form>
        </div>

        {/* 
        Adding Logic to handle 0 to do items in the list:
        If the length of the todos array is less than 1, then the div with "nothing to do today..." is rendered.
        */}
        {/* When todos array is greater than 0, return  */}
        <div className="view-container">
          {todos.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                     <View todos={todos} />
                  </tbody>
                </table>
              </div>
            </>
          )}
          {todos.length < 1 && (
            <div>
              <p>Nothing to do today... take some time off</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
