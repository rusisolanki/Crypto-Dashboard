import React from "react";
import Layout from "../../components/Layout";
import { Card, Tab, TabList, TabPanel, TabPanels, Tabs, Tag } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";

const Transaction = () => {
    const tabs = [
        {
            name:'All',
            count: '230'
        },
        {
            name:'Deposit',
            count: '150'
        },
        {
            name:'Withdraw',
            count: '80'
        },
    ]
  return (
    <Layout title="Transactions">
      <Card borderRadius='1rem'>
        <Tabs>
          <TabList pt="4">
            {tabs.map(tab => (
                <Tab key={tab.name} display='flex' gap='2'>
                    {tab.name}<Tag colorScheme="gray" borderRadius='full'>{tab.count}</Tag>
                </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel>
              <TransactionTable/>
            </TabPanel>
            <TabPanel>
            <TransactionTable/>
            </TabPanel>
            <TabPanel>
            <TransactionTable/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Layout>
  );
};

export default Transaction;
