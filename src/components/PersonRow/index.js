import React from 'react';

const PersonRow = props => {
  return (
    <tr>
      <td>{props.person.name}</td>
    </tr>
  );
};

export default PersonRow;
