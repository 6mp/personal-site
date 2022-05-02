import Head from 'next/head'
import {Button, Grid, Input, Note, Page, Spacer, Text} from '@geist-ui/core'

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
                        <Text style={{textAlign: "center"}} h1>Todo List Senior Project</Text>
                    </Grid>
                    <Grid xs={24} justify={"center"}>
                        <Input width={17} label="Username"/>
                    </Grid>
                    <Spacer/>
                    <Grid xs={24} justify={"center"}>
                        <Input.Password width={17} label="Password"/>
                    </Grid>
                    <Spacer/>
                    <Grid xs={24} justify={"center"}>
                        <Button>Login</Button>
                    </Grid>
                    <Spacer/>
                    <Grid xs={24} justify={"center"}>
                        <Note>If you do not have an account one will be made upon login</Note>
                    </Grid>
                </Grid.Container>
            </Page>
        </div>
    )
}

export default Home
