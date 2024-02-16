import React from 'react';
import b from '../assets/b.jpg'
import b2 from '../assets/b2.jpg'
import './bannerbottom.css'

const BannerBottom = () => {
    return (
        <div className='my-28 bannerbotton'>

            <div className='width' style={{ backgroundImage: `url(${b})`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', padding: '100px',backgroundSize: 'cover' }}>
                <h3>Super Sale</h3>
                <h1>New Collection</h1>
                <p>Shop Now</p>
            </div>
            <div className='width2' style={{ backgroundImage: `url(${b2})`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', padding: '100px',backgroundSize: 'cover' }}>
                <h3>Super Sale</h3>
                <h2>New Collection</h2>
                <p>Shop Now</p>
            </div>


        </div>
    );
};

export default BannerBottom;