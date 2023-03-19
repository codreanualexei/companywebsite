import "./styles.css";

const ServiceOptionCard = ({ icon, title, text }) => (
  <div className="serviceOption">
    <span className="serviceOption__icon">{icon}</span>
    <p className="serviceOption__title">{title}</p>
    <p className="serviceOption__text">{text}</p>
  </div>
);

export default ServiceOptionCard;
