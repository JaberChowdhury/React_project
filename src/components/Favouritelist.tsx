import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from './ui/card';
import { GrFavorite } from 'react-icons/gr';
import { AuctionItemContext } from '@/context/AuctionItemProvider';
import { MdDelete } from 'react-icons/md';

const Noitem = () => {
  return (
    <>
      <CardContent className="text-center my-4">
        <CardHeader className="font-medium">No Favourites Yet</CardHeader>
        <CardDescription>
          Click the heart icon on any item to add it to your favorites
        </CardDescription>
      </CardContent>
    </>
  );
};

const Favouritelist = () => {
  const context = useContext(AuctionItemContext);

  if (!context) {
    return <p>Loading...</p>;
  }

  const { items, handleSelect } = context;

  const filteredItems = items.filter((item) => item.isSelected);
  const total_amount = filteredItems.reduce((acc, item) => {
    const price = parseFloat(item.currentBidPrice.replace(',', ''));
    const count = parseInt(item.bidsCount);
    return acc + price * count;
  }, 0);

  return (
    <Card className="rounded-md w-[35%]">
      {/* Render header of Favourite list */}
      <CardHeader className="flex gap-2 w-full text-center justify-center items-center border-b border-b-slate-200">
        <GrFavorite className="text-3xl" />
        <div>Favourite Items</div>
      </CardHeader>

      {/* Render no item message */}
      {filteredItems.length === 0 ? <Noitem /> : null}

      {/* Render Favourite list  */}
      {filteredItems.length > 0 && (
        <CardContent className="flex flex-col gap-4 gap-y-6">
          {filteredItems.map((d) => (
            <div
              key={d.id}
              className="border-b border-b-slate-200 py-5 flex justify-between items-center"
            >
              <div className="flex justify-between items-center">
                <img
                  className="m-2 object-contain"
                  src={d.image}
                  alt={d.title}
                  loading="lazy"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col gap-y-3">
                  <p>{d.title}</p>
                  <div className="flex justify-between items-center">
                    <div>${d.currentBidPrice}</div>
                    <div>Bids:{d.bidsCount}</div>
                  </div>
                </div>
              </div>
              <div className="mx-4">
                <MdDelete
                  onClick={() => handleSelect(d.id)}
                  className="size-8"
                />
              </div>
            </div>
          ))}
        </CardContent>
      )}

      {/* Render foter of Favourite list  */}
      <CardFooter className="w-full flex justify-between items-center border-t border-t-slate-200 font-bold">
        <div>Total bids Amount</div>
        <div>${total_amount}</div>
      </CardFooter>
    </Card>
  );
};

export default Favouritelist;
