import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { Tooltip } from "@material-ui/core";
import { ArrowLeftOutlined } from "@material-ui/icons";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.0,
  speed: 500,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

function CardItem({ card }: any) {
  const [showDetails, setDetails] = useState(false);

  const showDetailsHandler = () => {
    setDetails(true);
  };
  const hideDetailsHandler = () => {
    setDetails(false);
  };

  return (
    <Tilt options={defaultOptions} className="card-item flip-card">
      <div
        className={`flip-card-inner ${showDetails ? "flip-card-active" : ""}`}
      >
        <div className="card-item-info flip-card-front">
          <div
            className="card-item-header"
            style={{
              background: `linear-gradient(135deg, ${card?.product_card_colors[0]} 8%, ${card?.product_card_colors[1]} 83%)`,
            }}
          > 
            <div className="card-item-photo">
              <img src={card?.thubnail} alt="produc error" />
            </div>
          </div>
          <div className="card-item-body">
            {/* <p className="card-item-title">
              {card?.product_name}
              {card?.isNew ? <span>New</span> : null}
            </p> */}
            
            
            <div className="card-item-button">
              <div className="card-item-button--price">
                <p>{card?.product_name}</p>
                <p>{'Added ' + card?.created_at}</p>
              </div>
              <p
                className="card-item-button--add "
                onClick={showDetailsHandler}
              >
                <MoreVertIcon/>
              </p>
            </div>
            {/* <div className="card-item-button" onClick={showDetailsHandler}>
              more details...
            </div> */}
          </div>
        </div>
        <div className="card-item-details flip-card-back">
          <Tooltip title="Hide Details">
            <div className="go-back" onClick={hideDetailsHandler}>
              <ArrowLeftOutlined />
            </div>
          </Tooltip>
          <div className="card-item-details-section-one">
            <div className="card-item-photo">
              <img src={card?.thubnail} alt="produc error" />
            </div>
            <p className="card-item-title">{card?.product_name}</p>
            <div className="card-item-details--description">
              <p>{card?.description}</p>
            </div>
          </div>
          <div className="card-item-button">
            <div className="card-item-button--price">
              <p>${card?.price}</p>
              <p>{card?.unit}</p>
            </div>
            <p className="card-item-button--add " onClick={hideDetailsHandler}>
              Buy Now
            </p>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default CardItem;
