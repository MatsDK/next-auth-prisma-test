import type { NextPage } from 'next'
import { UsageSection } from '../components/UsageSection'
import { useSession } from "next-auth/react"
import { HomeSection } from '../components/HomeSection'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading</div>

  return (
    <Layout>
      <HomeSection />
      <UsageSection />
      <section id="how-it-works" className="h-[60vh]">
        test1
      </section>
    </Layout>
  )
}

export default Home