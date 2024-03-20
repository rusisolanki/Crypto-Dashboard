import { Container, Grid, GridItem } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";
import Transactions from "./components/Transactions";
import Card from "./components/Card";

const Dashboard = () => {
    const card = [
        {
            img: '/dot_bg.svg',
            text: 'Learn more about Loans - Keep your Crypto, access its value without selling it.',
            tagText: 'Loan',
        },
        {
            img: '/grid.svg',
            text: 'Learn more about real estate, mortage, and corporate account services ',
            tagText: 'Contact',
        }
    ]
  return (
    <Layout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="4"
      >
        <GridItem colSpan={{
            base: '1',
            xl: '2'
        }}>
          <Portfolio />
        </GridItem>
        <GridItem colSpan={1}>
          <Price />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <Card cardImg='/dot_bg.svg' text='Learn more about Loans - Keep your Crypto, access its value without selling it.' tagText='Loan' invert={true}/>
        </GridItem>
        <GridItem colSpan={1}>
          <Card cardImg='/grid_bg.svg' text='Learn more about real estate, mortage, and corporate account services' tagText='Contact' invert={false}/>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
