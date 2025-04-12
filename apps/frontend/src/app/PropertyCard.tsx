// // PropertyCard.tsx
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { PROPERTY_FEATURE_ICONS } from './presentation/FilterExtensions'
// import {properties} from '@real-estate-platform/api'
//
//
//
// export const PropertyCard: React.FC<{ property: properties }> = ({ property }) => {
//   return (
//     <div className="border rounded-lg shadow-md p-4 bg-white dark:bg-gray-900 dark:text-white transition">
//       <img
//         src={'/placeholder.jpg'}
//         alt="property"
//         className="w-full h-48 object-cover rounded-md mb-2"
//       />
//       <div className="font-bold text-lg">{property.year_built}</div>
//       <div className="text-sm text-gray-500 dark:text-gray-300">{property.number_of_rooms}</div>
//       <div className="mt-2 flex flex-wrap gap-2 text-sm">
//         <span>{property.number_of_rooms} rooms</span>
//         <span>{property.max_price.toLocaleString()} ₪</span>
//       </div>
//       <div className="mt-2 flex flex-wrap gap-2">
//         {Object.entries(PROPERTY_FEATURE_ICONS).map(([key, icon]) =>
//           property[key as keyof typeof property] ? (
//             <FontAwesomeIcon key={key} icon={icon as any} title={key} className="text-blue-500" />
//           ) : null
//         )}
//       </div>
//     </div>
//   );
// };
