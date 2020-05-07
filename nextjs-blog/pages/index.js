import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Alert from '../components/alert'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>VOYAGE GROUP、トーベヤンソン・ニューヨーク／<Link href="http://amzn.asia/6NtaaVN"><a>http://amzn.asia/6NtaaVN</a></Link></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <Alert type="success">Success</Alert>
        <Alert type="error">Error</Alert>
      </section>
    </Layout>
  )
}