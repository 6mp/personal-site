import {
    Avatar, Card,
    Display,
    Grid,
    Image,
    Spacer,
    Tabs,
    Text,
    useTabs
} from '@geist-ui/core'
import {useRouter} from "next/router";

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
                        <Display shadow>
                            <Grid.Container gap={2} justify="space-around">
                                <Grid xs={24} justify={"center"}><Avatar
                                    src={"images/face.png"} scale={10}></Avatar>
                                </Grid>
                                <Grid xs={24}
                                      justify={"center"}><Spacer/></Grid>
                                <Grid xs={24} justify={"center"}>
                                    <Card>
                                        <p>
                                            Hi, my name is Matt and I am currently a freshman at the University of Maryland studying computer science.

                                            I'm from Howard County, Maryland and in my free time I enjoy playing tennis and
                                        </p>
                                    </Card>
                                </Grid>
                            </Grid.Container>
                        </Display>
                    </Tabs.Item>
                    <Tabs.Item label="Assignments" value="2"></Tabs.Item>
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