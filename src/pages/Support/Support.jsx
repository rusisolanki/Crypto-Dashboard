import React from 'react'
import Layout from '../../components/Layout'
import SupportCard from './components/SupportCard'
import { MdAttachEmail } from 'react-icons/md'
import ContactCard from './components/ContactCard'
import { IoMdChatbubbles } from "react-icons/io";
import Card from '../Dashboard/components/Card'
import { Stack } from '@chakra-ui/react'

const Support = () => {
  return (
    <Layout title='Support'>
        <Stack gap='80px'>
      <SupportCard title='Contact Us' desc='Have a question regarding our services? Contact us today.' icon={MdAttachEmail} component={<ContactCard/>}/>
      <SupportCard title='Live Chat' desc='Have a question regarding our services? Contact us today.' icon={IoMdChatbubbles} component={<Card cardImg='/grid_bg.svg' text='Learn more about real estate, mortage, and corporate account services' tagText='Contact' invert={false} />}/>
      </Stack>
    </Layout>
  )
}

export default Support
