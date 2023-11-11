export default function Home() {
  return <p>Client: {process.env.NEXT_PUBLIC_VERCEL_ENV}</p>
}
