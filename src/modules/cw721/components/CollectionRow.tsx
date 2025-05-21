import { LINKS } from "@/utils/links";
import {
  Box,
  Button,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
  useColorModeValue,
  Heading,
  Badge,
  HStack,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import CollectionRowToken from "./CollectionRowToken";
import { useAppUtils } from "@/lib/app/hooks";
import { useGetCw721Tokens } from "@/lib/graphql/hooks/cw721";
import { IAuctionCollection } from "@/lib/app/types";
import { FaArrowRight } from "react-icons/fa";

interface Cw721CollectionRowProps {
  collectionId: string;
}

const Cw721CollectionRow: FC<Cw721CollectionRowProps> = (props) => {
  const { collectionId } = props;
  const { getCollection } = useAppUtils();
  const collection = getCollection(collectionId) as IAuctionCollection;

  const { data: allTokens } = useGetCw721Tokens(collection.cw721);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'white');

  return (
    <Box 
      p="8" 
      rounded="2xl" 
      bg={bgColor}
      border="1px"
      borderColor={borderColor}
      boxShadow="sm"
      transition="all 0.2s ease-in-out"
      _hover={{
        boxShadow: 'lg',
        borderColor: 'blue.400',
      }}
      data-testid="cw721-collection-row"
    >
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing="6">
        <GridItem data-testid="collection-info">
          <Flex direction="column" gap="4" alignItems="start">
            <Heading size="lg" data-testid="collection-name" color={textColor}>
              {collection.name}
            </Heading>
            <Box>
              <Text fontSize="sm" color="gray.500" mb="1">
                Collection Description
              </Text>
              <Text fontWeight="medium" fontSize="md" color={textColor}>
                {collection.description || "No description available"}
              </Text>
            </Box>
            <HStack spacing="2">
              <Badge colorScheme="blue" px="2" py="1" borderRadius="full">
                {allTokens?.length || 0} Items
              </Badge>
              {collection.verified && (
                <Badge colorScheme="green" px="2" py="1" borderRadius="full">
                  Verified
                </Badge>
              )}
            </HStack>
            <Link href={LINKS.collection(collectionId)} passHref legacyBehavior>
              <Button 
                as="a" 
                w="full" 
                mt="4"
                rightIcon={<Icon as={FaArrowRight} />}
                colorScheme="blue"
                variant="solid"
                size="lg"
                data-testid="explore-collection-button"
                _hover={{
                  transform: 'translateX(4px)',
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                Explore Collection
              </Button>
            </Link>
          </Flex>
        </GridItem>
        {allTokens?.slice(0, 3).map((tokenId) => (
          <GridItem 
            key={tokenId} 
            alignSelf='center' 
            data-testid={`token-card-${tokenId}`}
          >
            <CollectionRowToken 
              tokenId={tokenId} 
              collection={collection} 
              contractAddress={collection.cw721} 
            />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Cw721CollectionRow;
