type ToolLabel = { name: string; manual?: boolean };

type Phase = {
  num: string;
  name: string;
  tools?: ToolLabel[];
};

const PHASES: Phase[] = [
  { num: "1", name: "DISCOVER" },
  { num: "2", name: "DECIDE" },
  { num: "3", name: "COLLECT", tools: [{ name: "Apify" }] },
  { num: "4", name: "ANALYZE" },
  {
    num: "5",
    name: "GENERATE",
    tools: [{ name: "Suno" }, { name: "Whisper", manual: true }],
  },
  { num: "6", name: "COMPOSE", tools: [{ name: "ffmpeg" }] },
  {
    num: "7",
    name: "PUBLISH",
    tools: [{ name: "send tap", manual: true }],
  },
  { num: "8", name: "REVIEW" },
];

export function DouyinAgentDiagram() {
  const W = 1200;
  const H = 480;
  const PHASE_W = 125;
  const PHASE_H = 60;
  const PHASE_GAP = 15;
  const START_X = 50;
  const PHASE_Y = 180;
  const x = (i: number) => START_X + i * (PHASE_W + PHASE_GAP);
  const cx = (i: number) => x(i) + PHASE_W / 2;

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block h-auto w-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dyGoldGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E8CC85" />
            <stop offset="50%" stopColor="#A6824A" />
            <stop offset="100%" stopColor="#5C4A22" />
          </linearGradient>
          <marker
            id="dyArrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--color-ink)" />
          </marker>
          <marker
            id="dyGoldArrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill="#5C4A22" />
          </marker>
        </defs>

        {/* Diagram title */}
        <text
          x={W / 2}
          y={24}
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fontWeight="500"
          letterSpacing="2.5"
          fill="var(--color-ink-secondary)"
        >
          DOUYIN AUTOMATION · AGENT ARCHITECTURE
        </text>

        {/* Claude orchestrator badge */}
        <g transform="translate(525, 56)">
          <rect
            width="150"
            height="48"
            stroke="var(--color-ink)"
            strokeWidth="0.7"
            fill="var(--color-bg)"
          />
          <text
            x="75"
            y="20"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="8"
            fontWeight="500"
            letterSpacing="2"
            fill="var(--color-ink-secondary)"
          >
            ORCHESTRATOR
          </text>
          <text
            x="75"
            y="38"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="15"
            fontWeight="200"
            fill="var(--color-ink)"
          >
            Claude
          </text>
        </g>

        {/* Connector from Claude down to fan-out line */}
        <line
          x1={W / 2}
          y1={104}
          x2={W / 2}
          y2={140}
          stroke="var(--color-ink-secondary)"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />

        {/* Horizontal fan-out line spanning all phases */}
        <line
          x1={cx(0)}
          y1={140}
          x2={cx(7)}
          y2={140}
          stroke="var(--color-ink-secondary)"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />

        {/* Drop-down lines from fan-out to each phase */}
        {PHASES.map((_, i) => (
          <line
            key={`drop-${i}`}
            x1={cx(i)}
            y1={140}
            x2={cx(i)}
            y2={PHASE_Y}
            stroke="var(--color-ink-secondary)"
            strokeWidth="0.5"
            strokeDasharray="2 3"
          />
        ))}

        {/* Phase boxes */}
        {PHASES.map((p, i) => (
          <g key={`phase-${i}`}>
            <rect
              x={x(i)}
              y={PHASE_Y}
              width={PHASE_W}
              height={PHASE_H}
              stroke="var(--color-ink)"
              strokeWidth="0.7"
              fill="var(--color-bg)"
            />
            <text
              x={cx(i)}
              y={PHASE_Y + 22}
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="8"
              fontWeight="500"
              letterSpacing="1.5"
              fill="var(--color-ink-secondary)"
            >
              §{p.num}
            </text>
            <text
              x={cx(i)}
              y={PHASE_Y + 42}
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fontWeight="300"
              letterSpacing="1.2"
              fill="var(--color-ink)"
            >
              {p.name}
            </text>
          </g>
        ))}

        {/* Arrows between adjacent phases */}
        {PHASES.slice(0, -1).map((_, i) => {
          const ax1 = x(i) + PHASE_W;
          const ax2 = x(i + 1) - 1;
          const ay = PHASE_Y + PHASE_H / 2;
          return (
            <line
              key={`arrow-${i}`}
              x1={ax1}
              y1={ay}
              x2={ax2}
              y2={ay}
              stroke="var(--color-ink)"
              strokeWidth="0.7"
              markerEnd="url(#dyArrow)"
            />
          );
        })}

        {/* Tool labels below relevant phases (italic = manual trigger) */}
        {PHASES.map((p, i) =>
          p.tools && p.tools.length > 0 ? (
            <g key={`tool-${i}`}>
              <line
                x1={cx(i)}
                y1={PHASE_Y + PHASE_H}
                x2={cx(i)}
                y2={PHASE_Y + PHASE_H + 16}
                stroke="var(--color-ink-secondary)"
                strokeWidth="0.4"
                strokeDasharray="2 3"
              />
              {p.tools.map((tool, ti) => (
                <text
                  key={ti}
                  x={cx(i)}
                  y={PHASE_Y + PHASE_H + 30 + ti * 15}
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="10"
                  fontWeight="300"
                  fontStyle={tool.manual ? "italic" : "normal"}
                  fill="var(--color-ink-secondary)"
                >
                  {tool.name}
                </text>
              ))}
            </g>
          ) : null,
        )}

        {/* Feedback loop — gold arc beneath phases, REVIEW → DISCOVER */}
        <path
          d={`M ${cx(7)} ${PHASE_Y + PHASE_H + 6} C ${cx(7)} ${PHASE_Y + PHASE_H + 140}, ${cx(0)} ${PHASE_Y + PHASE_H + 140}, ${cx(0)} ${PHASE_Y + PHASE_H + 18}`}
          stroke="url(#dyGoldGrad)"
          strokeWidth="0.9"
          fill="none"
          markerEnd="url(#dyGoldArrow)"
        />

        {/* Feedback label */}
        <text
          x={W / 2}
          y={PHASE_Y + PHASE_H + 115}
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          fontWeight="500"
          letterSpacing="2"
          fill="#5C4A22"
        >
          FEEDBACK LOOP — REVIEW PRIORITY → DISCOVER WEIGHTS
        </text>

        {/* Legend at bottom */}
        <g transform={`translate(50, ${H - 38})`}>
          <text
            x={0}
            y={0}
            fontFamily="Inter, sans-serif"
            fontSize="8"
            fontWeight="500"
            letterSpacing="1.6"
            fill="var(--color-ink-secondary)"
          >
            LEGEND
          </text>
          {/* automated */}
          <g transform="translate(0, 14)">
            <rect width="16" height="9" stroke="var(--color-ink)" strokeWidth="0.7" fill="none" />
            <text
              x={22}
              y={8}
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fontWeight="300"
              fill="var(--color-ink-secondary)"
            >
              Claude-driven phase
            </text>
          </g>
          {/* manual */}
          <g transform="translate(180, 14)">
            <text
              x={0}
              y={8}
              fontFamily="Inter, sans-serif"
              fontSize="9"
              fontWeight="500"
              letterSpacing="1.5"
              fill="var(--color-ink-secondary)"
              fontStyle="italic"
            >
              manual
            </text>
            <text
              x={42}
              y={8}
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fontWeight="300"
              fill="var(--color-ink-secondary)"
            >
              human intervention point
            </text>
          </g>
          {/* feedback */}
          <g transform="translate(420, 14)">
            <line
              x1={0}
              y1={5}
              x2={20}
              y2={5}
              stroke="url(#dyGoldGrad)"
              strokeWidth="0.9"
            />
            <text
              x={26}
              y={8}
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fontWeight="300"
              fill="var(--color-ink-secondary)"
            >
              feedback loop (REVIEW → DISCOVER)
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
