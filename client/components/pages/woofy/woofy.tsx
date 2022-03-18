import { Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react";
import { useWallet } from "../../../hooks/useWallet";
import Mint from "./mint";
import Sell from "./sell";

export default function Woofy() {

    const tabTextColor = useColorModeValue("black", "brand");
    const { isConnected } = useWallet();

    return (
        <Tabs colorScheme={tabTextColor}>
            <TabList marginBottom="2" paddingX="16" marginTop="8">
                <Tab minWidth={{ base: "auto", md: "24" }} flexGrow={{ base: 1, md: "unset" }}>Mint</Tab>
                <Tab minWidth={{ base: "auto", md: "24" }} flexGrow={{ base: 1, md: "unset" }} disabled={!isConnected}>Buy</Tab>
                <Tab minWidth={{ base: "auto", md: "24" }} flexGrow={{ base: 1, md: "unset" }} disabled={!isConnected}>Sell</Tab>
            </TabList>

            <TabPanels>

                {/* Mint tab */}
                <TabPanel>
                    <Mint />
                </TabPanel>

                {/* Buy tab */}
                <TabPanel>
                    <div />
                </TabPanel>

                {/* Sell tab */}
                <TabPanel>
                    <Sell />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}