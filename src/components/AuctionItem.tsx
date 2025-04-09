import { MdFavorite } from 'react-icons/md';
import { TableRow, TableCell } from './ui/table';
import {
  AuctionItemContext,
  type AuctionItem,
} from '@/context/AuctionItemProvider';
import { useContext } from 'react';

const AuctionItem = ({ data }: { data: AuctionItem }) => {
  const d = data;

  const context = useContext(AuctionItemContext);

  if (!context) {
    return <p>Loading...</p>;
  }

  const { handleSelect } = context;
  return (
    <TableRow>
      <TableCell className="flex items-center w-4/5">
        <img
          className="m-2 object-contain"
          src={d.image}
          alt={d.title}
          loading="lazy"
          width={80}
          height={80}
        />
        <p>{d.title}</p>
      </TableCell>
      <TableCell></TableCell>
      <TableCell>{d.currentBidPrice}</TableCell>
      <TableCell>{d.timeLeft}</TableCell>
      <TableCell className="flex justify-center items-center">
        {!d.isSelected ? (
          <MdFavorite
            onClick={() => handleSelect(d.id)}
            className="text-3xl text text-red-600"
          />
        ) : (
          <MdFavorite
            // onClick={() => handleSelect(d.id)}
            className="text-3xl text text-red-200"
          />
        )}
      </TableCell>
    </TableRow>
  );
};

export default AuctionItem;
