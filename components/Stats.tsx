"use client";

export default function Stats() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="text-center">
            <p className="text-3xl font-black text-white">
              10K<span className="text-indigo-600">+</span>
            </p>
            <p className="mt-1 text-sm text-gray-400">Users</p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-black text-white">
              100<span className="text-indigo-600">%</span>
            </p>
            <p className="mt-1 text-sm text-gray-400">Financial visibility</p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-black text-white">
              24<span className="text-indigo-600">/7</span>
            </p>
            <p className="mt-1 text-sm text-gray-400">Access</p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-black text-white">
              4<span className="text-indigo-600">+</span>
            </p>
            <p className="mt-1 text-sm text-gray-400">Finance tools</p>
          </div>
        </div>
      </div>
    </section>
  );
}
