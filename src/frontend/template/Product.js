import React from "react";
import './Product.css'
import './Common.css'
import 'font-awesome/css/font-awesome.min.css';
import image1 from '../imagedata/Catergory_A_1.jpeg'
import image2 from '../imagedata/Catergory_A_2.jpeg'
import image3 from '../imagedata/Catergory_B_1.jpeg'
import image4 from '../imagedata/Catergory_B_2.jpeg'
const Product = () => {
    return (
        <body>
            <div class="grid-container">
                <main>
                    <div className="row center">
                        <div className="card">
                            <a href="product.html">
                                <img className="medium" src={image1} alt="image1" />
                                {/* <img src={image2} alt="image2" />
                                <img src={image3} alt="image3" />
                                <img src={image4} alt="image4" /> */}
                            </a>
                            <div className="card-body">
                                <a href="product.html">
                                    <h3>Women's Nightdress</h3>
                                </a>
                            </div>
                            <div className="rating">Rating
                                <span>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span>
                                    <i className="fa fa-star"></i>
                                </span>
                            </div>
                            <div className="price">Price:Rs780/-</div>
                        </div>
                    </div>
                </main>
            </div>
        </body>
    )
}
export default Product
