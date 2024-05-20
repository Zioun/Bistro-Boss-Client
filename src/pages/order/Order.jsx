import { useState } from "react";
import orderCover from "../../assets/shop/banner2.jpg";
import Cover from "./../../shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "./../../hooks/useMenu";
import FoodCard from "../../components/FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert',  'drinks'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  console.log(initialIndex)
  const [menu] = useMenu([]);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  
  console.log(category)
  const dessert = menu.filter((item) => item.category == "dessert");
  const pizza = menu.filter((item) => item.category == "pizza");
  const salad = menu.filter((item) => item.category == "salad");
  const soup = menu.filter((item) => item.category == "soup");
  const drinks = menu.filter((item) => item.category == "drinks");
  return (
    <div>
      <Cover
        image={orderCover}
        title={"OUR SHOP"}
        paragraph={"Would You Like To Try A DISH?"}
      ></Cover>
      <div className="py-6">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab key={salad.key} item={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab key={salad.key} item={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab key={salad.key} item={soup}></OrderTab>
          </TabPanel>

          <TabPanel>
            <OrderTab key={salad.key} item={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab key={salad.key} item={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
