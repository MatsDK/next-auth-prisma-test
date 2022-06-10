import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { signOut, useSession } from "next-auth/react"
import { Title } from '../components/Title'

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading</div>

  return (
    <Layout>
      <main className="h-[900px] flex flex-col items-center">
        <Title />
        {/* {session ? (
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
        )} */}
      </main>
      <section className="h-[60vh] bg-primary-light">
        test
      </section>
      <section id="how-it-works" className="h-[60vh]">
        test1
      </section>
    </Layout>
  )
}

export default Home
