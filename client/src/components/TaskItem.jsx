import React from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const toggleStatus = () => {
    const newStatus = task.status === 'completed' ? 'pending' : 'completed';
    onUpdate(task._id, { status: newStatus });
  };

  return (
    <div className={`task-card ${task.status} priority-${task.priority}`}>
      <div className="task-header">
        <h3 className={task.status === 'completed' ? 'completed-text' : ''}>{task.title}</h3>
        <span className={`badge badge-${task.priority}`}>{task.priority}</span>
      </div>
      {task.description && <p className="task-desc">{task.description}</p>}
      <div className="task-footer">
        <button 
          className={`btn ${task.status === 'completed' ? 'btn-secondary' : 'btn-success'}`}
          onClick={toggleStatus}
        >
          {task.status === 'completed' ? 'Mark Pending' : 'Complete'}
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
