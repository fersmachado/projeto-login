import { useState } from "react";
import styled from "styled-components";
import Tweets from "./src/components/Tweets";
import { Button, Drawer } from 'antd';  

const Container = styled.div`
    background: #f1d7b4;
    
`


function Home () {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
      };
    
      const onClose = () => {
        setVisible(false);
      };

    return(
        <Container>
            <Tweets />

            <Button type="primary" onClick={showDrawer}>
                 Options
            </Button>

            <Drawer title="Menu" placement="left" onClose={onClose} visible={visible}>
                <Button>Configuracao</Button>
                <Button>Perfil</Button>
                <Button>Mensagens</Button>
            </Drawer>   
        </Container>
        
    )
}


export default Home;