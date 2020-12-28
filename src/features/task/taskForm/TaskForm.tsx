import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import styles from './TaskForm.module.scss';

type Inputs = {
  taskTitle: string;
};

const TaskForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  // useFormから取ってくる
  const handleCreate = (data: Inputs) => {
    console.log(data);
    reset();
    // handleSubmit e.preventDefaultのようなことをしてくれる
    // reset  入力後に削除してくれる
  };
  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit(handleCreate)} className={styles.form}>
        <TextField
          id='outlined-basic'
          label='New Task'
          variant='outlined'
          inputRef={register}
          // inputRef={register} 入力した内容の取得
          name='taskTitle'
          className={styles.text_field}
        />
      </form>
    </div>
  );
};

export default TaskForm;
