import { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import coding from "../assets/coding.svg";
import deal from "../assets/deal.svg";
import deployment from "../assets/deployment.svg";
import meeting from "../assets/meeting.svg";
import notes from "../assets/notes.svg";
import prototype from "../assets/prototype.svg";
import qa from "../assets/qa.svg";
import support from "../assets/support.svg";
import walkthrough from "../assets/walkthrough.svg";
import ProcessCard from "./ProcessCard";

const nodeTypes = {
  custom: ProcessCard,
};

const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 100, y: 200 },
    data: {
      image: notes,
      title: "1. Gathering requirements",
      description:
        "Collaboratively gathering customer needs, assessing scope, and developing project requirements.",
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 350, y: 200 },
    data: {
      image: deal,
      title: "2. Contract negotiation",
      description:
        "Settling on conditions, parameters, and agreements before starting a project.",
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 600, y: 200 },
    data: {
      image: prototype,
      title: "3. Design and prototyping",
      description:
        "Developing interactive models and visual concepts to describe the functioning and organization of the software.",
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 850, y: 200 },
    data: {
      image: walkthrough,
      title: "4. Requirements walkthrough",
      description:
        "Reviewing project requirements with involved parties to guarantee mutual understanding and correctness.",
    },
  },
  {
    id: "5",
    type: "custom",
    position: { x: 1100, y: 200 },
    data: {
      image: coding,
      title: "5. Coding",
      description:
        "Writing and implementing source code based on design and functional requirements.",
    },
  },
  {
    id: "6",
    type: "custom",
    position: { x: 1350, y: 200 },
    data: {
      image: meeting,
      title: "6. Meetings",
      description:
        "Brief sync meetings: progress, challenges, task alignment within the team.",
    },
  },
  {
    id: "7",
    type: "custom",
    position: { x: 1600, y: 200 },
    data: {
      image: qa,
      title: "7. Quality assurance",
      description:
        "Systematic process of ensuring software quality, identifying defects, and maintaining standards.",
    },
  },
  {
    id: "8",
    type: "custom",
    position: { x: 1850, y: 200 },
    data: {
      image: deployment,
      title: "8. Deployment",
      description:
        "Releasing the developed software for use, making it accessible to users or customers.",
    },
  },
  {
    id: "9",
    type: "custom",
    position: { x: 2100, y: 200 },
    data: {
      image: support,
      title: "9. Maintenance and support",
      description:
        "Continuously managing, updating, and resolving issues to keep software functional and efficient.",
    },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    type: "smoothstep",
    style: {
      stroke: "#489dda",
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    type: "smoothstep",
    style: {
      stroke: "#489dda",
    },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    type: "smoothstep",
    style: {
      stroke: "#489dda",
    },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
    type: "smoothstep",
    style: {
      stroke: "#489dda",
    },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    animated: true,
    type: "smoothstep",
    style: {
      stroke: "#489dda",
    },
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
    animated: true,
    type: "smoothstep",
    style: {
      stroke: "#489dda",
    },
  },
  {
    id: "e7-8",
    source: "7",
    target: "8",
    animated: true,
    type: "smoothstep",
    style: {
      stroke: "#489dda",
    },
  },
  {
    id: "e8-9",
    source: "8",
    target: "9",
    animated: true,
    type: "smoothstep",
    style: {
      stroke: "#489dda",
    },
  },
];

const minimapStyle = {
  height: 120,
};

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
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        zoomOnDoubleClick
        nodesDraggable={false}
      >
        <Background />
        <Controls showInteractive />
        <MiniMap style={minimapStyle} zoomable pannable />
      </ReactFlow>
    </div>
  );
};

export default Process;
