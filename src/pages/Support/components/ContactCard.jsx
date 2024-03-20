import { Button, Card, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const ContactCard = () => {
  return (
      <Card flexGrow="1" p={6} borderRadius={16}>
        <Stack spacing={4}>
        <Text fontSize="sm" fontWeight="medium">
          You will get a response within 1-2 days.
        </Text>
        <HStack gap={2} flexDirection={{
            base:'column',
            md: 'row'
        }}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeHolder="Enter your first name" />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeHolder="Enter your last name" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input placeHolder="Enter your email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter your message" />
        </FormControl>
        <Button>Send a Message</Button>
        </Stack>
      </Card>
  )
}

export default ContactCard
