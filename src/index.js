import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';

// const App = () => 'Hello world';
class App extends React.Component {
  state = initialData;

  onDragStart = () => {
    document.body.style.color = 'orange';
  };

  onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };

  onDragEnd = result => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';

    console.log(' >>>>>> result  >>>>>> ', result);
    const { destination, source, draggableId } = result;
    console.log(' >>>>>> draggableId  >>>>>> ', result.draggableId);
    if (!destination) {
      return;
    }
    if (
      destination.draggableId === source.draggableId &&
      destination.index === source.index
    ) {
      return;
    }

    // 取得被移動的 item
    const column = this.state.columns[source.droppableId];
    console.log(' >>>>>> column >>>>>> ', column);

    console.log(' >>>>>> this.state.columns >>>>>> ', this.state.columns);
    console.log(' >>>>>> source.draggableId >>>>>> ', source.droppableId);
    const newTaskIds = Array.from(column.taskIds);
    console.log(' >>>>>> newTaskIds 0 >>>>>> ', newTaskIds); //["0", "1", "2", "3"]
    newTaskIds.splice(source.index, 1); //  0,1
    console.log(' >>>>>> draggableId 1 >>>>>> ', draggableId); //["1", "2", "3"]
    console.log(' >>>>>> newTaskIds 1 >>>>>> ', newTaskIds); //["1", "2", "3"]
    newTaskIds.splice(destination.index, 0, draggableId); // 2,0,0//draggableId
    console.log(' >>>>>> newTaskIds 2 >>>>>> ', newTaskIds); //["1", "2", undefined, "3"]
    const newColumn = { ...column, taskIds: newTaskIds };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      }
    };
    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
          console.log(' >>>> tasks >>>> ', tasks);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
