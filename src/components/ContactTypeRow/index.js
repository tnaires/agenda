import React from 'react';

const ContactTypeRow = props => {
  return (
    <tr key={props.contactType.id}>
      <td>{props.contactType.description}</td>
    </tr>
  );
};

export default ContactTypeRow;
