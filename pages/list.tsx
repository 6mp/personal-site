import {Button, Card, Grid, Input, Loading, Page, Spacer, Text, useInput, useTheme, useToasts} from "@geist-ui/core";
import Head from "next/head";
import {useCallback, useEffect, useRef, useState} from "react";
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8'
import ReactCanvasConfetti from 'react-canvas-confetti';
import {useRouter} from "next/router";

interface Todo {
    title: string,
    details: string,
    insert_time: string
}

const List = () => {
    const [loading, setLoading] = useState(true);
    const {state: todoTitleValue, bindings: todoTitleBindings, setState: setTodoTitleValue} = useInput("");
    const {state: todoDetailValue, bindings: todoDetailBindings, setState: setTodoDetailValue} = useInput("");
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

        //https://senior_project.6mp.workers.dev
        fetch("https://senior_project.6mp.workers.dev/get_items", requestOptions).then(response => {
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

    const uploadItem = () => {
        const myHeaders = new Headers();
        myHeaders.append("username", /*"test"*/ sessionStorage.getItem("username")!);
        myHeaders.append("password", /*"test"*/ sessionStorage.getItem("password")!);
        myHeaders.append("Content-Type", "application/json");

        const encryptedTitle = AES.encrypt(todoTitleValue, sessionStorage.getItem("password")!).toString();
        const encryptedDetails = AES.encrypt(todoDetailValue, sessionStorage.getItem("password")!).toString();

        const raw = JSON.stringify({
            "title": encodeURI(encryptedTitle),
            "details": encodeURI(encryptedDetails),
            "insert_time": new Date().getTime().toString()
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
        };

        fetch("https://senior_project.6mp.workers.dev/post_item", requestOptions).then(response => {
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

    const deleteItem = (timestamp: string) => {
        const myHeaders = new Headers();
        myHeaders.append("username", /*"test"*/ sessionStorage.getItem("username")!);
        myHeaders.append("password", /*"test"*/ sessionStorage.getItem("password")!);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "title": "",
            "details": "",
            "insert_time": timestamp
        });

        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw
        };

        fetch("https://senior_project.6mp.workers.dev/delete_item", requestOptions).then(response =>
            response.json().then(json => {
                if (json.success) {
                    setToast({text: "deleted item", delay: 3000})
                    getItems()
                } else {
                    setToast({text: json.content, type: "error", delay: 3000})
                    router.push("/")
                }
            })
        );
    }

    //confetti things
    const refAnimationInstance = useRef(null);

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio, opts) => {
        refAnimationInstance.current &&
        // @ts-ignore
        refAnimationInstance.current({
            ...opts,
            colors: ["#A020F0", "#ffffff"],
            origin: {y: 0.7},
            particleCount: Math.floor(200 * particleRatio)
        });
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55
        });

        makeShot(0.2, {
            spread: 60
        });

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45
        });
    }, [makeShot]);

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
            <Page dotBackdrop width={"800px"} padding={0} dotSize={"1.5px"}>
                <ReactCanvasConfetti refConfetti={getInstance} style={{
                    position: "fixed",
                    pointerEvents: "none",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0
                }}/>
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
                                                   style={{textAlign: "center"}} {...todoTitleBindings}/>
                                        </Grid>
                                        <Spacer/>
                                        <Grid xs={24} justify={"center"}>
                                            <Button onClick={() => {
                                                uploadItem();
                                                setTodoTitleValue("");
                                            }}>Submit</Button>
                                        </Grid>
                                    </Grid.Container>
                                </Card>
                            </Grid>
                        </>
                    }

                    <Spacer/>

                    {todos.map((item, _) => {
                        const decryptedTile = AES.decrypt(decodeURI(item.title), sessionStorage.getItem("password")!).toString(Utf8);
                        return (
                            <>
                                <Grid key={item.title} xs={24} justify={"center"}>
                                    <Card width={26} style={{textAlign: "center"}} onClick={() => {
                                        deleteItem(item.insert_time);
                                        fire();
                                    }}>{decryptedTile}</Card>
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