import { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import { getReviews } from '../api';

function App() {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [order, setOrder] = useState('createdAt');
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => {
    setOrder('createdAt');
  };

  const handleBestClick = () => {
    setOrder('rating');
  };

  const 삭제함수 = (id) => {
    const nextItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(nextItems);
  };

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: 6 });
  }, [order]);

  const handleLoad = async (options) => {
    const { reviews, paging } = await getReviews(options);
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prev) => [...prev, ...reviews]);
    }
    setOffset(options.offset + options.limit);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: 6 });
  };

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>평점순</button>
      </div>
      <ReviewList items={sortedItems} 삭제함수이름={삭제함수} />
      {hasNext && <button onClick={handleLoadMore}>더보기</button>}
    </div>
  );
}

export default App;
