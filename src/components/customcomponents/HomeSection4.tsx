export default function HomeSection4() {
  return (
    <div className="w-full h-auto md:h-[calc(100vh-5rem)] dark:bg-black bg-white pb-8 md:pb-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="px-6 text-center text-3xl font-bold md:text-4xl lg:px-12 xl:text-5xl">
            Testimonials from our users
          </h3>
          <p className="mx-auto mb-2 mt-8 max-w-2xl text-lg text-gray-500">
            Check out what our users have to say about how Hadana transformed
            their travel experiences!
          </p>
        </div>
        <div className="mx-auto mt-10 grid h-full max-w-6xl grid-cols-1 flex-wrap items-start gap-5 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <div className="w-full h-full flex-1 rounded-xl border border-solid border-gray-200 p-6 last:md:col-span-2 last:lg:col-span-1">
            <p className="mt-2 text-base text-gray-500 md:text-lg">
              Using Hadana was a game-changer for my Thailand trip. Their AI
              provided spot-on recommendations for activities, and activities,
              making my journey seamless and unforgettable. From hidden gems in
              <span className="font-bold text-gray-300">
                {" "}
                Bangkok to Phuket&apos;s serene beaches
              </span>
              , every detail was planned. Hadana truly elevated my travel
              experience. Highly recommended!
            </p>
            <p>
              <span className=" text-base text-gray-500 md:text-lg italic">
                - Vara
              </span>
            </p>
          </div>
          <div className="w-full h-full flex-1 rounded-xl border border-solid border-gray-200 p-6 last:md:col-span-2 last:lg:col-span-1">
            <p className="mt-2 text-base text-gray-500 md:text-lg">
              Planning a{" "}
              <span className="font-bold text-gray-300">South India</span> trip
              felt daunting, but Hadana changed everything! Their AI
              recommendations were spot-on - hidden gems, must-see temples, and
              delicious local eats I wouldn&apos;t have found otherwise. Hadana
              curated the perfect itinerary, saving me tons of time and ensuring
              an unforgettable adventure. South India - you stole my heart, and
              Hadana made it all possible!
            </p>
            <p>
              <span className=" text-base text-gray-500 md:text-lg italic">
                - Meghna
              </span>
            </p>
          </div>
          <div className="w-full h-full flex-1 rounded-xl border border-solid border-gray-200 p-6 last:md:col-span-2 last:lg:col-span-1">
            <p className="mt-2 text-base text-gray-500 md:text-lg">
              Hadana was a lifesaver for my recent trip to{" "}
              <span className="font-bold text-gray-300"> Europe </span>. Their
              AI recommendations were excellent, taking me beyond the tourist
              hotspots. I explored hidden gems, enjoyed delicious local cuisine,
              and even found some great deals on unique experiences.
              Hadana&apos;s curated itinerary saved me time and made sure my
              European adventure was unforgettable. Highly recommend!
            </p>
            <p>
              <span className=" text-base text-gray-500 md:text-lg italic">
                - Haneef Ahmed
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
