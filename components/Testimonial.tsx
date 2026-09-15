"use client"
const testimonials = [
  {
    initials: "EA",
    name: "Emmanuel Amos",
    role: "Freelance Designer · London",
    review:
      "MoneyTrack made it much easier to understand where my money goes. I can finally keep track of my spending without guessing.",
  },
  {
    initials: "DA",
    name: "David Adegun",
    role: "Startup Founder · Ibadan",
    review:
      "I used to lose track of small expenses. MoneyTrack gives me a clear picture of my spending and helps me stay within my limits.",
  },
  {
    initials: "GW",
    name: "Gift Waterway",
    role: "Business Owner · Port-Harcourt",
    review:
      "The spending insights are simple but useful. I now know exactly what I'm spending on and where I need to cut back.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            WHAT PEOPLE SAY
          </p>

          <h2 className="text-4xl font-black tracking-tight text-black sm:text-5xl">
            Better money habits.
            <span className="text-gray-400"> Made simple.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-600/10"
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    className="h-4 w-4 text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.78l-5.2 2.74.99-5.8-4.21-4.1 5.82-.85L10 1.5z" />
                  </svg>
                ))}
              </div>

              <p className="min-h-[120px] text-[15px] leading-7 text-gray-600">
                “{testimonial.review}”
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                  {testimonial.initials}
                </div>

                <div>
                  <p className="text-sm font-bold text-black">
                    {testimonial.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

