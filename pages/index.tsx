import {
    Avatar,
    Card,
    Collapse,
    Display,
    Grid,
    Image,
    Link,
    Page,
    Spacer,
    Tabs,
    Text,
    useTabs
} from '@geist-ui/core'
import {useRouter} from "next/router";
import AAMuseum from "./assignments/aa_museum";

const gh = 'https://github.com/geist-org/geist-ui'
const docs = 'https://geist-ui.dev'

export default function Home() {
    const {bindings} = useTabs('1');
    const router = useRouter()

    return (
        <>
            <div className="tabs">
                <Tabs {...bindings} align={"center"}
                      style={{overflow: "hidden"}} leftSpace={0}>
                    <Tabs.Item label="Home" value="1">
                        <Page width={"75%"}>
                            <Grid.Container gap={2} justify="space-around">
                                <Grid xs={24} justify={"center"}>
                                    <Text h1>Matt Pallan</Text>
                                </Grid>
                                <Grid xs={24} justify={"center"}><Avatar
                                    src={"images/face.png"} scale={10}></Avatar>
                                </Grid>
                                <Grid xs={24} justify={"center"}>
                                    <Text style={{textAlign: "center"}} h6>
                                        mtp@umd.edu
                                        <br></br>
                                        Computer Science Major
                                        <br></br>
                                        Media Scholar
                                    </Text>
                                </Grid>
                                <Grid xs={24} justify={"center"}>
                                    <Card>
                                        <p>
                                            Hi, my name is Matt and I am
                                            currently a freshman at the
                                            University of Maryland studying
                                            computer science from Howard County
                                            Maryland.
                                            In high school I was involved with
                                            tennis, the business and investing
                                            club, and CyberPatriot. One thing I
                                            saw that connected all of these in
                                            one way or another was media. Here
                                            at UMD in the Media Scholars I want
                                            to dive deeper into this connection
                                            and learn more about how media is
                                            involved in every single thing we
                                            do.
                                        </p>
                                    </Card>
                                </Grid>
                                <Grid xs={24}
                                      justify={"center"}>
                                    <Spacer/>
                                </Grid>
                                <Grid xs={24} justify={"center"}>
                                    <Grid.Container gap={2} justify={"center"}
                                                    alignItems={"center"}
                                                    alignContent={"center"}
                                                    height="100px">
                                        <Grid xs={24}>
                                            <Spacer height={10}></Spacer>
                                        </Grid>
                                        <Grid xs={6}>
                                            <Link
                                                href={"https://scholars.umd.edu/programs/media-self-and-society"}>
                                                <Image
                                                    src={"images/mss_sun.png"}></Image>
                                            </Link>
                                        </Grid>
                                        <Grid xs={6}>
                                            <Link href={"https://umd.edu"}>
                                                <Image
                                                    src={"images/umd_seal.png"}></Image>
                                            </Link>
                                        </Grid>
                                        <Grid xs={6}>
                                            <Link
                                                href={"https://scholars.umd.edu"}>
                                                <Image
                                                    src={"images/s_sun.png"}></Image>
                                            </Link>
                                        </Grid>
                                    </Grid.Container>
                                </Grid>
                            </Grid.Container>
                        </Page>
                    </Tabs.Item>
                    <Tabs.Item label="Assignments" value="2">
                        <Page width={"75%"}>
                            <Collapse.Group>
                                <Collapse
                                    title={"African American History Museum Photo Essay"}
                                    subtitle={"10/2/22"}>
                                    <AAMuseum/>
                                </Collapse>
                                {/*<Collapse title="Question B"*/}
                                {/*          subtitle={<>More description*/}
                                {/*              about <Text b>Question*/}
                                {/*                  A</Text></>}>*/}
                                {/*    <Text>Lorem ipsum dolor sit amet,*/}
                                {/*        consectetur adipiscing elit,*/}
                                {/*        sed do eiusmod tempor incididunt ut*/}
                                {/*        labore et dolore magna aliqua. Ut enim*/}
                                {/*        ad minim veniam,*/}
                                {/*        quis nostrud exercitation ullamco*/}
                                {/*        laboris nisi ut aliquip ex ea commodo*/}
                                {/*        consequat.</Text>*/}
                                {/*</Collapse>*/}
                            </Collapse.Group>
                        </Page>
                    </Tabs.Item>
                    <Tabs.Item label="Resume" value="3">
                        <Display shadow caption={"Click to download pdf"}
                                 onClick={() => window.open("matthewpallan.pdf")}>
                            <Image src="images/resume_preview.png"/>
                        </Display>
                    </Tabs.Item>
                </Tabs>
            </div>
        </>
    );
}