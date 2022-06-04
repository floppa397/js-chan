import {Avatar, Box, Center, Heading, Image, Stack, Text} from "@chakra-ui/react";
import React, {ReactNode} from "react";
import testImage from "../../assets/test-photo.jpeg?resource";

export default class Card extends React.Component<{
    title: string,
}> {
    render(): ReactNode {
        return (
            <Center py={6}>
                <Box
                    maxW={"445px"}
                    w={"full"}
                    bg={"white"}
                    boxShadow={"2xl"}
                    rounded={"md"}
                    p={6}
                    overflow={"hidden"}>
                    <Box
                        h={"210px"}
                        bg={"gray.100"}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={"relative"}>
                        <Image src={testImage}/>
                    </Box>
                    <Stack>
                        <Text
                            color={"green.500"}
                            textTransform={"uppercase"}
                            fontWeight={800}
                            fontSize={"sm"}
                            letterSpacing={1.1}>
                            Blog
                        </Text>
                        <Heading
                            color={"gray.700"}
                            fontSize={"2xl"}
                            fontFamily={"body"}>
                            Boost your conversion rate
                        </Heading>
                        <Text color={"gray.500"}>
                            {this.props.title}
                        </Text>
                    </Stack>
                </Box>
            </Center>
        );
    }
}
