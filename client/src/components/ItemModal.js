import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  ModalFooter
} from "reactstrap";
import { connect } from "react-redux";
import uuid from "uuid";
import PropTypes from 'prop-types';

// actions..
import { addItem } from "../redux/action/item";

const ItemModal = ({addItem}) => {
    
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  const toggle = () => setModal(!modal);

  const submit = e => {
    e.preventDefault();

    let new_item = {
      id: uuid(),
      name
    };

    console.log(new_item);

    addItem(new_item);

    setModal(false);
  };

  return (
    <div>
      <Button
        color="dark"
        onClick={() => toggle()}
        style={{ marginTop: "2rem" }}
      >
        Add Item
      </Button>

      <Modal
        isOpen={modal}
        toggle={toggle}
        style={{ backgroundColor: "yellow" }}
      >
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={submit}>
            <FormGroup>
              <Label for="item"> Add Item:</Label>
              <Input
                type="text"
                id="item"
                name="item"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormGroup>
            <Button type="submit" color="dark">
              Add Item
            </Button>{" "}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ItemModal.propTypes = {
  addItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // name from name_reducer
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
