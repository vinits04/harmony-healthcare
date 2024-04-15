import "./AboutUsStyles.css";
import pro1 from "../assets/Product1.jpg";
import pro2 from "../assets/Product2.jpg";
import pro3 from "../assets/Product3.jpg";
import pro4 from "../assets/Product4.jpg";
import pro5 from "../assets/Product5e.jpg";
import pro6 from "../assets/Product6.jpg";
import pro7 from "../assets/Product7.jpg";
import pro8 from "../assets/Product8.jpg";
import pro9 from "../assets/Product9.jpg";
import pro10 from "../assets/Product10.jpg";
import pro11 from "../assets/Product11.jpg";
import pro12 from "../assets/Product12.jpg";
import pro13 from "../assets/prod13.jpg";
import pro14 from "../assets/product14.jpg";
import pro15 from "../assets/prod15.jpg";


function AboutUs() {
  return (
    <div className="product-container">
   

   
        <div class="product-frame">
            <img src={pro1} alt="Product 1" class="product-image"/>
            <h2 class="product-title">Paracetamol 500mg</h2>
            <p class="product-price">₹125.00</p>
            <button class="buy-button">Buy Now</button>
        </div>
        <div class="product-frame">
            <img src={pro2} alt="Product 2" class="product-image"/>
            <h2 class="product-title">Dolo 650</h2>
            <p class="product-price">₹250.00</p>
            <button class="buy-button">Buy Now</button>
        </div>
        <div class="product-frame">
            <img src={pro3} alt="Product 3" class="product-image"/>
            <h2 class="product-title">Ibuprofen 400mg</h2>
            <p class="product-price">₹220.00</p>
            <button class="buy-button">Buy Now</button>
        </div>
        <div class="product-frame">
            <img src={pro4} alt="Product 4" class="product-image"/>
            <h2 class="product-title">Metformin Tablets</h2>
            <p class="product-price">₹114.99</p>
            <button class="buy-button">Buy Now</button>
        </div>
        <div class="product-frame">
            <img src={pro5} alt="Product 5" class="product-image"/>
            <h2 class="product-title">Gasotrin Tablets</h2>
            <p class="product-price">₹340.99</p>
            <button class="buy-button">Buy Now</button>
        </div>
        <div class="product-frame">
            <img src={pro6} alt="Product 6" class="product-image"/>
            <h2 class="product-title">Aspirin Tablets</h2>
            <p class="product-price">₹500.99</p>
            <button class="buy-button">Buy Now</button>
            </div>
        <div class="product-frame">
            <img src={pro7} alt="Product 7" class="product-image"/>
            <h2 class="product-title">Hansaplast Bandage</h2>
            <p class="product-price">₹35.00</p>
            <button class="buy-button">Buy Now</button>
            </div>
        <div class="product-frame">
            <img src={pro8} alt="Product 8" class="product-image"/>
            <h2 class="product-title">Gasoshel Tablets</h2>
            <p class="product-price">₹260.00</p>
            <button class="buy-button">Buy Now</button>
            </div>
        <div class="product-frame">
            <img src={pro9} alt="Product 9" class="product-image"/>
            <h2 class="product-title">Pilex Forte</h2>
            <p class="product-price">₹47.00</p>
            <button class="buy-button">Buy Now</button>
            </div>
        <div class="product-frame">
            <img src={pro10} alt="Product 10" class="product-image"/>
            <h2 class="product-title">Pure Hand Sanitizer</h2>
            <p class="product-price">₹200.00</p>
            <button class="buy-button">Buy Now</button>
            </div>
        <div class="product-frame">
            <img src={pro11} alt="Product 11" class="product-image"/>
            <h2 class="product-title">Dettol</h2>
            <p class="product-price">₹120.00</p>
            <button class="buy-button">Buy Now</button>
            </div>
        <div class="product-frame">
            <img src={pro12} alt="Product 12" class="product-image"/>
            <h2 class="product-title">Whisper Sanitary Pads</h2>
            <p class="product-price">₹150.00</p>
            <button class="buy-button">Buy Now</button>
            </div>
        <div class="product-frame">
            <img src={pro13} alt="Product 13" class="product-image"/>
            <h2 class="product-title">Cold Medication</h2>
            <p class="product-price">₹350.00</p>
            <button class="buy-button">Buy Now</button>
            </div>
        <div class="product-frame">
            <img src={pro14} alt="Product 14" class="product-image"/>
            <h2 class="product-title">Skincare Pack for Acne Treatment</h2>
            <p class="product-price">₹1150.00</p>
            <button class="buy-button">Buy Now</button>
            </div>
        <div class="product-frame">
            <img src={pro15} alt="Product 15" class="product-image"/>
            <h2 class="product-title">Bacloderm-G</h2>
            <p class="product-price">₹300.00</p>
            <button class="buy-button">Buy Now</button>
            </div>

      
      
      
    </div>
  );
}

export default AboutUs;