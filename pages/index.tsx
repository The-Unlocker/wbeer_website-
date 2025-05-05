import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>wBEER - Bee Real</title>
        <meta name="description" content="Official website for the wBEER token - Bee Real on BNB Smart Chain." />
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>🐝 Welcome to wBEER - Bee Real</h1>
        <p>This is the official home of the Bee Real token.</p>
        <p>
          Contract: <a href="https://bscscan.com/token/0xb6eb93F78933BC3820a2c508c050703CD7b234f1" target="_blank">View on BscScan</a>
        </p>
        <p>
          Trade: <a href="https://pancakeswap.finance/swap?outputCurrency=0xb6eb93F78933BC3820a2c508c050703CD7b234f1" target="_blank">Buy on PancakeSwap</a>
        </p>
      </main>
    </>
  );
}
