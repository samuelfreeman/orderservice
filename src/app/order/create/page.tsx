import Form from '@/components/ui/order/Create-from'
import { getProducts } from '@/app/product/action';
import { getCustomers } from '@/app/customer/action';
const Page = async () => {
    const product = await getProducts();
    const customers = await getCustomers();
    console.log(product)
    return (<div>


        <Form customers={customers} products={product} />
    </div>);
}

export default Page;


