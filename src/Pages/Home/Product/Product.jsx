import React, { useState } from "react";
import no1 from '../../../Assets/product/1.png';
import no2 from '../../../Assets/product/10.png';
import no3 from '../../../Assets/product/3.png';
import no4 from '../../../Assets/product/4.png';
import no5 from '../../../Assets/product/5.png';
import no6 from '../../../Assets/product/6.png';
import no7 from '../../../Assets/product/7.png';
import no8 from '../../../Assets/product/11.png';
import no9 from '../../../Assets/product/13.png';

const Product = () => {
    const imagesData = [
        { 
            id: 1, 
            category: 'Fruit2', 
            img: no1 
        },
        { 
            id: 2, 
            category: 'Fruit1', 
            img: no2 
        },
        { 
            id: 3, 
            category: 'Fruit3', 
            img: no3 
        },
        { 
            id: 4, 
            category: 'Fruit2', 
            img: no4 
        },
        { 
            id: 5, 
            category: 'Fruit3', 
            img: no5 
        },
        { 
            id: 6, 
            category: 'Fruit1', 
            img: no6 
        },
        { 
            id: 7, 
            category: 'Fruit3', 
            img: no7 
        },
        { 
            id: 8, 
            category: 'Fruit1', 
            img: no8 
        },
        { 
            id: 9, 
            category: 'Fruit2', 
            img: no9 
        },
    ];
    const imagesData1 = [
        {
          id: 1,
          image: "https://source.unsplash.com/user/peejayvisual/162x162?food",
          name: "Maggi",
          category: "breakfast",
          price: "₹.12",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 2,
          image: "https://source.unsplash.com/user/blsnki/162x162?eggcurry",
          name: "Egg Curry",
          category: "lunch",
          price: "₹.99/-",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 3,
          image: "https://source.unsplash.com/user/blsnki/162x162?nature,water",
          name: "Aloo Paratha",
          category: "breakfast",
          price: "₹.29/-",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 4,
          image: "https://source.unsplash.com/user/blsnki/162x162?food",
          name: "Maggi",
          category: "evening",
          price: "₹.49/-",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 5,
          image: "https://source.unsplash.com/user/blsnki/162x162?mango",
          name: "Maggi",
          category: "breakfast",
          price: "₹.12",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 6,
          image: "https://source.unsplash.com/user/blsnki/162x162?water",
          name: "Maggi",
          category: "dinner",
          price: "₹.12",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 7,
          image: "https://source.unsplash.com/user/blsnki/162x162?food",
          name: "Maggi",
          category: "dinner",
          price: "₹.12",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 8,
          image: "https://source.unsplash.com/user/blsnki/162x162?breakfast",
          name: "Chaat Masala",
          category: "lunch",
          price: "₹.12",
          description: "Lorem ipsum dolor sit amet"
        }
      ];
      

      

    const [filter, setFilter] = useState('all');

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const filteredImages = filter === 'all' ? imagesData : imagesData.filter(image => image.category === filter);
    return (
        <div className="container">
            <h1 className="text text-center my-5 font-bold fon  text-4xl">Our Products</h1>
            <div className="flex items-center justify-center gap-2">
                <button className="border border-orange-300 hover:bg-orange-300 rounded" style={{marginLeft:'0px'}} onClick={() => handleFilterChange('all')}>All</button> <p>|</p>
                <button className="border border-orange-300 hover:bg-orange-300 rounded" style={{marginLeft:'0px'}} onClick={() => handleFilterChange('Fruit1')}>Fruit1</button><p>|</p>
                <button className="border border-orange-300 hover:bg-orange-300 rounded" style={{marginLeft:'0px'}} onClick={() => handleFilterChange('Fruit2')}>Fruit2</button><p>|</p>
                <button className="border border-orange-300 hover:bg-orange-300 rounded" style={{marginLeft:'0px'}} onClick={() => handleFilterChange('Fruit3')}>Fruit3</button>
            </div>
            <div className="flex items-center justify-center my-10 mx-40" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {filteredImages.map(images => (
                    <img
                        key={images.id}
                        src={images.img}
                        alt={`category-${images.category}`}
                        style={{ width: '200px', height: '200px', margin: '5px' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Product;