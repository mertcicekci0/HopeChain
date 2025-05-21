import { LINKS } from "@/utils/links";
import { useAndromedaStore } from "@/zustand/andromeda";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, GridItem, Heading, HStack, Input, InputGroup, InputLeftElement, Select, SimpleGrid, Skeleton, Stack, VStack, useColorModeValue, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react"

interface Props {
    apps: string[]
    chainId: string;
}

const EmbeddableList: FC<Props> = (props) => {
    const { apps, chainId } = props;
    const [searchInput, setSearchInput] = useState('');
    const [sortType, setSortType] = useState('');
    const [keyList, setkeyList] = useState(apps);

    const bgColor = useColorModeValue('white', 'gray.800');
    const cardBgColor = useColorModeValue('gray.50', 'gray.700');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    useEffect(() => {
        if (searchInput) {
            const list = apps?.filter((item) => item.toLowerCase().includes(searchInput.toLowerCase())) ?? [];
            setkeyList(list);
        } else {
            setkeyList(apps ?? []);
        }
    }, [searchInput]);

    useEffect(() => {
        setkeyList(apps ?? []);
    }, [apps]);

    return (
        <Box py='48px' px={4}>
            <VStack spacing={6} w='full' alignItems={'flex-start'}>
                <Heading size="lg" mb={4}>Discover Embeddable Applications</Heading>
                <Flex w='full' gap='24px' direction={'column'}>
                    <Grid mb='24px' gap='8px' gridTemplateColumns={{ base: '1fr', md: '86% 14%' }}>
                        <Box h='40px'>
                            <InputGroup borderRadius={'8px'} boxShadow="sm">
                                <InputLeftElement pointerEvents='none'>
                                    <SearchIcon color='gray.400' />
                                </InputLeftElement>
                                <Input 
                                    type='text' 
                                    placeholder='Search applications...'
                                    onChange={(event) => setSearchInput(event.target?.value.trim())}
                                    bg={bgColor}
                                    borderColor={borderColor}
                                    _hover={{ borderColor: 'blue.400' }}
                                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)' }}
                                />
                            </InputGroup>
                        </Box>
                        <Select 
                            size='sm' 
                            h='40px' 
                            borderRadius='8px' 
                            placeholder="Sort by"
                            onChange={(event) => { setSortType(event.target.value) }}
                            bg={bgColor}
                            borderColor={borderColor}
                            _hover={{ borderColor: 'blue.400' }}
                        >
                            <option value='Asc'>A-Z</option>
                            <option value='Desc'>Z-A</option>
                        </Select>
                    </Grid>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                        {keyList.map(key => (
                            <GridItem 
                                as={Link} 
                                href={LINKS.home(key, chainId)} 
                                key={key} 
                                p='6' 
                                rounded="xl" 
                                bg={cardBgColor}
                                border="1px"
                                borderColor={borderColor}
                                transition="all 0.2s ease-in-out"
                                _hover={{
                                    transform: 'translateY(-4px)',
                                    boxShadow: 'lg',
                                    borderColor: 'blue.400',
                                    bg: useColorModeValue('gray.100', 'gray.600')
                                }}
                            >
                                <Text 
                                    fontSize="lg" 
                                    fontWeight="bold" 
                                    textTransform="uppercase"
                                    color={useColorModeValue('gray.700', 'white')}
                                >
                                    {key}
                                </Text>
                            </GridItem>
                        ))}
                    </SimpleGrid>
                </Flex>
            </VStack>
        </Box>
    )
}

export default EmbeddableList
