import { GetServerSidePropsContext } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, getSession, LiteralUnion, signIn, useSession } from "next-auth/react";

interface SignInProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider
  > | null
}

const SignIn: React.FC<SignInProps> = ({ providers }) => {
  return (
    <>
      {Object.values(providers || {}).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { providers: await getProviders() }
  }
}


export default SignIn