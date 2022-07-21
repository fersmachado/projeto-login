import { Button, Input } from "antd"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(./bg.jpg);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  width: 500px;
  height: 400px;
  background: #cfcfcf;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
  border-radius: 3px;
`

const Image = styled.img`

`


export default function Home() {
  return (
    <Container>
      <Box>
        <div>
         <Image
          width={200}
          src="/frame3.svg"
          />
        </div>
        
        <Input placeholder="Email"></Input>
        <Input placeholder="Password"></Input>

        <div>
          <Button type="primary" style={{width: "100%"}}> Button</Button>
        </div>
        
      </Box>
      
    </Container>
  )
}
