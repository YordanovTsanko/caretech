import React, { useMemo } from "react";
import CustomCheckbox from "../CustomCheckbox";

const ManufacturerFilter = ({ products, selected, onChange }) => {
  const manufacturers = useMemo(() => {
    const counts = {};
    products?.forEach((p) => {
      const name = p.manufacturer?.name || "Unknown";
      counts[name] = (counts[name] || 0) + 1;
    });

    return Object.entries(counts).map(([name, count]) => ({
      name,
      count,
    }));
  }, [products]);

  return (
    <>
      <h4 className="font-semibold mb-2 mt-4 underline decoration-primary underline-offset-2">
        ПРОИЗВОДИТЕЛИ
      </h4>
      <div className="flex flex-col gap-2">
        {manufacturers.map((m) => (
          <CustomCheckbox
            key={m.name}
            label={`${m.name} (${m.count})`}
            checked={selected.includes(m.name)}
            onChange={() => onChange(m.name)}
          />
        ))}
      </div>
    </>
  );
};

export default ManufacturerFilter;
