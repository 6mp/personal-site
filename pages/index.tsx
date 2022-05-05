import Head from 'next/head'
import {Button, Grid, Input, Note, Page, Spacer, Text, useInput, useToasts} from '@geist-ui/core'
import {useRouter} from "next/router";
import {useEffect} from "react";
import AES from 'crypto-js/aes';

/**
    const ciphertext = AES.encrypt("sss", 'secretPassphrase');
    console.log(ciphertext.toString())
**/

const Home = () => {

    const {state: usernameValue, bindings: usernameBindings} = useInput("");
    const {state: passwordValue, bindings: passwordBindings} = useInput("");
    const {setToast} = useToasts()
    const router = useRouter()

    const login = async (): Promise<{ success: boolean, content: string }> => {
        const myHeaders = new Headers();
        myHeaders.append("username", usernameValue);
        myHeaders.append("password", passwordValue);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        const response = await fetch("http://127.0.0.1:8787/login", requestOptions);
        const json = await response.json();
        return {success: json.success, content: json.content}
    }

    return (
        <div>
            <Head>
                <title>To Do List</title>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>
            <Page dotBackdrop width={"800px"} padding={0}>
                <Grid.Container justify={"center"}>
                    <Grid xs={24} justify={"center"}>
                        <Text style={{textAlign: "center"}} h1>To Do List Senior Project</Text>
                    </Grid>
                    <Grid xs={24} justify={"center"}>
                        <Input width={17} label={"Username"} {...usernameBindings}/>
                    </Grid>
                    <Spacer/>
                    <Grid xs={24} justify={"center"}>
                        <Input.Password width={17} label={"Password"} {...passwordBindings}/>
                    </Grid>
                    <Spacer/>
                    <Grid xs={24} justify={"center"}>
                        <Button width={1.6} onClick={async () => {
                            const {success, content} = await login();

                            if (!success) {
                                setToast({
                                    text: content,
                                    type: "error",
                                });
                            } else {
                                setToast({
                                    text: content,
                                });

                                sessionStorage.setItem("username", usernameValue);
                                sessionStorage.setItem("password", passwordValue);

                                await router.push("list");
                            }
                        }}>Login</Button>
                    </Grid>
                    <Spacer/>
                    <Grid xs={24} justify={"center"}>
                        <Note style={{textAlign: "center"}}><br/>If you do not have an account one will be made upon login</Note>
                    </Grid>
                </Grid.Container>
            </Page>
        </div>
    );
}

// noinspection JSUnusedGlobalSymbols
export default Home
