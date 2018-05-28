import React from 'react';

import ContactTypeForm from '../ContactTypeForm';
import ContactTypeRow from '../ContactTypeRow';

const ContactTypeTable = props => {
  const rows = props.contactTypes.map(contactType => (
    <ContactTypeRow contactType={contactType} />
  ));

  return (
    <div>
      <ContactTypeForm addContactType={props.addContactType} />
      <table>
        <thead>
          <tr>
            <th>Contact type</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTypeTable;
