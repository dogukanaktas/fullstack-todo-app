import type { NextPage, GetServerSideProps } from 'next';
import useUser from '../hooks/useUser';
const URL = 'http://localhost:3000/api/hello';

const Home: NextPage = () => {
  const { user, isError, isLoading } = useUser();

  return <div>{user?.name}</div>;
};

export default Home;
