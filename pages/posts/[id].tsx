import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { getAllPostsIds, getPostData } from '../../lib/posts'
import Layout from '../../components/layout'
import Date from '../../components/date'

import utilStyles from '../../styles/utils.module.css'

type Params = {
  params: {
    id: string;
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsIds()
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async ({ params }: Params) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>{postData.data.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.hadingXl}>{postData.data.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.data.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.data.content }} />
      </article>
    </Layout>
  )
}