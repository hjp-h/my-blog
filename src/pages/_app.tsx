import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// cpnts
import Layout from '@/components/Layout'
// cpnt
import { ConfigProvider } from "antd"
import zhCN from 'antd/locale/zh_CN';
export default function App({ Component, pageProps }: AppProps) {
  return (
  <ConfigProvider locale={zhCN}>
    <Layout>
      <Component {...pageProps} />
   </Layout>
  </ConfigProvider>)
}
