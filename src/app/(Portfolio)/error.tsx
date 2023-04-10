"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Everything broke somehow.</h2>
      <button onClick={() => reset()}>Reload the Page</button>
    </div>
  );
}
``