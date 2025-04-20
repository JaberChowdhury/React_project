import { useParams } from "react-router";
import { useBooks } from "~/context/BookProvider";
const Book = () => {
  const { id } = useParams();
  const { getBookById, setWishlistData, wishlist, deleteWishlistData } =
    useBooks();
  const bookdata = getBookById(Number(id));
  return (
    <div className="w-full p-3 ">
      {/* <div className="flex justify-center items-center "> */}
      <div className="w-full grid grid-cols-2 justify-center items-center gap-x-5  ">
        <div className="bg-[#131313]/[0.06] py-9 rounded-md flex justify-center items-center">
          <img width={500} src={bookdata?.image} alt={bookdata?.bookName} />
        </div>
        <div className=" flex justify-start items-start gap-y-6 flex-col">
          <p className="text-6xl">{bookdata?.bookName}</p>
          <p className="text-2xl">By : {bookdata?.author}</p>
          <div className="w-full border-t border-b my-4 text-2xl text-slate-400 border-t-slate-600 border-b-slate-500 py-3">
            {bookdata?.category}
          </div>
          <div className="w-xl">
            <span className="font-bold">Review : </span>
            <span className="text-black/[0.5]">{bookdata?.review}</span>
          </div>
          <div className="flex w-full justify-start gap-x-3">
            <div>Tag</div>
            {bookdata?.tags.map((tag) => (
              <div
                className="text-green-800 bg-green-200 px-4 rounded-full text-xs flex justify-center items-center"
                key={tag}
              >
                #{tag}
              </div>
            ))}
          </div>

          <div className=" w-56">
            <div className="flex justify-between items-center">
              <div className="text-slate-400">Number of pages : </div>
              <div>{bookdata?.totalPages}</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-slate-400">Publisher : </div>
              <div>{bookdata?.publisher}</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-slate-400">Year of publishing : </div>
              <div>{bookdata?.yearOfPublishing}</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-slate-400">Rating : </div>
              <div>{bookdata?.rating}</div>
            </div>
          </div>
          <div className="w-full flex justify-start items-start gap-x-3">
            <button className="bg-transparent border border-slate-700 p-2 rounded  px-5">
              Read
            </button>
            <button
              onClick={() =>
                wishlist.some((item) => item.bookId === bookdata?.bookId)
                  ? deleteWishlistData(Number(bookdata?.bookId))
                  : setWishlistData(Number(bookdata?.bookId))
              }
              className="bg-green-400 p-2 rounded px-5 cursor-pointer"
            >
              {wishlist.some((item) => item.bookId === bookdata?.bookId)
                ? "Remove from wishlist"
                : "Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
