import React, { useContext } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AuctionItemContext } from '@/context/AuctionItemProvider';
import AuctionItem from './AuctionItem';

const Auctionlist = () => {
  const context = useContext(AuctionItemContext);

  if (!context) {
    return <p>Loading...</p>;
  }

  const { items } = context;

  return (
    <Table className="bg-white w-4/5 rounded-md text-xl">
      <TableHeader>
        <TableRow>
          <TableHead>Items</TableHead>
          <TableHead></TableHead>
          <TableHead>Current Bid</TableHead>
          <TableHead>Time Bid</TableHead>
          <TableHead>Bid Now</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((d, id) => (
          <AuctionItem key={id} data={d} />
        ))}
      </TableBody>
    </Table>
  );
};

export default Auctionlist;
