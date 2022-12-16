import type { Nft } from 'lens';
import type { FC } from 'react';
import React from 'react';

import NFTCard from './NFTCard';

type Props = {
  nfts: Nft[];
};

const Gallery: FC<Props> = ({ nfts }) => {
  return (
    <div className="columns-3">
      {nfts?.map((nft) => (
        <div
          key={`${nft?.chainId}_${nft?.contractAddress}_${nft?.tokenId}`}
          className="break-inside text-white flex w-full items-center overflow-hidden"
        >
          <NFTCard nft={nft as Nft} linkToDetail={true} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;