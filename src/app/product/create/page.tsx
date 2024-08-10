import Form from '@/components/ui/product/Create-from'
import { getsupplier } from '@/app/supplier/action';
const Page = async() => {
    const suppliers = await getsupplier()
    
    return (<div>


        <Form suppliers={suppliers} />
    </div>);
}

export default Page;


