import React, { useState, useReducer, useEffect } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Grid,
  GridItem,
  Text,
  Input,
  Collapse,
  Button,
  Select,
  color,
  Tag,
} from "@chakra-ui/react";

import axios from "axios";

import { Tooltip } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { RiArrowGoBackFill } from "react-icons/ri";

import { GrRedo } from "react-icons/gr";
import { RxImage } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { AiFillBulb } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";
import { GiLotus } from "react-icons/gi";
import { IoMdLink } from "react-icons/io";
import { ImPencil } from "react-icons/im";

const links = [
  { path: "#", title: "File" },
  { path: "#", title: "Edit" },
  { path: "#", title: "View" },
  { path: "#", title: "Insert" },
  { path: "#", title: "Fromat" },
  { path: "#", title: "Tools" },
  { path: "#", title: "Table" },
  { path: "#", title: "Help" },
];

const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
  <Box>
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  </Box>
));
// {"1st method :- useReducer  "}
// _____________________________________________________________________

// const initState = {
//   Product: [],
//   isLoading: false,
//   isError: false,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_REQUEST":
//       return {
//         ...state,
//         Product: [],
//         isLoading: true,
//         isError: false,
//       };
//     case "FETCH_SUCESS":
//       return {
//         ...state,
//         Product: action.payload,
//         isLoading: true,
//         isError: false,
//       };
//     case "FETCH_FAILED":
//       return {
//         ...state,
//         Product: [],
//         isLoading: false,
//         isError: action.payload,
//       };
//     default:
//       throw new Error();
//   }
// };

const Home = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  // const [state, dispatch] = useReducer(reducer, initState);

  // const { Product, isLoading, isError } = state;

  // const getData = () => {
  //   dispatch({ type: "FETCH_REQUEST" });
  //   axios
  //     .get(
  //       "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json				"
  //     )
  //     .then((res) => {
  //       dispatch({ type: "FETCH_SUCESS", payload: res.data });
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       dispatch({ type: "FETCH_FAILED", payload: err.message });
  //       console.log(err);
  //     });
  // };

  // { 2nd method :- useState}
  // _____________________________________________________________________
  // const [data, setData] = useState([]);

  // const [loading, setLoading] = useState(false);

  // const getData = () => {
  //   setLoading(true);
  //   axios
  //     .get("http://localhost:3004/posts")
  //     .then((res) => {
  //       setData(res?.data);
  //       resData.push(res.data);
  //       console.log(res?.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  //   console.log(Product);
  // }, []);

  // if (loading) {
  //   return (
  //     <div>
  //       <h1>loading......</h1>
  //     </div>
  //   );
  // }

  return (
    <Box marginTop={"2rem"}>
      {/* i was not able to map because of cors error from api server */}
      {/* {Product.map((e) => ( */}
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={6}
        w={["90%", "80%", "60%"]}
        margin={"auto"}
      >
        <GridItem boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  bgColor={"black"}
                  color={"white"}
                  _hover={"none"}
                  rounded={"md"}
                >
                  <Box as="span" flex="1" textAlign="center">
                    <Text>Technical Project Management</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text display={"flex"}>
                  <Text fontWeight={"bold"}>Description:-</Text>
                  Story of Alignment Scope of Agility Specific Accountable
                  Staggering Approach
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box margin={5}>
            <iframe
              width={"100%"}
              height={"400px"}
              src="https://www.youtube.com/embed/TiMRwri1xJ8?&amp;no_header=1"
            ></iframe>
          </Box>
        </GridItem>
        <GridItem boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  bgColor={"black"}
                  color={"white"}
                  _hover={"none"}
                  rounded={"md"}
                >
                  <Box as="span" flex="1" textAlign="center">
                    Threadbuild
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text display={"flex"}>
                  <Text fontWeight={"bold"}>Description:-</Text>
                  Watch the video and thread build, and jot out key threads
                  while watching that video.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box margin={5}>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton _hover={"none"} rounded={"md"}>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontWeight={"bold"}>Thread A</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box display={"flex"} justifyContent={"space-around"}>
                    <Box>
                      <Text fontWeight={"bold"} textAlign={"left"}>
                        Sub Thread 1{" "}
                      </Text>
                      <Input
                        height={"7rem"}
                        placeholder={"Enter Your Text Here"}
                      ></Input>
                    </Box>
                    <Box>
                      <Text fontWeight={"bold"} textAlign={"left"}>
                        Sub Thread 2
                      </Text>
                      <Input
                        height={"7rem"}
                        placeholder={"Enter Your Text Here"}
                      ></Input>
                    </Box>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-around"}>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      gap={5}
                      fontSize={"20"}
                    >
                      <Tooltip
                        label="Eureka Moment"
                        fontSize="md"
                        placement="bottom"
                      >
                        <CustomCard>
                          <AiFillBulb />
                        </CustomCard>
                      </Tooltip>
                      {/* <Tooltip label="Hover me">
                        <AiFillBulb />
                      </Tooltip> */}

                      <Tooltip label="Answers" fontSize="md" placement="bottom">
                        <CustomCard>
                          <MdInsertComment />
                        </CustomCard>
                      </Tooltip>
                      <Tooltip
                        label="Questions"
                        fontSize="md"
                        placement="bottom"
                      >
                        <CustomCard>
                          <RiQuestionnaireFill />
                        </CustomCard>
                      </Tooltip>
                      <Tooltip
                        label="Root Of Thought"
                        fontSize="md"
                        placement="bottom"
                      >
                        <CustomCard>
                          <GiLotus />
                        </CustomCard>
                      </Tooltip>
                    </Box>
                    <Box display={"flex"}>
                      <Box>
                        <Select placeholder="Select option">
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </Select>
                      </Box>
                      <Box>
                        <Select placeholder="Select option">
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </Select>
                      </Box>
                    </Box>
                  </Box>
                  <Box textAlign={"left"} m={5}>
                    <Button bgColor={"blue"} color={"white"} _hover={"none"}>
                      +Sub Thread
                    </Button>
                  </Box>
                  <Box m={2}>
                    <Text fontWeight={500} textAlign={"left"}>
                      Summary for thread A
                    </Text>
                    <Input placeholder="Enter Text Here" h={20}></Input>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box
                      display={"flex"}
                      justifyContent={"space-around"}
                      gap={2}
                      alignItems={"center"}
                    >
                      <IoMdLink />
                      <Text>Thread Credit</Text>
                      <ImPencil />
                    </Box>
                    <Box>
                      <Select placeholder="Select option">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option3">Option 4</option>
                      </Select>
                    </Box>
                  </Box>
                  <Box m={2} textAlign={"right"}>
                    <Button bgColor={"blue"} color={"white"} _hover={"none"}>
                      +New Thread
                    </Button>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </GridItem>
        <GridItem boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  bgColor={"black"}
                  color={"white"}
                  _hover={"none"}
                  rounded={"md"}
                >
                  <Box as="span" flex="1" textAlign="center">
                    Structure you pointers
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text display={"flex"}>
                  <Text fontWeight={"bold"}>Description:-</Text>
                  Write a 400-500 word article, from your thread. Publish your
                  understanding, and showcase your learning to the entire world.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box margin={5}>
            <Text fontWeight={"bold"} textAlign={"left"}>
              Title
            </Text>
            <Input h={"5rem"} />
            <Text fontWeight={"bold"} textAlign={"left"}>
              Content
            </Text>
            <Box
              w={"80%"}
              display={"flex"}
              justifyContent={"space-around"}
              margin={"auto"}
            >
              {links.map((e) => {
                return <Link to={e.path}>{e.title}</Link>;
              })}
            </Box>
            <Box
              w={"80%"}
              display={"flex"}
              justifyContent={"space-around"}
              margin={"auto"}
              alignItems={"center"}
            >
              <RiArrowGoBackFill /> <GrRedo /> <RxImage />
              <Text>Paragraph</Text>
              <RiArrowDropDownLine />
              <BsThreeDots />
            </Box>
          </Box>
          <Box p={5}>
            <Input h={"200px"}></Input>
          </Box>
          <Box paddingRight={5}>
            <Text textAlign={"right"}> 0 Words </Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-around"}>
            <Box>
              <Text textAlign={"left"} fontWeight={"bold"}>
                Category
              </Text>
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option3">Option 4</option>
              </Select>
            </Box>
            <Box>
              <Text textAlign={"left"} fontWeight={"bold"}>
                Sub Category
              </Text>
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option3">Option 4</option>
              </Select>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            w={"80%"}
            margin={"auto"}
            alignItems={"center"}
          >
            <Box>
              <Text textAlign={"left"} fontWeight={"bold"}>
                Thumbnail
              </Text>
              <Input type={"file"}></Input>
            </Box>
            <Box>
              <Text textAlign={"left"} fontWeight={"bold"}>
                Thought Process
              </Text>
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option3">Option 4</option>
              </Select>
            </Box>
          </Box>
          <Box>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <Box textAlign={"left"} m={5}>
                <Button bgColor={"blue"} color={"white"} _hover={"none"}>
                  +Sub Thread
                </Button>
              </Box>
              <Box textAlign={"left"} m={5}>
                <Button bgColor={"blue"} color={"white"} _hover={"none"}>
                  +Sub Thread
                </Button>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  bgColor={"black"}
                  color={"white"}
                  _hover={"none"}
                  rounded={"md"}
                >
                  <Box as="span" flex="1" textAlign="center">
                    4SA Method
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text display={"flex"}>
                  <Text fontWeight={"bold"}>Description:-</Text>
                  To explore more read more
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box margin={5}>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton _hover={"none"} rounded={"md"}>
                    <AccordionIcon />
                    <Box as="span" flex="1" textAlign="left">
                      Introduction
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text display={"flex"} padding={5}>
                    The 4SA Method, How to bring a idea into process?
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton _hover={"none"} rounded={"md"}>
                    <AccordionIcon />
                    <Box as="span" flex="1" textAlign="left">
                      Thread A
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Collapse
                    startingHeight={20}
                    in={show}
                    display={"flex"}
                    padding={5}
                  >
                    How are you going to develop your strategy? Which method are
                    you going to use to develop a strategy?What if the project
                    is lengthy?
                  </Collapse>
                  <Button size="sm" onClick={handleToggle} mt="1rem">
                    Show {show ? "Less" : "More"}
                  </Button>
                  <Box
                    w={"full"}
                    textAlign={"left"}
                    boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 1px"}
                    margin={"10px"}
                    padding={"10px"}
                    bgColor={"gray.100"}
                  >
                    Example
                  </Box>
                  <Box>
                    <Collapse
                      startingHeight={20}
                      in={show}
                      display={"flex"}
                      padding={5}
                    >
                      You have a concept; how will you put it into practice to
                      create a product? How will you organize the final product?
                      Can the product's MVP be created in a week?How will you
                      come up with a plan? Do you need a strategy or just a plan
                      to succeed?
                    </Collapse>
                    <Button size="sm" onClick={handleToggle} mt="1rem">
                      Show {show ? "Less" : "More"}
                    </Button>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton _hover={"none"} rounded={"md"}>
                    <AccordionIcon />
                    <Box as="span" flex="1" textAlign="left">
                      Trasition1
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Collapse
                    startingHeight={50}
                    in={show}
                    display={"flex"}
                    padding={5}
                  >
                    <Text display={"flex"} padding={5}>
                      For preparing the strategy from the concept and build it
                      into product one of the methods used is the 4SA approach.
                    </Text>
                  </Collapse>
                  <Button size="sm" onClick={handleToggle} mt="1rem">
                    Show {show ? "Less" : "More"}
                  </Button>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton _hover={"none"} rounded={"md"}>
                    <AccordionIcon />
                    <Box as="span" flex="1" textAlign="left">
                      Thread B
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box
                    w={"full"}
                    textAlign={"left"}
                    boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 1px"}
                    margin={"10px"}
                    padding={"10px"}
                    bgColor={"gray.100"}
                  >
                    Example 1
                  </Box>
                  <Box>
                    <Collapse
                      startingHeight={20}
                      in={show}
                      display={"flex"}
                      padding={5}
                    >
                      You have a concept; how will you put it into practice to
                      create a product? How will you organize the final product?
                      Can the product's MVP be created in a week?How will you
                      come up with a plan? Do you need a strategy or just a plan
                      to succeed?
                    </Collapse>
                    <Button size="sm" onClick={handleToggle} mt="1rem">
                      Show {show ? "Less" : "More"}
                    </Button>
                  </Box>
                  <Box
                    w={"full"}
                    textAlign={"left"}
                    boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 1px"}
                    margin={"10px"}
                    padding={"10px"}
                    bgColor={"gray.100"}
                  >
                    Example 2
                  </Box>
                  <Box>
                    <Collapse
                      startingHeight={20}
                      in={show}
                      display={"flex"}
                      padding={5}
                    >
                      You have a concept; how will you put it into practice to
                      create a product? How will you organize the final product?
                      Can the product's MVP be created in a week?How will you
                      come up with a plan? Do you need a strategy or just a plan
                      to succeed?
                    </Collapse>
                    <Button size="sm" onClick={handleToggle} mt="1rem">
                      Show {show ? "Less" : "More"}
                    </Button>
                  </Box>
                  <Box
                    w={"full"}
                    textAlign={"left"}
                    boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 1px"}
                    margin={"10px"}
                    padding={"10px"}
                    bgColor={"gray.100"}
                  >
                    Example 3
                  </Box>
                  <Box>
                    <Collapse
                      startingHeight={20}
                      in={show}
                      display={"flex"}
                      padding={5}
                    >
                      You have a concept; how will you put it into practice to
                      create a product? How will you organize the final product?
                      Can the product's MVP be created in a week?How will you
                      come up with a plan? Do you need a strategy or just a plan
                      to succeed?
                    </Collapse>
                    <Button size="sm" onClick={handleToggle} mt="1rem">
                      Show {show ? "Less" : "More"}
                    </Button>
                  </Box>
                  <Box
                    w={"full"}
                    textAlign={"left"}
                    boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 1px"}
                    margin={"10px"}
                    padding={"10px"}
                    bgColor={"gray.100"}
                  >
                    Example 4
                  </Box>
                  <Box>
                    <Collapse
                      startingHeight={20}
                      in={show}
                      display={"flex"}
                      padding={5}
                    >
                      You have a concept; how will you put it into practice to
                      create a product? How will you organize the final product?
                      Can the product's MVP be created in a week?How will you
                      come up with a plan? Do you need a strategy or just a plan
                      to succeed?
                    </Collapse>
                    <Button size="sm" onClick={handleToggle} mt="1rem">
                      Show {show ? "Less" : "More"}
                    </Button>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton _hover={"none"} rounded={"md"}>
                    <AccordionIcon />
                    <Box as="span" flex="1" textAlign="left">
                      Conclusion
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text display={"flex"} padding={5}>
                    The product is now ready to launch; we have a strategy-based
                    plan from an innovative concept.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </GridItem>
      </Grid>
      {/* ))} */}
    </Box>
  );
};

export default Home;
