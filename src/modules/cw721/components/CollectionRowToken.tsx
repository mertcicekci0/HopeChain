import { IBaseCollection } from "@/lib/app/types";
import { useGetCw721Token } from "@/lib/graphql/hooks/cw721";
import FallbackImage from "@/modules/common/ui/Image/FallbackImage";
import { LINKS } from "@/utils/links";
import { Box, Flex, HStack, Image, Text, useColorModeValue, Badge } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC, useMemo } from "react";

interface CollectionRowTokenProps {
  tokenId: string;
  collection: IBaseCollection;
  contractAddress: string;
}

const CollectionRowToken: FC<CollectionRowTokenProps> = (props) => {
  const { collection, contractAddress, tokenId } = props;
  const { data: token } = useGetCw721Token(contractAddress, tokenId);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'white');

  return (
    <Box 
      p={2}
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: 'translateY(-4px)',
      }}
    >
      <Link href={LINKS.cw721Token(collection.id, tokenId)} passHref legacyBehavior>
        <Box
          as="a"
          display="block"
          position="relative"
          overflow="hidden"
          borderRadius="lg"
          bg={bgColor}
          border="1px"
          borderColor={borderColor}
          boxShadow="sm"
          _hover={{
            boxShadow: 'lg',
            borderColor: 'blue.400',
          }}
        >
          <FallbackImage 
            src={token?.metadata?.image} 
            alt={token?.metadata?.name || `Token #${tokenId}`}
            borderRadius="lg"
            cursor='pointer'
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.05)',
              filter: 'brightness(1.05)'
            }}
          />
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            p="4"
            bg="linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)"
            color="white"
          >
            <Text fontWeight="bold" fontSize="lg" noOfLines={1}>
              {token?.metadata?.name || `Token #${tokenId}`}
            </Text>
            {token?.metadata?.attributes && (
              <HStack mt="2" spacing="2">
                {token.metadata.attributes.slice(0, 2).map((attr, index) => (
                  <Badge key={index} colorScheme="blue" px="2" py="1" borderRadius="full">
                    {attr.trait_type}: {attr.value}
                  </Badge>
                ))}
              </HStack>
            )}
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default CollectionRowToken;
