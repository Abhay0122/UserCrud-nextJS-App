import '@/styles/globals.css'
import Context from "../context/Context";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
      <ToastContainer />
    </Context>
  );
}
