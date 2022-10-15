import Image from 'next/image'
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { Flex, Box, Text } from '@chakra-ui/react'

import customerQuotes, { Quote } from '@/models/quotes'
import { useResponsiveFontSize } from '@/lib/responsive'
import useThemeColors from '@/lib/useThemeColors'

const QuoteBox = ({ quote }: { quote: Quote }) => {
  const { sm, lg, xl } = useResponsiveFontSize()
  const { primary, secondary } = useThemeColors()

  return (
    <Flex flex='0 0 100%' direction='column' alignItems='center' justifyContent='start' px={{ base: 0, md: 10 }} >
      <Image
        src={`/assets/quotes/${quote.author.toLowerCase().replaceAll(' ', '-')}.jpg`}
        alt={`${quote.author}-picture`}
        height='80px'
        width='80px'
        style={{ borderRadius: '50%' }}
        objectFit='cover'
      />
      <Text color={primary} fontSize={lg} fontWeight={600} textAlign='center' mt={5}>{quote.author}</Text>
      <Text fontSize={sm} fontWeight={500} color={secondary} textAlign='center' minWidth='50%' mb={10}>{quote.authorPosition}, {quote.authorCompany}</Text>
      <Text fontSize={xl} fontWeight={500} textAlign='center' color={primary}>{quote.text}</Text>
    </Flex>
  )
}

const EmblaCarousel = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])
  const [current, setCurrent] = useState<number>(0);
  const { primary, secondary } = useThemeColors()

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
    <Box>
      <Box ref={emblaRef} overflow='hidden'>
        <Box display="flex" mt={5} >
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
                  ? primary
                  : secondary
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
