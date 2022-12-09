import CustomerService from "../../../image/Customerservice.png";
import FastDeliver from "../../../image/Fastdeliver.png";
import OnlinePayment from "../../../image/Fastdeliver.png";
import SelfService from "../../../image/Selfserve.png";
export const DataCard = [
    {
        id:1,
        title:"Customer Service",
        description:"Our aim is to provide best services to our client",
        cardImg: CustomerService,
        cardBtn:"Customer Service",
        visit: "/customer/Service",
    },
   {
    id:2,
    title:"Fast delivery",
    description:"To deliver fast",
    cardImg: FastDeliver,
    cardBtn:"Fast deliver",
    visit: "/fast/delivery",
   },
{
    id:3,
    title:"Online Payment",
    description:"We provide online payment",
    cardImg: OnlinePayment,
    cardBtn:"Online Payment",
    visit: "/Online/Payment",
},
{
    id:4,
    title:"Self Service",
    description:" Self service ",
    cardImg: SelfService,
    cardBtn:"Self Service",
    visit: "/Self/Service",
}
]