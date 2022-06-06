import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import SVG_people from '../svgs/people.svg'

const Container = styled.div`
  
`

const Home: NextPage = () => {
  return (
    <Container>
      <div>YYYYYYYYY!!</div>
      <SVG_people width={36} height={36} />
    </Container>
  )
}

export default Home
