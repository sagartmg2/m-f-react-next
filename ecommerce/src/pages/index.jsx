import Image from 'next/image'
import Banner from "@/assets/promotional.png"
import Header from '@/components/Header'



export default function Home({ user }) {
  return (
    <>
      <Header />
      <Image src={Banner} />
    </>
  )
}
