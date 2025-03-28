const fetchdata = async <T extends { name: string }>(
  api: string,
): Promise<T[]> => {
  try {
    const response = await fetch(api, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }

    const data: T[] = await response.json();
    const good_data = data.filter((d) => d.name.common !== 'Israel');
    return good_data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export default fetchdata;
