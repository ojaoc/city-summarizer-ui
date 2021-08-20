/* For each fetch, I create an AbortController in order to cancel
the fetch request if another request comes in. This prevents unnecessary 
requests to be fulfilled if the user keeps typing */

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const quantPerPage = 10;
let abortControllerList = [];

const loadCityList = async (search, loadedOptions) => {
  abortControllerList.forEach((controller) => controller.abort());
  abortControllerList = [];

  const abortController = new AbortController();
  const { signal } = abortController;
  abortControllerList.push(abortController);

  await sleep(600); /* 
  Sleep will wait a bit before making the request
  So if a user types fast only the last request with the full search 
  string will be made
  */

  if (search) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/city/list?q=${search}&offset=${loadedOptions.length}`,
      { signal }
    ).then((r) => r.json());

    return {
      options: response.data,
      hasMore:
        loadedOptions.length + quantPerPage < response.metadata.totalCount,
    };
  }
  return {
    options: [],
    hasMore: false,
  };
};

export default loadCityList;
