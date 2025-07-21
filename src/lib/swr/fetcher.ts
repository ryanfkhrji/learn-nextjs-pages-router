// Fetching product data using SWR
export const fetcher = (url:string) => fetch(url).then((res) => res.json());