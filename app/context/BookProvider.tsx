import { createContext, useContext, useState, useEffect, useMemo } from "react";

// Define your book type
export type Book = {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
};

// Define context type
type BookContextType = {
  books: Book[] | null;
  wishlist: Book[];
  setWishlistData: (id: number) => void;
  deleteWishlistData: (id: number) => void;
  loading: boolean;
  error: string | null;
  getBookById: (id: number) => Book | undefined;
  getBooksByCategory: (category: string) => Book[];
  getBooksByTag: (tag: string) => Book[];
};

// Create context with initial value
const BookContext = createContext<BookContextType | undefined>(undefined);

// Provider props type
type BookProviderProps = {
  children: React.ReactNode;
};

export function BookProvider({ children }: BookProviderProps) {
  const [books, setBooks] = useState<Book[] | null>(null);
  const [wishlist, setWishlist] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data: Book[] = await response.json();
        setBooks(data);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const getBookById = (id: number) => {
    return books?.find((book) => book.bookId === id);
  };

  const getBooksByCategory = (category: string) => {
    return (
      books?.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      ) || []
    );
  };

  const getBooksByTag = (tag: string) => {
    return (
      books?.filter((book) =>
        book.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
      ) || []
    );
  };

  const setWishlistData = (id: number) => {
    const bookToAdd = books?.find((item) => item.bookId === id);
    if (bookToAdd && !wishlist.some((item) => item.bookId === id)) {
      setWishlist((prevWishlist) => [...prevWishlist, bookToAdd]);
    }
  };

  const deleteWishlistData = (id: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.bookId !== id)
    );
  };

  const contextValue = useMemo(
    () => ({
      books,
      loading,
      wishlist,
      error,
      setWishlistData,
      deleteWishlistData,
      getBookById,
      getBooksByCategory,
      getBooksByTag,
    }),
    [books, loading, wishlist, error]
  );

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error("useBooks must be used within a BookProvider");
  }
  return context;
}
