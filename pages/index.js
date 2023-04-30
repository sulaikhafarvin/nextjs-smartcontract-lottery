import Head from "next/head"
import Image from "next/image"

import styles from "../styles/Home.module.css"
// import ManualHeader from "../components/ManualHeader"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <LotteryEntrance />
            {/* <ManualHeader /> */}
            <main className={styles.main}>
                <div className={styles.description}></div>
            </main>
        </>
    )
}
