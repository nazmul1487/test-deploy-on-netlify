import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderSlider from '../components/home/HeaderSlider'
import AboutUsHome from '../components/home/AboutUsHome'
import OurService from '../components/home/OurService'
import ServiceSub from '../components/home/ServiceSub'
import Accomplishment from '../components/home/Accomplishment'
import Partners from '../components/home/Partners'
import PartnersTalk from '../components/home/PartnersTalk'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HeaderSlider />
        <AboutUsHome />
        <Accomplishment />
        <OurService />
        <ServiceSub />
        {/* <Accomplishment /> */}
        <Partners />
        <PartnersTalk />
        {/*<Accomplishment />*/}

      </main>

    </div>
  )
}
