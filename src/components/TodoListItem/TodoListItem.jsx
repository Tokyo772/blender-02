import { GridItem, Text } from '..';
import { RiDeleteBinLine } from 'react-icons/ri';

import style from './TodoListItem.module.css';

export const TodoListItem = ({ text, count }) => {
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO #{count + 1}
        </Text>
        <Text>{text}</Text>
        <button className={style.deleteButton} type="button">
          <RiDeleteBinLine size={24} />
        </button>
      </div>
    </GridItem>
  );
};
