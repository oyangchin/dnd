const initialData = {
  tasks: {
    'task-1': { id: '0', content: 'Take out the garbage' },
    'task-2': { id: '1', content: 'Watch my favorite show' },
    'task-3': { id: '2', content: 'Charge my phone' },
    'task-4': { id: '3', content: 'Cook dinner' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1']
};

export default initialData;
