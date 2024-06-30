// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
      rel="icon"
      href="assets/img/kaiadmin/favicon.ico"
      type="image/x-icon"
    />

    <script src="assets/js/plugin/webfont/webfont.min.js"></script>

    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/plugins.min.css" />
    <link rel="stylesheet" href="assets/css/kaiadmin.min.css" />
    <link rel="stylesheet" href="assets/css/demo.css" />
    <link rel="stylesheet" href="/assets/css/fonts.min.css" />
    <script src="assets/js/core/jquery-3.7.1.min.js"></script>
    <script src="assets/js/core/popper.min.js"></script>
    <script src="assets/js/core/bootstrap.min.js"></script>

   
    <script src="assets/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js"></script>

    
    <script src="assets/js/plugin/chart.js/chart.min.js"></script>

   
    <script src="assets/js/plugin/jquery.sparkline/jquery.sparkline.min.js"></script>

    <script src="assets/js/plugin/chart-circle/circles.min.js"></script>

    <script src="assets/js/plugin/datatables/datatables.min.js"></script>

    <script src="assets/js/plugin/bootstrap-notify/bootstrap-notify.min.js"></script>

    <script src="assets/js/kaiadmin.min.js"></script>
    <script src="assets/js/setting-demo.js"></script>
    <script src="assets/js/demo.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
