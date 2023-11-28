import Image from "next/image";
import Link from "next/link";

export interface NftProp {
  tokenId: string;
  name: string;
  description: string;
  image: string;
  owner: string;
  creator: string;
  mintDate: Date;
  price?: number;
  sold?: boolean;
}

interface Prop {
  nft: NftProp;
  index: number;
}

export default function NFTCard({ nft }: Prop) {
  return (
    <Link
      href={"/nfts/[tokenId]"}
      as={`/nfts/${nft.tokenId}`}
      className="flex relative"
    >
      <Image
        width={600}
        height={300}
        alt="gallery"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={nft.image}
      />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">
          {nft.description}
        </h2>
        <h1 className="title-font text-lg font-medium text-white mb-3">
          {nft.name}
        </h1>
        <p className="leading-relaxed">{nft.price}</p>

        {/* Add styling to handle text overflow */}
        <div className="flex flex-col">
          <p className="leading-relaxed overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[200px] text-gray-500">
            Owner: {nft.owner}
          </p>
          <p className="leading-relaxed overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[200px] text-gray-500">
            Creator: {nft.creator}
          </p>
        </div>
      </div>
    </Link>
  );
}
