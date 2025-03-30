// PropertyCard.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PROPERTY_FEATURE_ICONS } from './presentation/FilterExtensions'


export const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white dark:bg-gray-900 dark:text-white transition">
      <img
        src={property.mainImageUrl || '/placeholder.jpg'}
        alt="property"
        className="w-full h-48 object-cover rounded-md mb-2"
      />
      <div className="font-bold text-lg">{property.title}</div>
      <div className="text-sm text-gray-500 dark:text-gray-300">{property.city}, {property.street}</div>
      <div className="mt-2 flex flex-wrap gap-2 text-sm">
        <span>{property.rooms} rooms</span>
        <span>{property.area} m²</span>
        <span>{property.price.toLocaleString()} ₪</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {Object.entries(PROPERTY_FEATURE_ICONS).map(([key, icon]) =>
          property[key as keyof typeof property] ? (
            <FontAwesomeIcon key={key} icon={icon as any} title={key} className="text-blue-500" />
          ) : null
        )}
      </div>
    </div>
  );
};
