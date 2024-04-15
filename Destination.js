import Mountain1 from "../assets/4.png";
import Mountain2 from "../assets/img1.jpg";
import Mountain3 from "../assets/img2.jpg";
import Mountain4 from "../assets/nnn.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Health is our first priority</h1>

      <DestinationData
        className="first-des"
        heading="About Us"
        text="At Harmony Online Pharmacy Medstore, we are committed to providing exceptional healthcare solutions tailored to your individual needs. With a passion for wellness and a dedication to customer satisfaction, we strive to be your trusted partner on your journey to a healthier and happier life.At our pharmastore, your wellness is our top priority. We are dedicated to fostering a harmonious relationship between you and your health, ensuring that you have access to the medications and healthcare products you need to lead a fulfilling life.

        Thank you for choosing Harmony Online Pharmacy as your healthcare partner. We look forward to serving you and helping you achieve optimal health and well-being."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        text="Our mission is to make healthcare accessible, convenient, and affordable for everyone. We believe that good health is a fundamental right, and we are committed to delivering high-quality pharmaceutical products and services to your doorstep..

        We understand that your health is paramount, and we take it seriously. That's why we source our medications and healthcare products from reputable manufacturers and suppliers, ensuring that you receive safe and effective treatments. Our team of pharmacists and healthcare professionals is dedicated to maintaining the highest standards of quality and safety."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;