import type { NextPage } from 'next';
import useUser from '../hooks/useUser';

const Home: NextPage = () => {
  const { user } = useUser();

  return <div>{user?.name}</div>;
};

export default Home;
