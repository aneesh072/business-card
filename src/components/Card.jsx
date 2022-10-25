import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
const Card = ({
  name,
  position,
  organization,
  address1,
  address2,
  mobile,
  website,
  email,
  logo,
}) => {
  const iconAddress = <FontAwesomeIcon icon={faLocation} />;
  const iconMobile = <FontAwesomeIcon icon={faMobile} />;
  const iconEmail = <FontAwesomeIcon icon={faEnvelope} />;
  const iconWeb = <FontAwesomeIcon icon={faEarth} />;
  return (
    <div className="container">
      <div className="display">
        <div className="display-item">
          <div className="business-card">
            <div className="profile">
              <div className="profile-image">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1608/1608123.png"
                  alt=""
                />
                {logo}
              </div>
              <div className="profile-title">
                <h2>{name}</h2>
                <h3>{organization}</h3>
                <span>{position}</span>
              </div>
            </div>
            <div className="info">
              <div className="info-contact">
                <span>
                  <span style={{ paddingRight: '8px' }}>{iconAddress}</span>
                  {address1}, {address2}
                </span>
                <span>
                  <span style={{ paddingRight: '8px' }}>{iconMobile}</span>
                  {mobile}
                </span>
                <span>
                  <span style={{ paddingRight: '8px' }}>{iconEmail}</span>
                  {email}
                </span>
                <span>
                  <span style={{ paddingRight: '8px' }}>{iconWeb}</span>
                  {website}
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
        <div className="display-item"></div>
      </div>
    </div>
  );
};

export default Card;
