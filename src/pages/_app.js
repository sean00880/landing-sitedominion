import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'common/assets/css/flaticon.css';
import '../containers/CryptoModern/CountDown/timer.css';
import 'common/assets/css/icon-example-page.css';
// swiper bundle styles
import 'swiper/css/bundle';
import 'common/assets/css/react-slick.css';
import 'common/assets/css/rc-collapse.css';
import 'rc-collapse/assets/index.css';
import 'common/assets/css/rc-drawer.css';
import Head from 'next/head';
import Script from 'next/script';

export default function CustomApp({ Component, pageProps }) {
  return (
    <Modal>
       <Head>
       <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LYS6SMLR0H"></Script>
            <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LYS6SMLR0H');
        `}
        
      </Script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      
            </Head>
      <Component {...pageProps} />
    </Modal>
  );
}
