
import NextLogo from "../assets/next.png"
import Image from "next/image"

function Index() {

  let count = 1000
  let page_tile = "Home Page"

  return <div>
    <p>{page_tile} </p>
    <Image src={NextLogo}/>
    {/* <Image src={"../assets/next.png"} width={200} height={200}/> */}
    {/* <img src="../assets/next.png" alt="next logo"/> */}
    {/* <img src="/logo.jpg" alt="next logo"/> */}
    {/* <img src="https://i.ytimg.com/vi/ZRZngn_GdXY/maxresdefault.jpg" alt="next logo"/> */}

  </div>
}

export default Index