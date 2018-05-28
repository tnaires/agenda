import React from 'react';

const ContactTypeRow = props => {
  return (
    <tr>
      <td>{props.contactType.description}</td>
    </tr>
  );
};

export default ContactTypeRow;
