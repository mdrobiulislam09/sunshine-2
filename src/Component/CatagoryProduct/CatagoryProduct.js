import React from 'react';
import './CatagoryProduct.css';
import { PhotoView } from 'react-photo-view';

const CatagoryProduct = ({ n, setPhone }) => {
    const { location, used, picture, sellPrice, originalPrice, productName, sellerName, postDate } = n;
    return (
        <div className=''>
            <div className='wrapper'>
                <div className='carg'>
                    <PhotoView src={picture}>
                        <img src={picture} alt="phot" />
                    </PhotoView>
                    <div className='inffo'>
                        <h3>{productName}</h3>
                        <p>Price: {sellPrice}</p>
                        <button onClick={() => setPhone(n)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
        // <div className='col hhover'>
        //     <Card style={{ width: '24rem', border: "none" }}>
        //         <Card.Img variant="top" src={picture} />
        //         <Card.Body>
        //             <Card.Title>{productName}</Card.Title>
        //             <Card.Text>
        //                 <div className='d-flex justify-content-between'>
        //                     <div>
        //                         <p>Seller: {sellerName}</p>
        //                         <p>Location: {location}</p>
        //                         <p>Buy Price: {originalPrice} $</p>
        //                     </div>
        //                     <div>
        //                         <p>Selling Price: {sellPrice} $</p>
        //                         <p>Use time:{used}</p>
        //                         <p>Post Date: {postDate}</p>
        //                     </div>
        //                 </div>
        //             </Card.Text>
        //             {/* book mow modals */}
        //             <button  onClick={() => setPhone(n)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        //                 Book Now
        //             </button>

        //         </Card.Body>
        //     </Card>
        // </div>
    );
};

export default CatagoryProduct;