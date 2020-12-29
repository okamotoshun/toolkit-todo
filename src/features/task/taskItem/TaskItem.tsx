import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EventNoteIcon from '@material-ui/icons/EventNote';
import styles from './TaskItem.module.scss';

interface PropType {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropType> = ({ task }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_item}>
        <Checkbox
          checked={task.completed}
          onClick={() => console.log(`reduxで実装 check ${task.id}`)}
          className={styles.checkbox}
        />
        <button
          className={styles.edit_button}
          onClick={() => console.log(`reduxで実装 edit ${task.id}`)}>
          <EditIcon className={styles.icon} />
        </button>
        <button
          className={styles.delete_button}
          onClick={() => console.log(`reduxで実装 delete ${task.id}`)}>
          <DeleteIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
