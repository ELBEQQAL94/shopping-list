import React, { useState } from "react";
import { ListGroup, Container, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

const ShoppingList = () => {
  // hard code data
  const data = [
    {
      id: uuid(),
      name: "Milk"
    },
    {
      id: uuid(),
      name: "Steak"
    },
    {
      id: uuid(),
      name: "Food"
    },
    {
      id: uuid(),
      name: "Eggs"
    },
    {
      id: uuid(),
      name: "Meal"
    },
    {
      id: uuid(),
      name: "Bread"
    }
  ];

  const [items, setItems] = useState(data);

  // add item
  const addItem = () => {
    const name = prompt("Enter Item");

    if (name) {

      setItems([
        ...items,
        {
          id: uuid(),
          name
        }
      ]);
    }
  };

  // delete item
  const deleteItem = id => {
    let newItems = items.filter(item => item.id !== id);

    setItems([...newItems]);
  };

  console.log(items);

  return (
    <Container>
      <Button
        color="dark"
        style={{ marginTop: "2rem" }}
        onClick={() => addItem()}
      >
        Add Item
      </Button>

      <ListGroup style={{marginTop:'2rem'}}>
        <TransitionGroup className="shopping_list_transition_group">
          {items.map(({ id, name }) => (
            <CSSTransition key={id} classNames="fade" timeout={500}>
              <ListGroupItem>
                <Button
                  className="remove_btn"
                  color="danger"
                  size="sm"
                  onClick={() => deleteItem(id)}
                >
                  &times;
                </Button>
                {' '}
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
