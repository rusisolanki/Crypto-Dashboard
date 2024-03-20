import React from 'react'
import { CustomCard } from '../../../card/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const Card = ({cardImg, text, tagText, invert}) => {
  return (
    <CustomCard bg={invert ? 'white': 'green.500'} bgImage={cardImg} bgRepeat='no-repeat' bgSize='cover'>
      <Tag bg={invert? 'green.500' : 'white'} color={invert? 'white': 'green.500'} borderRadius='full'>{tagText}</Tag>
      <Text mt='3' textStyle='h5' fontWeight='medium' color={invert ? 'black' : 'white'}>
        {text}
      </Text>
    </CustomCard>
  )
}

export default Card
