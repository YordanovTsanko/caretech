import React from 'react'
import CustomCheckbox from '../CustomCheckbox';

const filtersList = [
  { id: "new", label: "Нови" },
  { id: "promo", label: "Промоционални" },
  { id: "sale", label: "Разпродажба" },
  { id: "available", label: "Налични" },
];

const MainFilter = ({ selected, onChange }) => {
  return (
    <>
      <h4 className="font-semibold mb-2 mt-4 underline decoration-primary underline-offset-2">
        ФИЛТЪР
      </h4>
      <div className="flex flex-col gap-2">
        {filtersList.map((f) => (
          <CustomCheckbox
            key={f.id}
            label={`${f.label}`}
            checked={selected.includes(f.id)}
            onChange={() => onChange(f.id)}
          />
        ))}
      </div>
    </>
  );
}

export default MainFilter
