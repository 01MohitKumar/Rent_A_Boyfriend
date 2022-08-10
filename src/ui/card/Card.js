import cat from "../../store/images/cat.jpg";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className=" col-md-6 col-lg-3">
      <div className={`card ${classes.card}`}>
        <img
          className={`${classes.img} card-img-top`}
          src={cat}
          alt="profile_picture"
        />
        <div className="card-body">
          <h5 className="card-title">Royal Cat</h5>
          <div className="card-text">
            <div>
              <span>Age:</span> 20
            </div>
            <div>
              <span>Height:</span> 5'5"
            </div>
            <div>
              <span>Weight:</span> 55kg
            </div>
            <div>
              <span>Interest:</span> Coding, photography, sketch, calisthenics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


