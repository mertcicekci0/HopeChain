import { Flex, Text, Link as ChakraLink, Box, Icon, Stack, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";
import useApp from "@/lib/app/hooks/useApp";
import Link from "next/link";
import { FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';

interface FooterProps { }

const Footer: FC<FooterProps> = (props) => {
  const { } = props;
  const { config } = useApp();
  const bgColor = useColorModeValue('gray.900', 'gray.800');
  const textColor = useColorModeValue('gray.400', 'gray.300');

  return (
    <Box as="footer" bg={bgColor} color="white">
      <Flex
        direction="column"
        align="center"
        justify="center"
        p="8"
        maxW="container.lg"
        mx="auto"
      >
        <Stack direction="row" spacing="6" mb="4">
          <Link href="https://twitter.com/andromedaprotocol" passHref legacyBehavior>
            <ChakraLink target="_blank" _hover={{ color: 'blue.400' }}>
              <Icon as={FaTwitter} w="6" h="6" />
            </ChakraLink>
          </Link>
          <Link href="https://github.com/andromedaprotocol" passHref legacyBehavior>
            <ChakraLink target="_blank" _hover={{ color: 'blue.400' }}>
              <Icon as={FaGithub} w="6" h="6" />
            </ChakraLink>
          </Link>
          <Link href="https://discord.gg/andromedaprotocol" passHref legacyBehavior>
            <ChakraLink target="_blank" _hover={{ color: 'blue.400' }}>
              <Icon as={FaDiscord} w="6" h="6" />
            </ChakraLink>
          </Link>
        </Stack>

        <Text color={textColor} textAlign="center" fontSize="sm">
          More Information about <b>ANDROMEDA</b> can be found{" "}
          <Link href='https://www.andromedaprotocol.io/' passHref legacyBehavior>
            <ChakraLink 
              target="_blank" 
              data-testid="footer-link"
              color="blue.400"
              _hover={{ textDecoration: 'underline' }}
            >
              here
            </ChakraLink>
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
