import React from 'react';

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>;

export default class TodoList extends React.Component {
  render() {
    const { onListClick } = this.props;

    return (
      <ul onClick={onListClick}>
        {items.map((item, index) => (
          <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)} />
        ))}
      </ul>
    );
  }
  handleItemClick(item, event) {
    if (!item.done) {
      event.persist();
      this.props.onItemClick(item, event);
    }
  }
}

const items = [
  { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false },
];
