import React from 'react';

import PersonForm from '../PersonForm';
import PersonRow from '../PersonRow';

const PersonTable = props => {
  const rows = props.people.map(person => (
    <PersonRow key={person.id} person={person} />
  ));

  return (
    <div>
      <PersonForm addPerson={props.addPerson} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default PersonTable;
