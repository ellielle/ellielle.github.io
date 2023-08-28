export default function Hamburger({
  className,
  onClickHandler,
}: {
  className: string;
  onClickHandler: () => void;
}): JSX.Element {
  return (
    <svg
      className={`svg-logo  h-[1.5rem] ${className} z-[13]`}
      viewBox="0 0 100 80"
      onClick={onClickHandler}
    >
      <rect width="100" height="15"></rect>
      <rect y="30" width="100" height="15"></rect>
      <rect y="60" width="100" height="15"></rect>
    </svg>
  );
}
