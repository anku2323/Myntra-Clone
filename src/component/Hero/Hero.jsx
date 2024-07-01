import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://flipkartbackend-vrbb.onrender.com/data')
            .then(response => response.json())
            .then(data => {
                setItems(data);
                console.log(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Ankush</h1>
            {items.length > 0 ? (
                <div className="main">
                    {items.slice(0, 36).map(item => (
                        <div className="data-card" key={item.id}>
                           <img src={JSON.parse(image.image)[0]} alt={product.product_name} />
                            <h3 className="data-name">{item.product_name}</h3>
                            <p className="retail-price">Retail Price: ₹{item.retail_price}</p>
                            <p className="discounted-price">Discounted Price: ₹{item.discounted_price}</p>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Hero;
