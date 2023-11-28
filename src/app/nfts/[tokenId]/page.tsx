"use client";
import { useRouter } from "next/navigation";
import NFTCard from "../../../components/NFTCard";

const NFTDetails = () => {
  const router = useRouter();

  // Fetch NFT details based on the tokenId (replace this with your data fetching logic)
  const nft = {
    tokenId: "1",
    name: "Abstract Art",
    description: "A beautiful piece of abstract art",
    image: "https://dummyimage.com/600x360",
    owner: "0x123456789ABCDEF123456789ABCDEF",
    creator: "0xABCDEF123456789ABCDEF123456789",
    mintDate: new Date(),
    price: 1.5,
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <NFTCard nft={nft} index={1} />
      {/* Add additional details or components as needed */}
    </div>
  );
};

export default NFTDetails;
