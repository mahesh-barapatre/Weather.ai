import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const FavoriteLocationCard = () => {
  // Sample user data
  const [userLocations, setUserLocations] = useState([
    { id: 1, name: 'Location A' },
    { id: 2, name: 'Location B' },
    { id: 3, name: 'Location C' },
    { id: 4, name: 'Location D' },
    { id: 5, name: 'Location E' },
  ]);

  const handleEdit = (id) => {
    // Implement your edit logic here
    // For simplicity, we'll just prompt for a new name
    const newName = prompt('Enter new location name:');
    if (newName) {
      setUserLocations((prevLocations) =>
        prevLocations.map((location) =>
          location.id === id ? { ...location, name: newName } : location
        )
      );
    }
  };

  return (
    <div className="bg-black text-white px-8 py-2 rounded-lg shadow-md">
      <ul>
        {userLocations.map((location) => (
          <li key={location.id} className="mb-2 flex items-center hover:cursor-pointer hover:bg-gray-600 focus:outline-none transition duration-300">
            <span className="flex-grow">{location.name}</span>
             <button
              onClick={() => handleEdit(location.id)}
              className="text-white px-4 py-1 rounded-md"
            >
              <Icon icon="basil:edit-outline" width="20" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteLocationCard;
