import { useDrop, useDrag } from 'react-dnd'

export enum ItemTypes {
  MOVIE = 'movie',
  CHARACTER = 'character',
}

type UseDnDDropControlsPayload<T> = {
  itemType: ItemTypes;
  onDrop: (item: T) => void;
}

export const useDnDDropControls = <T>(payload: UseDnDDropControlsPayload<T>) => {
    const { itemType, onDrop } = payload;

    const [_, drop] = useDrop(() => ({
        accept: itemType,
        drop: (item: T) => {
          onDrop(item);
          return item;
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
    }));

    return { drop };
}

type UseDnDDragControlsPayload<T> = {
  itemType: ItemTypes;
  item: T;
}

export const useDndDragControls = <T>(payload: UseDnDDragControlsPayload<T>) => {
  const { itemType, item } = payload;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: itemType,
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  return {
    drag,
    isDragging,
  }
}
