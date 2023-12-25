import React, { memo } from "react";
import { Handle, Position } from "reactflow";

function ProcessCard({ data }) {
  return (
    <div className="px-3 py-4 w-56 rounded-md border-2 bg-white">
      <div className="flex items-center flex-col justify-around gap-2">
        <div>
          <img src={data.image} alt="" className="h-10 w-auto" />
        </div>
        <div>
          <h1 className="font-bold text-sm text-secondary">{data.title}</h1>
        </div>
        <div className="text-center">
          <p className="text-xs">{data.description}</p>
        </div>
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default memo(ProcessCard);
