"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#050709] p-6">
      <div className="bg-[#140C1C] text-center rounded-lg p-8 max-w-md w-full border border-[#27272A] shadow-lg">
        <h2 className="text-[#8750F7] text-3xl font-bold mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-[#989BA4] text-lg mb-4">{error?.message}</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-[#8750F7] hover:bg-[#733DD6] text-white text-xl rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8750F7] focus:ring-offset-2"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
