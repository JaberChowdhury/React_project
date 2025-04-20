import React from "react";
import { useBooks } from "~/context/BookProvider";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
const Books = () => {
  const { books, loading, error } = useBooks();
  return (
    <div className="w-full flex justify-center items-center flex-col gap-y-4">
      <div className="w-full text-center text-6xl">Books</div>
      <div>{error && error}</div>
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        <div className="w-full grid justify-center items-center grid-cols-3 gap-4">
          {/* <div className="w-full flex justify-between items-center flex-wrap"> */}
          {books?.map((item, id) => {
            return (
              <Link
                to={`/book/${item.bookId}`}
                key={id}
                className="border border-slate-500 p-4 gap-4 flex justify-center items-center flex-col rounded-md w-full h-full cursor-pointer"
              >
                <div className="bg-[#F3F3F3] p-3 py-5 px-24 rounded-md">
                  <img
                    width={180}
                    src={item.image}
                    alt={item.bookName}
                    loading="lazy"
                  />
                </div>
                <div className="flex justify-start items-center gap-2 w-full">
                  {item.tags.map((tag) => {
                    return (
                      <div
                        className="text-green-800 bg-green-200 px-4 rounded-full text-xs"
                        key={crypto.randomUUID()}
                      >
                        {tag}
                      </div>
                    );
                  })}
                </div>
                <p className="text-2xl font-bold w-full text-left">
                  {item.bookName}
                </p>
                <p className="w-full text-xs">By : {item.author}</p>
                <div className="w-full flex justify-between items-center border-t border-t-slate-400 pt-4 border-dashed">
                  <div className=" text-xs text-slate-400 ">
                    {item.category}
                  </div>
                  <div className=" text-xs text-slate-400 flex gap-x-3 justify-center items-center">
                    {item.rating} <FaStar />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Books;
