import {Display, Image} from "@geist-ui/core";

export default function AAMuseum() {
    return (
        <>
            <Display shadow
                     caption="This was an exhibit at the museum dedicated to the many different kinds of music black artists have made.
                     I liked this exhibit because I enjoy music and it was interesting to see all the different artists and the genres they made music in.">
                <Image height={"700px"}
                       src="images/assignments/aa_museum/music_room.jpg"/>
            </Display>

            <Display shadow
                     caption="This piece was a replica of NASA's Mercury spacecraft constructed from the platform President Obama gave his 2009 inauguration speech on. I found this to be a wonderful repurposing of the old inauguration podium and it really spoke to me.">
                <Image height={"700px"}
                       src="images/assignments/aa_museum/platform.jpg"/>
            </Display>

            <Display shadow
                     caption="This quilt of Harriet Tubman really stood out to me because of the intricate detail. I have seen how other quilts are made so I know a lot of time goes into those and they were no where near as complex as this one. ">
                <Image height={"700px"}
                       src="images/assignments/aa_museum/tubman_quilt.jpg"/>
            </Display>
        </>


    );
}