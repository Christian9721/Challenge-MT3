import { useRef } from "react";
import { useDispatch } from "react-redux";

const useDraggable = (props) => {
  const { setPendings, source } = props;
  const dispatch = useDispatch();
  const draggingItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (_, position) => {
    draggingItem.current = position;
  };
  const handleDragEnter = (_, position) => {
    dragOverItem.current = position;
    const listCopy = [...source];
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    dispatch(setPendings(listCopy));
  };
  return { handleDragStart, handleDragEnter };
};

export default useDraggable;
