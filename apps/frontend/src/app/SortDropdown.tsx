import {SortField, Sorting} from "./types";

export const SortDropdown: React.FC<{
  sorting: Sorting;
  onChange: (s: Sorting) => void;
}> = ({ sorting, onChange }) => {
  const options: { label: string; field: SortField }[] = [
    { label: 'Price', field: 'price' },
    { label: 'Area', field: 'area' },
    { label: 'Rooms', field: 'rooms' },
    { label: 'Newest', field: 'createdAt' },
  ];

  return (
    <div className="flex gap-2 items-center">
      <span className="text-sm">Sort by:</span>
      <select
        className="border rounded p-1"
        value={sorting.field}
        onChange={(e) =>
          onChange({ ...sorting, field: e.target.value as SortField })
        }
      >
        {options.map((opt) => (
          <option key={opt.field} value={opt.field}>
            {opt.label}
          </option>
        ))}
      </select>
      <button
        className="text-sm underline"
        onClick={() =>
          onChange({ ...sorting, order: sorting.order === 'asc' ? 'desc' : 'asc' })
        }
      >
        {sorting.order === 'asc' ? '▲' : '▼'}
      </button>
    </div>
  );
};
