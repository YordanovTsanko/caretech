import React, { useMemo } from "react";
import CustomCheckbox from "../CustomCheckbox";

const ProcessorFilter = ({ products, selected, onChange }) => {
  const processors = useMemo(() => {
    const counts = {};
    products?.forEach((p) => {
      const name = p.processor?.model || "Unknown";
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
        МОДЕЛ ПРОЦЕСОР
      </h4>
      <div className="flex flex-col gap-2">
        {processors.map((proc) => (
          <CustomCheckbox
            key={proc.name}
            label={`${proc.name} (${proc.count})`}
            checked={selected.includes(proc.name)}
            onChange={() => onChange(proc.name)}
          />
        ))}
      </div>
    </>
  );
};

export default ProcessorFilter;
