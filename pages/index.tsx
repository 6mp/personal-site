import {Display, Image, Tabs, useTabs} from '@geist-ui/core'
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
                        <Display shadow
                                 caption="An open-source design system for building modern websites and applications.">

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