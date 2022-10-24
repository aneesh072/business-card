import React, { useState } from 'react';
import Card from './Card';

const Form = () => {
  /*   const [name, setname] = useState('');
  const [position, setPosition] = useState('');
  const [organization, setOrganization] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState(''); */

  const [inputs, setInputs] = useState({});

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const { name, position, organization, address1, address2, website, email } =
    inputs;

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
      />
    </>
  );
};

export default Form;
