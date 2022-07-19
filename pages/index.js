import { Button, Input } from "antd"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #6C7A89;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  width: 500px;
  height: 400px;
  background: #fff;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
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
        
        <Input placeholder="insira aqui"></Input>
        <Input placeholder="insira aqui"></Input>

        <div>
          <Button type="primary" style={{width: "100%"}}> Button</Button>
        </div>
        
      </Box>
      
    </Container>
  )
}
