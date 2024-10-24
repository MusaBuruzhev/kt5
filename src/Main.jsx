import './style.css'
import React, { useState } from 'react';
function Main(){
    const [data, setData] = useState([
        { id: 1, name: 'Велосипед', price: 1000, count: 1 },
        { id: 2, name: 'Самокат', price: 700, count: 1 },
        { id: 3, name: 'Ролики', price: 1300, count: 2 },
        { id: 4, name: 'Сноуборд', price: 19000, count: 4 },
      ]);
    
      const addItem = () => {
        const input = prompt('Введите название и цену товара (например, "Велосипед 1000")');
        if (input) {
          const [name, price] = input.split(' ');
          const newItem = {
            id: Date.now(),
            name,
            price: Number(price),
            count: 1,
          };
          setData([...data, newItem]);
        }
      };
    
      const incrementCount = (id) => {
        setData(data.map(item => 
          item.id === id ? { ...item, count: Math.min(item.count + 1, 25) } : item
        ));
      };
    
      const decrementCount = (id) => {
        setData(data.map(item => 
          item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item
        ));
      };
    
      const handleDoubleClick = (id) => {
        
        const item = data.find(item => item.id === id);
        if (item && item.count === 0) {
          setData(data.filter(item => item.id !== id));
        }
      };
    
      return (
        <div className='div1'>
          <button  className='btn' onClick={addItem}>Добавить товар</button>
          <div className='div2'>
            {data.map(item => (
              item.count > 0 && ( 
                <div className='div' key={item.id} onDoubleClick={() => handleDoubleClick(item.id)}>
                  <h3>{item.name}</h3>
                  <p>Цена: {item.price} руб.</p>
                  <div className='div5'><button onClick={() => incrementCount(item.id)}>+</button><p>{item.count}</p><button onClick={() => decrementCount(item.id)}>-</button></div>
                  
                  
                  
                </div>
              )
            ))}
          </div>
        </div>
      );
    };


export default Main;