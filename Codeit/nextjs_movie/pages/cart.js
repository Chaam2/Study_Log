import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [value, setValue] = useState('');
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleClick() {
    axios.put('http://localhost:3000/api/cart', { value });
    setIsUpdated(!isUpdated);
  }

  const get = () => {
    axios.get('http://localhost:3000/api/cart').then((res) => {
      console.log(res.data);
      setCart(res.data);
    });
  };
  useEffect(() => {
    get();
  }, [isUpdated]);

  return (
    <>
      <input
        value={value}
        placeholder="Cart API test"
        onChange={handleChange}
      />
      <button onClick={handleClick}>등록</button>
      {cart?.map((item, index) => {
        return <p key={index}>{item.value}</p>;
      })}
    </>
  );
}
