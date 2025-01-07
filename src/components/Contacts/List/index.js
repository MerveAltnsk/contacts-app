import { useState } from 'react';

function List({ contacts }) {
  const [filteredText, setFilteredText] = useState('');

  // Filter contacts based on the input value, case-insensitive
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filteredText.toLowerCase())
    );
  });

  console.log('filtered', filtered);

  return (
    <div>
      {/* Filtreleme için input */}
      <input
        placeholder="Filter contact"
        value={filteredText}
        onChange={(e) => setFilteredText(e.target.value)}
      />

      {/* Filtrelenmiş liste */}
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span> {contact.fullname} </span>
            <span> {contact.phone_number} </span>

          </li>
        ))}
      </ul>

      <p>
        {/* Filtrelenmiş liste uzunluğu */}
        Total contacts
        ({filtered.length}) 
      </p>


    </div>
  );
}

export default List;
