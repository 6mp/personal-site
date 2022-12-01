import {Card, Display, Image, Text} from "@geist-ui/core";

export default function ESportsRoom() {
    return (
        <>
            <Card>
                <Text style={{textAlign: "center"}}>
                    I recently had the privilege of visiting the E-Sports room here at UMD for a Media Connects event. I learned a lot about the many different teams UMD has, how their schedules work, and also how this program ties into the school of journalism.
                </Text>
            </Card>

            <Display shadow
                     caption="This is the outside of the E-sports room on the third floor of Knight Hall. This is a temporary room, there are plans of expanding into another building soon.">
                <Image height={"700px"}
                       src="images/assignments/esports_room/outside.jpg"/>
            </Display>

            <Display shadow
                     caption="This is Nathan Stevens, he was responsible for getting this whole thing setup over the course of just a semester. Before coming to UMD he also did E-sports at the University of Kentucky..">
                <Image height={"700px"}
                       src="images/assignments/esports_room/nathan_stevens.jpg"/>
            </Display>

            <Display shadow
                     caption="This is one of the computers in the E-sports room, there are a total of 5 computers. Each of the computers has a RTX 3090 (One of the most powerful graphics cards)! The E-sports team is also sponsored by Hyper-X, a computer peripheral brand. ">
                <Image height={"700px"}
                       src="images/assignments/esports_room/pc.jpg"/>
            </Display>
        </>


    );
}