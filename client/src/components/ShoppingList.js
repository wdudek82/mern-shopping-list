// @flow
import React from 'react';
import { connect } from 'react-redux';

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { asyncGetItems, asyncDeleteItem } from '../actions';

type Props = {
  item: Array<Object>,
  loading: boolean,
  asyncGetItems: (void) => void,
  asyncDeleteItem: (string) => void,
};

type State = {
  items: Array<Object>,
};

class ShoppingList extends React.Component<Props, State> {
  componentDidMount() {
    this.props.asyncGetItems();
  }

  handleDeleteItem = (id: string) => {
    this.props.asyncDeleteItem(id);
  };

  renderItems = () => {
    let items = 'loading...';

    if (this.props.item.length > 0) {
      items = this.props.item.map(({ _id, name }) => (
        <CSSTransition key={_id} timeout={500} classNames="fade">
          <ListGroupItem>
            <Button
              className="remove-btn"
              color="danger"
              size="sm"
              onClick={() => this.handleDeleteItem(_id)}
            >
              &times;
            </Button>
            {name}
          </ListGroupItem>
        </CSSTransition>
      ));
    }

    return items;
  };

  render() {
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {this.renderItems()}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.item.items,
    loading: state.item.loading,
  };
}

export default connect(
  mapStateToProps,
  { asyncGetItems, asyncDeleteItem },
)(ShoppingList);
