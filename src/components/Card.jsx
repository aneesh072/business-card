import React from 'react';

const Card = ({
  name,
  position,
  organization,
  address1,
  address2,
  website,
  email,
  logo,
}) => {
  return (
    <div className="container">
      <div className="display">
        <div className="display-item">
          <span>Static</span>
          <div className="business-card">
            <div className="profile">
              <div className="profile-image"></div>
              <div className="profile-title">
                <h2>Walter Habadasher</h2>
                <h3>Simzo Entertainment</h3>
                <span>Laundry Massager</span>
              </div>
            </div>
            <div className="info">
              <div className="info-contact">
                <span>
                  <i className="fa fa-phone"></i> +45 58 58 58 58
                </span>
                <span>
                  <i className="fa fa-at"></i> whab@simzo.com
                </span>
                <span>
                  <i className="fa fa-facebook"></i>{' '}
                  <a href="#">Walter Habadasher</a>
                </span>
              </div>
              <div className="info-bio">
                <p>
                  Nulla facilisi. Morbi in mauris ipsum. Etiam ut justo vel elit
                  eleifend mattis eget eget arcu.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="display-item">
        </div>
      </div>
    </div>
  );
};

export default Card;
