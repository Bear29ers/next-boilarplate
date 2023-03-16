import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import Meta from '@/components/layouts/Meta/Meta';
import newtClient from '@/libs/newt';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage = ({ profile }: Props) => {
  return (
    <>
      <Meta />
      <h1>Portfolio Page</h1>
      <h3>{profile.enname}</h3>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const profile = await newtClient.getContents({
    appUid: 'bear29ers',
    modelUid: 'profile',
  });
  return {
    props: {
      profile: profile.items[0],
    },
  };
};

export default Home;
