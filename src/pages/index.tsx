import { GetServerSidePropsContext } from "next";

export const runtime = 'experimental-edge'

export async function getServerSideProps(context: GetServerSidePropsContext) {

  let rawFetch = await fetch(`http://ipapi.co/${context.req.headers['x-forwarded-for']}/json`)
  let data = await rawFetch.json()

  return {
    props: { ipInfo: data, ip: context.req.headers['x-forwarded-for'] },
  };
}

export default function Home({ ipInfo, ip }: any) {
  return <div>
    <h2>TEst</h2>
    <h2>{ipInfo?.region || ''}</h2>
    <h2>{ipInfo?.ip || ''}</h2>
    <h4>Rquest IP: {ip}</h4>
    <h4>{JSON.stringify(ipInfo)}</h4>
  </div>;
}
