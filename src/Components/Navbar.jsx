import { Box, Image } from "@chakra-ui/react";
import React from "react";

import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineWarehouse } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineBell } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
  return (
    <Box
      boxShadow={
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      }
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        w={"60%"}
        margin={"auto"}
        height={"5rem"}
        alignItems={"center"}
        flexDirection={["column", "row"]}
      >
        <Box alignItems={"center"}>
          <Image src="https://deepthought.education/assets/images/logo/logo.svg" />
        </Box>
        <Box display={"flex"} justifyContent={"space-around"} gap={"5"}>
          <AiOutlineHome />
          <MdOutlineWarehouse />
          <IoMdSettings />
          <AiOutlineBell />
          <BsThreeDotsVertical />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
