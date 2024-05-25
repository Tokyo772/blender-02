import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(text);
    e.target.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        value={text}
        onChange={e => setText(e.target.value)}
        required
        autoFocus
      />
    </form>
  );
};
