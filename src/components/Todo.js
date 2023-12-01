function Todo(props) {
  // props is a special variable that React will pass to our function
  // function always start with capital letter(to differentiate from html tags)
  function deleteHandler() {
    console.log("Clicked!");
    console.log(props.text);
  }

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
