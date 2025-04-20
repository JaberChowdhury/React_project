import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router";
import { useBooks } from "~/context/BookProvider";

const WishlistComponents = () => {
  const { wishlist } = useBooks();
  return (
    <div className="w-full space-y-7">
      {wishlist.length === 0 ? (
        <div>add item in your wishlist</div>
      ) : (
        wishlist?.map((book, id) => {
          return (
            <div key={id} className="flex gap-x-4 justify-center items-center">
              <div className="p-5 bg-slate-400/[0.2] rounded-md">
                <img
                  src={book.image}
                  alt={book.bookName}
                  loading="lazy"
                  width={150}
                />
              </div>
              <div className="w-full space-y-4">
                <div className="text-2xl">{book.bookName}</div>
                <div className="text-xs">By : {book.author}</div>
                <div className="flex gap-x-3">
                  <div>Tag : </div>
                  {book.tags.map((tag) => {
                    return (
                      <div
                        key={tag}
                        className="text-green-800 bg-green-200 px-4 rounded-full text-xs flex justify-center items-center"
                      >
                        #{tag}
                      </div>
                    );
                  })}
                  <div className="text-slate-400">
                    Year of publishing {book.yearOfPublishing}
                  </div>
                </div>
                <div className="flex gap-x-4 text-slate-500">
                  <div>
                    Publisher: <span>{book.publisher}</span>
                  </div>
                  <div>page {book.totalPages}</div>
                </div>
                <div className="flex gap-x-5">
                  <div className="bg-blue-200 p-1 py-1 px-6 rounded-full text-blue-500">
                    Catagory : {book.category}
                  </div>
                  <div className="bg-orange-200 p-1 py-1 px-6 rounded-full text-orange-500">
                    Rating : {book.rating}
                  </div>
                  <Link to={`/book/${book.bookId}`}>
                    <button className="bg-green-200 p-1 py-1 px-6 rounded-full text-green-600 cursor-pointer">
                      view details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default WishlistComponents;
