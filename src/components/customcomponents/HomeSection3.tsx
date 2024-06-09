export default function HomeSection3() {
  return (
    <div className="w-full h-auto dark:bg-black bg-white py-10 md:pt-10 md:pb-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="px-6 text-center text-3xl font-bold md:text-4xl lg:px-12 xl:text-5xl">
          Travel planning simplified with <span className="text-indigo-300">Hadana!</span>
          </h3>
          <p className="mx-auto mb-2 mt-8 max-w-2xl text-lg text-gray-500">
          Say goodbye to endless scrolling and indecision—let Hadana AI craft your next adventure effortlessly.
          </p>
        </div>
        <div className="mx-auto mt-10 grid h-full max-w-6xl grid-cols-1 flex-wrap items-start gap-5 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <div className="w-full h-full flex-1 rounded-xl border border-solid border-gray-200 p-6 last:md:col-span-2 last:lg:col-span-1">
            <div className="flex items-center gap-3">
              {/* <img alt="" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" class="h-[3rem] w-auto md:h-[5rem]" srcset="/_next/image?url=%2Fillustrations%2Fmap.webp&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fillustrations%2Fmap.webp&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fillustrations%2Fmap.webp&amp;w=640&amp;q=75" style="color: transparent;"> */}
              <p className="leading-2 max-w-[12rem] text-lg font-bold text-gray-300 md:text-xl lg:text-2xl">
                Optimal Route Planning
              </p>
            </div>
            <p className="mt-2 text-base text-gray-500 md:text-lg">
              Our AI algorithms analyze your preferences to craft the most
              efficient route, saving you time and effort.
            </p>
          </div>
          <div className="w-full h-full flex-1 rounded-xl border border-solid border-gray-200 p-6 last:md:col-span-2 last:lg:col-span-1">
            <div className="flex items-center gap-3">
              {/* <img alt="" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" class="h-[3rem] w-auto md:h-[5rem]" srcset="/_next/image?url=%2Fillustrations%2Fstory.webp&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fillustrations%2Fstory.webp&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fillustrations%2Fstory.webp&amp;w=640&amp;q=75" style="color: transparent;"> */}
              <p className="leading-2 max-w-[12rem] text-lg font-bold text-gray-300 md:text-xl lg:text-2xl">
                Personalize Your Adventure
              </p>
            </div>
            <p className="mt-2 text-base text-gray-500 md:text-lg">
              Shape your journey by freely adding, editing, or deleting
              activities from your itinerary.
            </p>
          </div>
          <div className="w-full h-full flex-1 rounded-xl border border-solid border-gray-200 p-6 last:md:col-span-2 last:lg:col-span-1">
            <div className="flex items-center gap-3">
              {/* <img alt="" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" class="h-[3rem] w-auto md:h-[5rem]" srcset="/_next/image?url=%2Fillustrations%2Ffood.webp&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fillustrations%2Ffood.webp&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fillustrations%2Ffood.webp&amp;w=640&amp;q=75" style="color: transparent;"> */}
              <p className="leading-2 max-w-[12rem] text-lg font-bold text-gray-300 md:text-xl lg:text-2xl">
                Local Cuisine Recommendations
              </p>
            </div>
            <p className="mt-2 text-base text-gray-500 md:text-lg">
              Discover local cuisines and hidden gems recommended by our AI,
              tailored to your taste buds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
