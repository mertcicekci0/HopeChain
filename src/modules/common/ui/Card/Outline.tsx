import { Box, Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC, ReactNode } from "react"
import FallbackImage from "../Image/FallbackImage";

interface Props {
    children?: ReactNode;
    img?: string;
    link: string;
}

const CardOutline: FC<Props> = (props) => {
    const { children, link, img } = props;
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const hoverBgColor = useColorModeValue('gray.50', 'gray.700');

    return (
        <Box 
            border="1px solid" 
            borderColor={borderColor} 
            p={5} 
            borderRadius="lg"
            bg={bgColor}
            transition="all 0.2s ease-in-out"
            _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'lg',
                borderColor: 'blue.400',
                bg: hoverBgColor
            }}
        >
            <Link href={link} passHref legacyBehavior>
                <ChakraLink>
                    <FallbackImage 
                        src={img} 
                        alt="Image" 
                        borderRadius="lg" 
                        cursor='pointer' 
                        transition="all 0.3s ease-in-out"
                        _hover={{
                            transform: 'scale(1.02)',
                            filter: 'brightness(1.05)'
                        }}
                    />
                </ChakraLink>
            </Link>
            <Box 
                justifyContent="space-between" 
                mt="4"
                transition="all 0.2s ease-in-out"
            >
                {children}
            </Box>
        </Box>
    )
}

export default CardOutline