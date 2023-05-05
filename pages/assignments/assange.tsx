import {Card, Display, Image, Text} from "@geist-ui/core";

export default function Assange() {
    return (
        <>
            <Card>
                <Text style={{textAlign: "center"}}>
                    I was recently able to see the film Ithaka as part of an event. During this screening I also heard from Julian Assange&apos;s father, brother, and lawyer.
                </Text>
            </Card>

            <Display shadow
                     caption="This is a scene from the movie when Julian's father was talking in an on air news interview.">
                <Image height={"700px"}
                       src="images/assignments/assange/assange_3.jpeg"/>
            </Display>

            <Display shadow
                     caption="In this image we can see Julian's lawyer and one of the moderators of the panel.">
                <Image height={"700px"}
                       src="images/assignments/assange/assange_2.jpeg"/>
            </Display>

            <Display shadow
                     caption="This photos shows the whole panel and also the man who filmed the whole documentary.">
                <Image height={"700px"}
                       src="images/assignments/assange/assange_1.jpeg"/>
            </Display>
        </>
    );
}