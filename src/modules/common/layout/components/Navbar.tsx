import { Box, Flex, Text, Link as ChakraLink, useColorModeValue, IconButton, useColorMode, HStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { CollectionDropdown, ConnectWallet } from "@/modules/common/cta";
import useApp from "@/lib/app/hooks/useApp";
import Link from "next/link";
import { LINKS } from "@/utils/links";
import { FaMoon, FaSun } from "react-icons/fa";

interface NavbarProps {}
const Navbar: FC<NavbarProps> = (props) => {
  const {} = props;
  const { config } = useApp();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'white');

  return (
    <Box 
      py="4" 
      px={{ base: "4", md: "8" }}
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      boxShadow="sm"
    >
      <Flex
        direction="row"
        alignItems="center"
        maxW="container.lg"
        mx="auto"
        gap="6"
      >
        <Link href={LINKS.home()} passHref legacyBehavior>
          <ChakraLink 
            fontSize="xl" 
            fontWeight="bold"
            color={textColor}
            _hover={{
              textDecoration: 'none',
              color: 'blue.400',
              transform: 'scale(1.02)',
              transition: 'all 0.2s ease-in-out'
            }}
          >
            {config.name}
          </ChakraLink>
        </Link>
        <Flex direction="row" ml="auto" gap="4" alignItems="center">
          <CollectionDropdown />
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="ghost"
            colorScheme="blue"
          />
          <ConnectWallet />
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
