import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Users from '../components/users'

const Home: NextPage = () => {
  return (
    <div className="bg-zinc-100">
      <Head>
        <title>Next Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Users />
    </div>
  )
}

export default Home
