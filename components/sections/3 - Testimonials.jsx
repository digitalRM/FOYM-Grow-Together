import React from "react";

const testimonials = [
  {
    name: "Brandon Dock",
    title: "Superintendent, The School District",
    image:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=3024&auto=format&fit=crop",
    quote:
      "Having gardens on our school campuses has been a game changer for our students. They have learned so much about healthy eating and sustainability and have enjoyed fresh produce from the gardens. We are so grateful for Grow Together's support in helping us start these gardens.",
  },
  {
    name: "Joan Smith",
    title: "Community Leader, The Neighborhood",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop",
    quote:
      "The community garden that Grow Together helped us start has brought our neighborhood together in so many ways. We have enjoyed working together to grow fresh produce and have shared many meals together. The garden has genuinely transformed our community for the better.",
  },
];

export default function Testimonials() {
  return (
    <div className="relative text-green-950 w-full pb-14">
      <div className="mx-auto max-w-[1140px] px-6 py-20 lg:py-32 md:grid-cols-2 lg:px-8 relative grid gap-3">
        {testimonials.map(({ name, title, quote, image }) => (
          <div
            key={name}
            className="flex flex-col gap-6 bg-neutral-100 rounded-2xl border border-neutral-200 p-8"
          >
            <p className=" text-lg text-left tracking-tight">{quote}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-800 rounded-full border border-green-700 overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover rounded-full grayscale"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
                <p className="text-sm text-green-600">{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
