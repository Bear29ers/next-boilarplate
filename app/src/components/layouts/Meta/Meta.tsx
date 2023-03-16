import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import meta from '@/const/meta';
import { MetaProps } from '@/types/meta';

const Meta: NextPage<MetaProps> = ({ title }) => {
  const router = useRouter();
  const url = `${meta.url}${router.pathname}`;
  const imageUrl = `${meta.url}${meta.imagePath}`;

  return (
    <Head>
      {title ? (
        <title>
          {meta.title} | {title}
        </title>
      ) : (
        <title>{meta.title}</title>
      )}
      <meta name='viewport' content='width=device-width,initial-scale=1.0' />
      <meta name='description' content={meta.description} />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:site_name' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:image' content={imageUrl} />
      <meta property='og:image:width' content={String(meta.imageWidth)} />
      <meta property='og:image:height' content={String(meta.imageHeight)} />
      <link rel='icon' href={meta.favicon} />
      <link rel='canonical' href={url} />
    </Head>
  );
};

export default Meta;
