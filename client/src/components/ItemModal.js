// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import { asyncAddItem } from '../actions/itemActions';

type Props = {
  asyncAddItem: (string) => void,
};

type State = {
  name: string,
  isOpen: boolean,
};

class ItemModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      isOpen: false,
    };
  }

  onChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.asyncAddItem(this.state.name);
    this.toggle();
  };

  toggle = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Item
        </Button>

        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader>Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  id="item"
                  name="name"
                  placeholder="Add shopping item"
                  onChange={this.onChange}
                />
                <Button type="submit" color="dark" className="mt-3" block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.item,
  };
}

export default connect(
  mapStateToProps,
  { asyncAddItem },
)(ItemModal);
