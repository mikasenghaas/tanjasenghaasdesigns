import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { Flex, Box, Text } from '@chakra-ui/react'

import Banner from '@/components/banner'
import PageContainer from '@/components/page-container'
import customerQuotes, { Quote } from '@/models/quotes'
import { useResponsiveFontSize } from '@/lib/responsive'

const QuoteBox = ({ quote }: { quote: Quote }) => {
  const { sm, md, lg } = useResponsiveFontSize()

  return (
    <Flex flex='0 0 100%' direction='column' alignItems='center' justifyContent='center' px={{ base: 0, md: 10 }} >
      <Text fontSize={lg} textAlign='center'>{quote.text}</Text>
      <Text fontSize={md} fontWeight={600} textAlign='center' mt={10}>{quote.author}</Text>
      <Text fontSize={sm} fontWeight={400} textAlign='center' minWidth='50%'>{quote.authorPosition}, {quote.authorCompany}</Text>
    </Flex>
  )
}

const EmblaCarousel = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [current, setCurrent] = useState<number>(0);

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setCurrent(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
      <Box bgColor='blackAlpha.300' borderRadius={10}>
        <Box ref={emblaRef} overflow='hidden'>
          <Box display="flex" mt={5}>
            {customerQuotes.map((quote: Quote, index: number) => {
              return (
                <QuoteBox
                  key={index}
                  quote={quote}
                />
              );
            })}
          </Box>
        </Box>

      <Flex justifyContent="center" alignItems="center" mt={10}>
        {customerQuotes.map((_: Quote, index: number) => {
          return (
            <Box
              key={index}
              w={2}
              h={2}
              borderRadius='full'
              mx={1}
              my={5}
              bgColor={
                current === index
                  ? "black"
                  : "white"
              }
              _hover={{ cursor: "pointer" }}
              onClick={() => scrollTo(index)}
            />
          );
        })}
      </Flex>
      </Box >
  )
}

export default EmblaCarousel;
