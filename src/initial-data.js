const initialData = {
  tasks: {
    '0': { id: '0', content: 'Take out the garbage' },
    '1': { id: '1', content: 'Watch my favorite show' },
    '2': { id: '2', content: 'Charge my phone' },
    '3': { id: '3', content: 'Cook dinner' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['0', '1', '2', '3']
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1']
};

export default initialData;
