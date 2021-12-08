import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" type="images/png" href="./images/favicon.png" />

      <meta name="description" content={description} />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta name="author" content="Achraf Dev" />
    </Head>
  );
};

export default SEO;
