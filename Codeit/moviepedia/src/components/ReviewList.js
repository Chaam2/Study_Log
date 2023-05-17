import './ReviewList.css';
import dayjs from 'dayjs';

function ReviewListItem({ item, 자식주는삭제함수이름 }) {
  const handleDeleteClick = () => {
    자식주는삭제함수이름(item.id);
  }; // 삭제버튼 클릭시 해당 아이템 아이디를 handelDelete함수에 넘겨준다.
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{dayjs(item.createdAt).format('YYYY.MM.DD')}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

function ReviewList({ items, 삭제함수이름 }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ReviewListItem item={item} 자식주는삭제함수이름={삭제함수이름} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
