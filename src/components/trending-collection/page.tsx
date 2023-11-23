import Image from "next/image";
import Link from "next/link";

export default function TrendingCollection() {
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Trending Collection
          </h1>
          <p className="lg:w-2/3 leading-relaxed text-base">
            Checkout Our Weekly Updated Trending Collections
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Link
              href="/"
              key={index}
              className="lg:w-1/3 sm:w-1/2 p-4 transition duration-0 hover:duration-150"
            >
              <div className="flex relative">
                <Image
                  width={600}
                  height={300}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
              <div>
                <h1>Design Animals</h1>
                <div className="flex">
                  <h1>Creator</h1>
                  <span>User 1</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
