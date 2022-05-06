import {Button, Card, Grid, Input, Loading, Page, Spacer, Text, useInput, useToasts} from "@geist-ui/core";
import Head from "next/head";
import {useEffect, useState} from "react";
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8'
import {useRouter} from "next/router";

interface Todo {
    task: string,
    insert_time: string
}

const List = () => {
    const [loading, setLoading] = useState(true);
    const {state: todoValue, bindings: todoBindings} = useInput("");
    const [todos, setTodos] = useState<Todo[]>([])
    const {setToast} = useToasts()
    const router = useRouter()

    const getItems = () => {
        const myHeaders = new Headers();
        myHeaders.append("username", /*"test"*/ sessionStorage.getItem("username")!);
        myHeaders.append("password", /*"test"*/ sessionStorage.getItem("password")!);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        fetch("http://127.0.0.1:8787/get_items", requestOptions).then(response => {
            response.json().then(json => {
                if (json.success) {
                    setTodos(JSON.parse(json.content));
                    setToast({text: "fetched items", delay: 3000})
                } else {
                    setToast({text: json.content, type: "error", delay: 3000})
                    router.push("/")
                }
            })
        });
    }

    const uploadItem = async () => {
        const myHeaders = new Headers();
        myHeaders.append("username", /*"test"*/ sessionStorage.getItem("username")!);
        myHeaders.append("password", /*"test"*/ sessionStorage.getItem("password")!);
        myHeaders.append("Content-Type", "application/json");

        const encryptedText = AES.encrypt(todoValue, sessionStorage.getItem("password")!).toString();

        const raw = JSON.stringify({
            "task": encodeURI(encryptedText),
            "insert_time": new Date().getTime().toString()
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
        };

        fetch("http://127.0.0.1:8787/post_item", requestOptions).then(response => {
            response.json().then(json => {
                if (json.success) {
                    setToast({text: "pushed item", delay: 3000})
                    getItems()
                } else {
                    setToast({text: json.content, type: "error", delay: 3000})
                    router.push("/")
                }
            })
        })
    }

    useEffect(() => {
        getItems()
        setLoading(false);
        // eslint-disable-next-line
    }, [])

    if (!todos) return;
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
                    <Spacer/>
                    <Spacer/>
                    {loading
                        ?
                        <Grid xs={24} justify={"center"}>
                            <Loading scale={5}>Loading</Loading>
                        </Grid>
                        :
                        <>
                            <Grid xs={24} justify={"center"}>
                                <Card>
                                    <Grid.Container justify={"center"}>
                                        <Grid xs={24} justify={"center"}>
                                            <Input placeholder={"Enter task here"}
                                                   style={{textAlign: "center"}} {...todoBindings}/>
                                        </Grid>
                                        <Spacer/>
                                        <Grid xs={24} justify={"center"}>
                                            <Button onClick={uploadItem}>Submit</Button>
                                        </Grid>
                                    </Grid.Container>
                                </Card>
                            </Grid>
                        </>
                    }

                    <Spacer/>

                    {todos?.map((item, _) => {
                       const decryptedText = AES.decrypt(decodeURI(item.task), sessionStorage.getItem("password")!).toString(Utf8);
                        return (
                            <>
                                <Grid key={item.task} xs={24} justify={"center"}>
                                    <Card>{decryptedText}</Card>
                                </Grid>

                                <Grid key={item.insert_time} xs={24} justify={"center"}>
                                    <Spacer/>
                                </Grid>
                            </>
                        );
                    })}
                </Grid.Container>
            </Page>
        </div>
    );
}

// noinspection JSUnusedGlobalSymbols
export default List