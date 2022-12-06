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
import AAMuseum from "./assignments/aa_museum";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import ESportsRoom from "./assignments/esports_room";
import SemOneRefl from "./assignments/sem_one_refl";


export default function Home() {

    const router = useRouter();
    let [curTab, setTab] = useState<string>("1")

    const {bindings} = useTabs(curTab);

    useEffect(() => {
        // get query params
        const {query} = router;
        if (query.tab) {
            let number_tab = parseInt(query.tab as string);
            if (number_tab > 0 && number_tab < 4) {
                setTab(number_tab.toString());
            }
        }
    }, [router, bindings])


    return (
        <>
            <head>
                <title>E-Portfolio</title>
                <meta name="EPortfolio"
                      content="Matthew Pallan EPortfolio"></meta>
            </head>

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
                                        <Link
                                            href={"mailto:mtp@umd.edu"}>mtp@umd.edu</Link>
                                        <br></br>
                                        <Link href={"https://www.cs.umd.edu"}>Computer
                                            Science Major</Link>
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
                                            Maryland. In high school I was
                                            involved with tennis, the business
                                            and investing club, and
                                            CyberPatriot.

                                            The business and investing club was
                                            a great way to expose myself to the
                                            different types of media and their
                                            effects on us. We talked about share
                                            price, market trends, macro analysis
                                            and news. The news we discussed
                                            tended to follow business related
                                            topics so it helped me understand
                                            that even if you are not in the
                                            market for stocks or running your
                                            own business you will probably still
                                            hear about it. It even
                                            helped me help my parents make
                                            decisions on buying something or
                                            selling stocks with it as well.

                                            Whether it be market news, news of a
                                            hack of some company, or news of
                                            someone winning a tennis
                                            championship media was involved in
                                            every single one. Here at UMD in
                                            the Media Scholars I want to dive
                                            deeper into this connection and
                                            learn more about how media is
                                            involved in every single thing we
                                            do. I look forward to what UMD has
                                            in store for me and I am excited to
                                            meet many more people and partake in
                                            new activities!


                                            <br></br>
                                            <br></br>
                                            <b>10/7/22</b>
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
                                            <Spacer h={4}></Spacer>
                                        </Grid>
                                        <Grid xs={6} justify={"center"}
                                              alignContent={"center"}
                                              alignItems={"center"}>
                                            <Link
                                                href={"https://scholars.umd.edu/programs/media-self-and-society"}>
                                                <Image
                                                    src={"images/mss_sun.png"}
                                                    width={"auto"}
                                                    height={"125px"}></Image>
                                            </Link>
                                        </Grid>
                                        <Grid xs={6} justify={"center"}
                                              alignContent={"center"}
                                              alignItems={"center"}>
                                            <Link href={"https://umd.edu"}>
                                                <Image
                                                    src={"images/umd_seal.png"}
                                                    width={"auto"}
                                                    height={"125px"}></Image>
                                            </Link>
                                        </Grid>
                                        <Grid xs={6} justify={"center"}
                                              alignContent={"center"}
                                              alignItems={"center"}>
                                            <Link
                                                href={"https://scholars.umd.edu"}>
                                                <Image
                                                    src={"images/s_sun.png"}
                                                    width={"auto"}
                                                    height={"125px"}></Image>
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
                                    title={"Semester One Reflection"}
                                    subtitle={"12/8/22"}>
                                    <SemOneRefl/>
                                </Collapse>
                                <Collapse title={"UMD E-Sports Room Photo Essay (Media Connects)"}
                                          subtitle={"11/11/22"}>
                                    <ESportsRoom/>
                                </Collapse>
                                <Collapse
                                    title={"African American History Museum Photo Essay"}
                                    subtitle={"10/2/22"}>
                                    <AAMuseum/>
                                </Collapse>
                            </Collapse.Group>
                        </Page>
                    </Tabs.Item>
                    <Tabs.Item label="Resume" value="3">
                        <Display shadow
                                 caption={"Click on image to download pdf"}
                                 onClick={() => window.open("matthewpallan.pdf")}>
                            <Image src="images/resume_preview.png"/>
                        </Display>
                    </Tabs.Item>
                </Tabs>
            </div>
        </>
    );
}