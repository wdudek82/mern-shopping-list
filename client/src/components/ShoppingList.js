// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

type Props = {
  items: Array<Object>,
};

type State = {
  items: Array<Object>,
};

class ShoppingList extends React.Component<Props, State> {
  // state = {
  //   items: [
  //     { id: uuid(), name: 'Eggs' },
  //     { id: uuid(), name: 'Milk' },
  //     { id: uuid(), name: 'Steak' },
  //     { id: uuid(), name: 'Water' },
  //   ],
  // };

  handleDeleteItem = (id: string) => {
    const updatedItems = this.state.items.filter((item) => item.id !== id);
    this.setState(() => ({ items: updatedItems }));
  };

  render() {
    const { items } = this.props;

    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Item');
            if (name) {
              this.setState(({ items: prevItems }) => ({
                items: [...prevItems, { id: uuid(), name }],
              }));
            }
          }}
        >
          Add Item
        </Button>

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => this.handleDeleteItem(id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(ShoppingList);
