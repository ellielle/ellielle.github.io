"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }): JSX.Element {
  return (
    <div className="mt-10 flex flex-col items-center place-content-center">
      <h2>Everything broke somehow.</h2>
      <button onClick={() => reset()}>Reload the Page</button>
    </div>
  );
}
``;
