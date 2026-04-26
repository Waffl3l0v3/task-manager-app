import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  if (!tasks || tasks.length === 0) {
    return <div className="empty-state">No tasks found. Create one above!</div>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task._id} 
          task={task} 
          onUpdate={onUpdate} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default TaskList;
