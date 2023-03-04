import useSWR from "swr";

const response = (...args) => fetch(...args).then((res) => res.json());
const baseUrl = process.env.baseUrl || "http://localhost:3000";
const useFetcher = (endpoints) => {
  const { data, error, isLoading } = useSWR(`${baseUrl}${endpoints}`, response);

  return {
    data,
    error,
    isLoading,
  };
};

export default useFetcher;
