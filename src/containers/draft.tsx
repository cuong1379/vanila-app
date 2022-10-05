import css from 'styled-jsx/css'
import { Card } from 'baser-ui/components'
// import { Header } from 'src/components/Header'
import Image from 'next/image'
import { getSession,  } from 'next-auth/client'
import { TextColor } from 'baser-ui/components'
import { Button } from 'baser-ui/controls'
import { ArrowRight } from 'react-bootstrap-icons'

const Home = () => {
  return (
    <div className="d-flex justify-content-center bg-home-style py-5">
      <Card title="" width="100%" className="container">
        {/* <Header session={session} onSignOut={signOut}></Header> */}

        <div className="content-styler">
          <h2 className="mb-3">Get creative and build your style</h2>

          <TextColor color="#7E7E7E" size="18px">
            Feel happy to share my latest exploration for Hero section called TriPart? Hope you enjoy and like it.
          </TextColor>

          <br />

          <Button className="mt-5">
            Let's Discover <ArrowRight className="ml-2" size={19} />
          </Button>
        </div>
      </Card>

       <div className="image-bg">
        <Image src="/pngegg.png" alt="me" width={500} height={640} placeholder="blur" blurDataURL="/pngegg.png"></Image>
      </div> 

      <style jsx>{style}</style>
    </div>
  )
}

Home.getInitialProps = async (context: any) => {
  return {
    session: await getSession(context)
  }
}

export default Home

const style = css`
  .bg-home-style {
    min-height: 100vh;
    background: rgb(90, 77, 253);
    background: linear-gradient(90deg, rgba(90, 77, 253, 1) 0%, rgba(57, 163, 251, 1) 0%, rgba(160, 247, 205, 1) 100%);
    background-size: cover;
    background-position: center;
  }
  .image-bg {
    max-width: 500px;
    position: absolute;
    bottom: 45px;
    right: 500px;
  }
  .content-styler {
    margin-top: 25%;
    max-width: 55%;
  }
`

