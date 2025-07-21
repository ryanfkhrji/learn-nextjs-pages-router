import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A simple Next.js application" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen gap-3">
        <h1 className="text-2xl font-bold text-gray-600">Welcome to My Next.js App</h1>
        <p className="text-md text-gray-500 font-semibold">This is the home page content.</p>
      </div>
    </>
  );
}
