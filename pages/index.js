import Head from "next/head"
import { Tip } from "../components/Tip"
import { Container } from "../components/Container"
import styled from 'styled-components'
import SCTest from "https://framer.com/m/SCTest-WVET.js@A29mBlWYjdgXDfFRwseE"
// A Smart Component from Framer
import Toggle from "https://framer.com/m/Toggle-B5iT.js@X94mtocAj5XithxLESme"


const Title = styled.h1`
  font-size: 50px;
  color: rebeccapurple;
`

export default function Home() {
    return (
        <>
            <Head>
                <title>Framer</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Container>
                <Title>Styled-Components only</Title>
                <SCTest />
                <Toggle />
                <Tip />
            </Container>
        </>
    )
}
