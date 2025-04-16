// RealEstateFilter.tsx
import React from 'react';
import { DealType, PropertyType } from '@real-estate-platform/common';
import {PROPERTY_FEATURE_ICONS, PropertyFeaturePresentation} from './presentation/FilterExtensions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {RealEstatePropertyFilter} from "@real-estate-platform/common";

type Props = {
  filter: RealEstatePropertyFilter;
  onChange: (updated: RealEstatePropertyFilter) => void;
};

export const RealEstateFilter: React.FC<Props> = ({ filter, onChange }) => {
  const toggleFeature = (key: keyof typeof PROPERTY_FEATURE_ICONS) => {
    const updated = {
      ...filter,
      features: {
        ...filter.features,
        [key]: !filter.features?.[key],
      },
    };
    onChange(updated);
  };

  return (
    <div className="grid gap-4 p-4 bg-white rounded-xl shadow-md">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="City"
          className="border p-2 rounded"
          value={filter.city || ''}
          onChange={(e) => onChange({ ...filter, city: e.target.value })}
        />
        <input
          type="number"
          placeholder="Min Price"
          className="border p-2 rounded"
          value={filter.price?.gte || ''}
          onChange={(e) =>
            onChange({
              ...filter,
              price: { ...filter.price, gte: Number(e.target.value) },
            })
          }
        />
        <input
          type="number"
          placeholder="Max Price"
          className="border p-2 rounded"
          value={filter.price?.lte || ''}
          onChange={(e) =>
            onChange({
              ...filter,
              price: { ...filter.price, lte: Number(e.target.value) },
            })
          }
        />
        <select
          className="border p-2 rounded"
          value={filter.dealType || ''}
          onChange={(e) => onChange({ ...filter, dealType: e.target.value as DealType })}
        >
          <option value="">Deal Type</option>
          {Object.values(DealType).map((type) => (
            <option key={type} value={type}>
              {type.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        {(Object.entries(PROPERTY_FEATURE_ICONS) as [
          keyof typeof PROPERTY_FEATURE_ICONS,
          PropertyFeaturePresentation
        ][])
          .map(([key, { label, icon }]) => (
          <button
            key={key}
            onClick={() => toggleFeature(key as keyof typeof PROPERTY_FEATURE_ICONS)}
            className={`p-2 border rounded flex items-center gap-2 ${
              filter.features?.[key as keyof typeof PROPERTY_FEATURE_ICONS] ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}>

            {/*TODO : configure icon <FontAwesomeIcon icon={icon as any} />*/}
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
