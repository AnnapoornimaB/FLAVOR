import { useNavigate } from "react-router-dom";
import "./Service.css";

export default function Service({ chef }) {
  const navigate = useNavigate();

  return (
    <div className="Scripts">
      <div className="box-container">
        <div className="service">
          <img src={chef.img} alt="chef photo" />

          <h3>{chef.name}</h3>
          <span className="service-age">
            <span className="service-qn">Age: </span>
            {chef.age}
          </span>
          <span className="service-experience">
            <span className="service-qn">Experience: </span>
            {chef.experience}
          </span>
          <span className="service-rating">
            {Array.from(Array(chef.rating), (e, i) => {
              return <i key={i} className="fas fa-star"></i>;
            })}
          </span>
          <span className="service-desc">{chef.description}</span>
        </div>
        <button
          className="nav-btn active"
          onClick={() => {
            navigate("/reservation", { state: { chef } });
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
