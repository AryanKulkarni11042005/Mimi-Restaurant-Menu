import React from 'react';
import menuData from '../src/data/menu.json';

const Menu = () => {
    return (
        <div className="menu">
            <h1>Mimi Cafe Menu</h1>
            <ul>
                {menuData.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>Price: ${item.price.toFixed(2)}</p>
                        <p>Category: {item.category}</p>
                        <img src={item.image} alt={item.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;