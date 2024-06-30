import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return(
  <>
   <Head> 
        <meta content="" name="keywords"/>
        <meta content="BeBDrugStore for pharmacy and doctor relationship" name="description"/>
        <meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport"/>
   </Head>
  <Component {...pageProps} />
  </>);
}
export default MyApp;
