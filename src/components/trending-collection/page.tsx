import Image from "next/image";
import Link from "next/link";
import NFTCard, { NftProp } from "../NFTCard";

// Dummy data for NFTs
const dummyNFTs: NftProp[] = [
  {
    tokenId: "1",
    name: "Abstract Art",
    description: "A beautiful piece of abstract art",
    image: "https://dummyimage.com/600x360",
    owner: "0x123456789ABCDEF123456789ABCDEF",
    creator: "0xABCDEF123456789ABCDEF123456789",
    mintDate: new Date(),
    price: 1.5,
  },
  {
    tokenId: "2",
    name: "Digital Landscape",
    description: "A stunning digital landscape",
    image: "https://dummyimage.com/600x360",
    owner: "0xABCDEF123456789ABCDEF123456789",
    creator: "0x123456789ABCDEF123456789ABCDEF",
    mintDate: new Date(),
    price: 2.0,
  },
  // Add more dummy NFTs as needed
];

interface TrendingCollectionProps {
  nfts?: NftProp[];
}

export default function TrendingCollection({
  nfts = dummyNFTs,
}: TrendingCollectionProps) {
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
          {nfts.map((nft, index) => (
            <div
              key={index}
              className="lg:w-1/3 sm:w-1/2 p-4 transition duration-300 hover:opacity-80"
            >
              <NFTCard nft={nft} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
