export default function HomeSection4() {
  return (
    <div className="w-full h-auto md:h-[calc(100vh-5rem)] dark:bg-black bg-white py-10 md:pt-20 md:pb-0">
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
              Our AI algorithms analyze your preferences to craft the most
              efficient route, saving you time and effort.
            </p>
          </div>
          <div className="w-full h-full flex-1 rounded-xl border border-solid border-gray-200 p-6 last:md:col-span-2 last:lg:col-span-1">
            <p className="mt-2 text-base text-gray-500 md:text-lg">
              Shape your journey by freely adding, editing, or deleting
              activities from your itinerary.
            </p>
          </div>
          <div className="w-full h-full flex-1 rounded-xl border border-solid border-gray-200 p-6 last:md:col-span-2 last:lg:col-span-1">
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
