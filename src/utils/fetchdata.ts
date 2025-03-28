const fetchdata = async <T>(api: string): Promise<T[]> => {
  try {
    const response = await fetch(api);
    // console.log({ response });
    if (!response.ok) {
      // More specific error handling
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data: T[] = await response.json();
    console.log({ data });
    return data;
  } catch (error) {
    // Handling errors more gracefully
    if (error instanceof Error) {
      console.error('Fetch error:', error.message);
    } else {
      console.error('Unknown fetch error:', error);
    }
    throw error; // Re-throw to propagate the error, or handle it in the calling code
  }
};

export default fetchdata;
