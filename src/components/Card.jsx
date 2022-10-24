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
    <>
      <div className="main-card">
        <div className="logo"></div>
        <div className="details">
          <p>{name}</p>
          <p>{position}</p>
          <p>{organization}</p>
          <p>{address1}</p>
          <p>{address2}</p>
          <p>{website}</p>
          <p>{email}</p>
          {logo}
        </div>
      </div>
    </>
  );
};

export default Card;
