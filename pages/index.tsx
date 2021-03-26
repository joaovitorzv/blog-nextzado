import Head from 'next/head'
import Link from 'next/link'
import { InferGetStaticPropsType } from 'next'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import Alert from '../components/alert'

import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

const alertError = false

export const getStaticProps = async () => {
  const allPostData = getSortedPostsData()

  return {
    props: {
      allPostData
    }
  }
}

export default function Home({ allPostData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Alert type={alertError ? 'error' : 'success'}>
        <p>{alertError ? 'Deu erro meu parça' : 'Tamo safe no deregue'}</p>
      </Alert>
      <section className={utilStyles.headingMd}>
        <p>Welcome to the simple blog Nextzado</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostData.map(({ id, data }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{data.title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={data.date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
