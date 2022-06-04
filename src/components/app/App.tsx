import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import React from "react";
import {MdAdd, MdFavorite, MdLanguage, MdMenuBook} from "react-icons/md";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import Card from "../Card";
import {selectTabIndex, tabIndexHasSelected} from "./tabSlice";

export default function App(): JSX.Element {
    const tabIndex = useAppSelector(selectTabIndex);
    const dispatch = useAppDispatch();

    const cards = [];
    for (let i = 0; i < 100; i++) {
        cards.push(
            <Card key={i}
                  title={i + ") I am a very simple card. I am good at containing small bits of information." +
                      " I am convenient because I require little markup to use effectively."}/>
        );
    }

    return (
        <Tabs align={"center"} isFitted={true}
              index={tabIndex} onChange={index => dispatch(tabIndexHasSelected(index))}>
            <TabList className={"sticky-footer"}>
                <Tab><MdLanguage/>&nbsp;Boards</Tab>
                <Tab><MdMenuBook/>&nbsp;Active</Tab>
                <Tab><MdFavorite/>&nbsp;Favorites</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Button mb={2} leftIcon={<MdAdd/>}>Add forum</Button>

                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Section 1 title
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Section 2 title
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Section 3 title
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </TabPanel>
                <TabPanel>
                    {cards}
                </TabPanel>
                <TabPanel>
                    kek
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
