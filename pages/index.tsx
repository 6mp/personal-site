import Head from 'next/head'
import {Grid, Input, Page, Spacer, Text} from '@geist-ui/core'

const Home = () => {
    return (
        <div>
            <Head>
                <title>Todo List</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Page dotBackdrop width="800px" padding={0}>
                <Grid.Container justify={"center"}>
                    <Grid xs={24} justify={"center"}>
                        <Text h1>Todo List Senior Project</Text>
                    </Grid>
                    <Grid xs={24} justify={"center"}>
                        <Input label="Username"/>
                    </Grid>
                    <Spacer/>
                    <Grid xs={24} justify={"center"}>
                        <Input.Password label="Password"/>
                    </Grid>
                    <Spacer/>
                    <Grid xs={24} justify={"center"}>
                        {/*<Text h3>If you do not have an account one will be made upon login</Text>*/}
                    </Grid>
                </Grid.Container>
            </Page>
        </div>
    )
}

export default Home
