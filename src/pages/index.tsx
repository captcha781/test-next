import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {

  let rawFetch = await fetch(`http://ipapi.co/${context.req.headers['x-forwarded-for']}/json`)
  let data = await rawFetch.json()

  return {
    props: { ipInfo: data },
  };
}

export default function Home({ ipInfo }: any) {
  return <div>
    <h2>TEst</h2>
    <h2>{ipInfo?.region || ''}</h2>
    <h2>{ipInfo?.ip || ''}</h2>
  </div>;
}
