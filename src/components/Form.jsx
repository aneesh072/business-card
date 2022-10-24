import React, { useState, useEffect } from 'react';
import Card from './Card';

const Form = () => {
  const [inputs, setInputs] = useState({});
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const { name, position, organization, address1, address2, website, email } =
    inputs;

  function logo() {
    return (
      <>
        {imageURLs.map((imageSrc) => (
          <img src={imageSrc} />
        ))}
      </>
    );
  }

  return (
    <>
      <div>
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Full Name</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={inputs.name || ''}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Position</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="position"
                    value={inputs.position || ''}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Orzanization</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="organization"
                    value={inputs.organization || ''}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Address 1</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="address1"
                    value={inputs.address1 || ''}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Address 2</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="address2"
                    value={inputs.address2 || ''}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Website</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="website"
                    value={inputs.website || ''}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="email"
                    value={inputs.email || ''}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Logo</label>
                </td>
                <td>
                  <input
                    type="file"
                    miltiple
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <Card
        name={inputs.name}
        position={inputs.position}
        organization={inputs.organization}
        address1={inputs.address1}
        address2={inputs.address2}
        website={inputs.website}
        email={inputs.email}
        logo={logo()}
      />
    </>
  );
};

export default Form;
