import type { NextPage } from 'next'
import Image from "next/image"
import Link from "next/link"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { signOut, useSession } from "next-auth/react"

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading</div>

  if (!session) return (
    <div>
      Not signed in<br />
      <Link href="/signin">
        <p>Sign in</p>
      </Link>
    </div>
  )

  return (
    <div className={styles.container}>
      <Head>
        <title>Next auth App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          authorized <br />
        </h1>
        {session.user?.image && (
          <Image src={session.user.image} width={20} height={20} />
        )}
        {session.user?.name}
        <button onClick={() => signOut()}>Sign out</button>
      </main>
    </div>
  )
}

export default Home
