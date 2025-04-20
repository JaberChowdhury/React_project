import React, { useState } from "react";
import { DiVim } from "react-icons/di";
import Booklist from "~/components/Booklist";
import WishlistComponents from "~/components/WishlistComponents";

const ListedBooks = () => {
  const [tab, setTab] = useState("booklist");
  return (
    <div className="w-full space-y-7">
      <div className="bg-black/[0.1] rounded-md text-center text-6xl py-6">
        Books
      </div>
      <div className="w-full space-x-5 border-b border-b-slate-600">
        <button
          onClick={() => setTab("booklist")}
          className={
            tab === "booklist"
              ? "p-3 bg-black text-white rounded-t-md "
              : "p-3 cursor-pointer"
          }
        >
          Read books
        </button>
        <button
          onClick={() => setTab("wishlist")}
          className={
            tab === "wishlist"
              ? " p-3 bg-black text-white rounded-t-md "
              : "p-3 cursor-pointer"
          }
        >
          Wishlist
        </button>
      </div>
      <div>{tab === "booklist" ? <Booklist /> : <WishlistComponents />}</div>
    </div>
  );
};

export default ListedBooks;
