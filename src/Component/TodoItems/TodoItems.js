import React from "react";
import "./TodoItems.css";
//مجرد عرض الداتا مش هحتاج state
// ف هعملها stateless
//___ give me my items from props :D
const TodoItems = props => {
  const { items, deleteItem } = props;
  //loop
  const ListItem = items.map(item => {
    return (
      <div key={item.id}>
        <span className="name"> {item.name}</span>
        <span className="age"> {item.age}</span>
        <span className="action icon" onClick={() => deleteItem(item.id)}>
          {" "}
          &times;
        </span>
      </div>
    );
    //the end of map function
  });
  // calling for TodoItemsFunc
  return (
    <div className="ListItems">
      <div>
        <span className="name title">Name</span>
        <span className="age title">Age</span>
        <span className="id title">Action</span>
      </div>
      {ListItem}
    </div>
  );
};

// to could uue it by tag >>> should make export

export default TodoItems;
