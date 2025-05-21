"use client";
import { Box, Divider, useColorModeValue } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import PoweredByLogo from "./PoweredByLogo";
import Footer from "./Footer";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box 
      minH="100vh" 
      bg={bgColor}
      transition="all 0.2s ease-in-out"
    >
      <Box position="sticky" top="0" zIndex="1000" bg={bgColor}>
        <Navbar />
        <Divider borderColor={borderColor} />
      </Box>
      <Box 
        px={{ base: "4", md: "8", lg: "24" }} 
        py={{ base: "8", md: "12", lg: "16" }}
        maxW="container.xl"
        mx="auto"
      >
        {children}
      </Box>
      <Box mt="auto">
        <PoweredByLogo />
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
