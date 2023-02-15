import { TimelineItem } from '@/_shared/types';

export const mapWatchNext = (items: TimelineItem[]) => {
  return items.map((item, index) => {
    return {
      ...item,
      watchNext: items[index + 1]?.id || '',
    };
  });
}
