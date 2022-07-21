import styled from "styled-components";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.ul`
    background: #f1d7b4;
    display: flex;
    flex-direction: column;
    padding: 60px;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    height: 500px;
    gap: 6px;
    
`
const Tweet = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 20px;
    
`
const Title = styled.div`
    font-size: 20px;
`

const Descriptions = styled.div`
    font-size: 10px;
    
    
`

const ContentImg = styled.div`
    display: flex;
   
    
`

const ContentConteudo = styled.div`
    display: flex;
    flex-direction: column;
    
`

function Tweets() {
    const icon = <FontAwesomeIcon icon={faUser} />;

    return (


        <Container>
            <Tweet>
                <ContentImg>
                    {icon}
                </ContentImg>

                <ContentConteudo>
                    <Title>
                        Fernanda Machado
                    </Title>
                    <Descriptions>
                        Hoje acordei com sono
                    </Descriptions>
                </ContentConteudo>

            </Tweet>

            <Tweet>
                <ContentImg>
                    {icon} 
                </ContentImg>

                <ContentConteudo>
                    <Title>
                        Ester Rosa
                    </Title>
                    <Descriptions>
                        Hoje acordei com fome
                    </Descriptions>
                </ContentConteudo>

            </Tweet>

            <Tweet>
                <ContentImg>
                {icon} 
                </ContentImg>

                <ContentConteudo>
                    <Title>
                        Pricy Avila
                    </Title>
                    <Descriptions>
                        Acordei cansada
                    </Descriptions>
                </ContentConteudo>
            </Tweet>

           
        </Container>
    )
}

export default Tweets;

