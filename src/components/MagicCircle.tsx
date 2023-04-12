const MagicCircle: React.FC = () => {
  // TODO edit circle's styling and animation
  // TODO trying passing the logo element in as a child and using this as wrapper
  return (
    <div className="top-0 left-0">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="h-10 w-auto top-0 left-0">
        <path
          d="m 381 115.23 l -291.93 212.06 h 360.85 l -291.93 -212.06 l 111.5 343.12 z"
          fill="none"
          stroke="#1a1a1a"
          stroke-width="25"
        />
        <circle cx="269.5" cy="269.5" r="237.5" fill="none" stroke="#fff" stroke-width="32" />
      </svg>
    </div>
  );
};

export default MagicCircle;
