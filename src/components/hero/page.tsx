import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-gray-400 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-7xl mb-4 font-medium text-white">
            Discover Digital Art & Collectibles
            {/* <br className="hidden lg:inline-block">readymade gluten</br> */}
          </h1>
          <p className="mb-8 leading-relaxed">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Button
            </button>
          </div>
          <section className="text-gray-400 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 mr-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                    2.7K
                  </h2>
                  <p className="leading-relaxed">Users</p>
                </div>
                <div className="p-4 mr-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                    1.8K
                  </h2>
                  <p className="leading-relaxed">Subscribes</p>
                </div>
                <div className="p-4 mr-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                    35
                  </h2>
                  <p className="leading-relaxed">Downloads</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={"/nft-placeholder.png"}
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
