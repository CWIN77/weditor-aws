import styled from 'styled-components'
import Request from '../src/components/Request'
import Navbar from '../src/components/Navbar'

function Home() {
  return (
    <Container>
      <Navbar/>
      <Request/>
      <Request/>
      <Request/>
      <Request/>
      <Request/>
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  display:flex;
  flex-wrap: wrap;
` 

export default Home