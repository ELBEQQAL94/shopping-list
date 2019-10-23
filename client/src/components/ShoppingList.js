import React, { useEffect } from "react";
import { ListGroup, Container, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// actions..
import { getItems, deleteItem } from "../redux/action/item";

// Modal
import AddItemModal from "./AddItemModal";
import EditButton from "./EditButton";

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
      <AddItemModal />
      <ListGroup style={{ marginTop: "2rem" }}>
        <TransitionGroup className="shopping_list_transition_group">
          {items
            ? items.map(({ _id, name }) => (
                <CSSTransition key={_id} classNames="fade" timeout={500}>
                  <ListGroupItem>
                    <Button
                      className="remove_btn"
                      color="danger"
                      size="sm"
                      onClick={() => OndeleteClick(_id)}
                    >
                      &times;
                    </Button>{" "}
                    <EditButton id={_id}/> {" "}
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
