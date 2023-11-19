import { useState } from 'react';
import orderFoodBanner from '../../../assets/shop/banner2.jpg'
import Cover from '../../Menus/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTabs from '../OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';

const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState()
    const [menu] = useMenu([])
    const {category} = useParams()
    console.log(category)
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div className='text-center mb-4 font-bold'>
            <Cover img={orderFoodBanner} title="Our Shop"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Drinks</Tab>
                    
                </TabList>
                <TabPanel>
                   <OrderTabs items={salad}></OrderTabs>
                </TabPanel>
                <TabPanel>
                   <OrderTabs items={soup}></OrderTabs>
                </TabPanel>
                <TabPanel>
                   <OrderTabs items={dessert}></OrderTabs>
                </TabPanel>
                <TabPanel>
                   <OrderTabs items={pizza}></OrderTabs>
                </TabPanel>
                <TabPanel>
                   <OrderTabs items={drinks}></OrderTabs>
                </TabPanel>
                
            </Tabs>
        </div >
    );
};

export default OrderFood;