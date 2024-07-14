import React from "react";
import { GardenChart } from "../ui/1 - gardenChart";

export default function OurImpact() {
  return (
    <div className="relative bg-neutral-100 text-green-800 w-full pb-14 border-y border-neutral-200">
      <div className="mx-auto max-w-[1140px] px-6 py-20 lg:py-32 lg:px-8 relative grid lg:grid-cols-2 gap-12 -mb-12">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tighter">
              Our Impact on Communities.
            </h2>
            <p className="text-lg mt-4 tracking-tight text-green-950">
              We have helped over 600 communities start gardens in their
              neighborhoods. These gardens have provided fresh produce to over
              2,000 families, helped reduce food insecurity in these
              communities, and brought people together.
            </p>
            <p className="text-lg mt-4 tracking-tight text-green-950">
              Our organization has also helped over 100 schools start gardens on
              their campuses. These gardens have provided fresh produce to over
              1,000 students and taught them about the importance of healthy
              eating and sustainability.
            </p>
            <p className="text-lg mt-4 tracking-tight text-green-950">
              We are incredibly proud of our impact on these communities and
              schools and look forward to continuing to help more people start
              gardens in the future.
            </p>
          </div>
        </div>

        <div className="relative sm:p-4 lg:p-0">
          <GardenChart className="lg:absolute z-10 lg:ml-7 scale-05" />
          <GardenChart className="absolute translate-x-12 opacity-60  rotate-6 hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
