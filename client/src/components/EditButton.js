import React, { useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// actions..
import { getItems, editItem } from "../redux/action/item";

const EditButton = ({ id, item, getItems, editItem }) => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");

  useEffect(() => getItems(), []);

  const showEditInput = () => {
    setShow(!show);
    let item_edit = item.items.filter(item => item._id === id);
    setName(item_edit[0].name);
  };

  const submit = e => {
    e.preventDefault();

    let new_item = {
      name
    };

    editItem(id, new_item);

  };

  return (
    <>
      <Button onClick={() => showEditInput()}>
        <FaPencilAlt />
      </Button>
      {show ? (
        <Form onSubmit={submit}>
          <FormGroup>
            <Input
              type="text"
              name="item"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Button type="submit" color="dark">
              Edit Item
            </Button>{" "}
          </FormGroup>
        </Form>
      ) : (
        false
      )}
    </>
  );
};

EditButton.propTypes = {
  getItems: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // name from name_reducer
  item: state.item
});

export default connect(
  mapStateToProps,
  { editItem, getItems }
)(EditButton);
