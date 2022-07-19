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
    text-align:center;
    border:4px;
`
const Title = styled.div`
    font-size: 20px;
`

const Descriptions = styled.div`
    font-size: 10px
`

const ContentImg = styled.div`
    align-items: start;
    padding: 4px;
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

            {/* <Tweet>
                <ContentImg>
                    <Img>
                        E
                    </Img>
                </ContentImg>
                <Title>
                    Eduardo Gandolfo
                </Title>
                <Descriptions>
                    Hoje acordei com vontade de codar em python
                </Descriptions>
            </Tweet>

            <Tweet>
                <ContentImg>
                    <Img>
                        A
                    </Img>
                </ContentImg>
                <Title>
                    Anthony Gand
                </Title>
                <Descriptions>
                    Aprendendo paises rs
                </Descriptions>
            </Tweet> */}
        </Container>
    )
}

export default Tweets;

