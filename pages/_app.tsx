import "../styles/globals.css";
import "../styles/keyframe.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore
  return <Component {...pageProps} />;
}
