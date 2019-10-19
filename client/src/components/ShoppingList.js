import React, { useState, useEffect } from "react";
import { ListGroup, Container, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// actions..
import { getItems, deleteItem } from "../redux/action/item";

// Modal
import ItemModal from "./ItemModal";

const ShoppingList = ({ getItems, deleteItem, item }) => {
  
  let items = item.items;

  useEffect(() => getItems(), []);

  // add item

  // delete item
  const OndeleteClick = id => {
    deleteItem(id);
  };

  return (
    <Container>
      <ItemModal />
      <ListGroup style={{ marginTop: "2rem" }}>
        <TransitionGroup className="shopping_list_transition_group">
          {items
            ? items.map(({ id, name }) => (
                <CSSTransition key={id} classNames="fade" timeout={500}>
                  <ListGroupItem>
                    <Button
                      className="remove_btn"
                      color="danger"
                      size="sm"
                      onClick={() => OndeleteClick(id)}
                    >
                      &times;
                    </Button>{" "}
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              ))
            : "No Items"}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // name from name_reducer
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
