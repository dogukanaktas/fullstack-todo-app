import useSWR from 'swr';
interface IUser {
  age: number;
  name: string;
  surname: string;
}

const useUser = () => {
  const fetcher = async (input: string, init?: RequestInit): Promise<IUser> => {
    const response = await fetch(input, init);
    return response.json();
  };

  const { data, error, isLoading } = useSWR('/api/user', fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
};

export default useUser;
