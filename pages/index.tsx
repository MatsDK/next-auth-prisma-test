import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import Image from "next/image"
import { signOut, useSession } from "next-auth/react"

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading</div>

  return (
    <Layout>
      <main className="">
        <h1>
          authorized <br />
        </h1>
        {session ? (
          <div>
            {
              session.user?.image && (
                <Image src={session.user.image} width={20} height={20} />
              )
            }
            {session.user?.name}
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        ) : (
          <div>Not logged in</div>
        )}
      </main>
    </Layout>
  )
}

export default Home
