import { useCallback } from "react";
import ReactFlow, {
  Background,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

import notes from "../assets/notes.svg";

const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 200 },
    data: {
      label: (
        <div className="flex items-center flex-col justify-between p-3">
          <div>
            <img src={notes} alt="" className="h-10 w-auto" />
          </div>
          <div>
            <p>First we grather requirements</p>
          </div>
        </div>
      ),
    },
  },
  {
    id: "2",
    position: { x: 300, y: 200 },
    data: {
      label: (
        <div className="flex items-center flex-col justify-between p-3">
          <div>
            <img src={notes} alt="" className="h-10 w-auto" />
          </div>
          <div>
            <p>First we grather requirements</p>
          </div>
        </div>
      ),
    },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true, type: "smoothstep" },
];

const Process = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="h-[50vh] md:w-[80%] w-[90%] mx-auto overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        zoomOnDoubleClick
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Process;
