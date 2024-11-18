import { FaShippingFast } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const HomeInfoBox = () => {
  return (
    <div className="mt-2">

        
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto mt-5">

<div className="max-w-64 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<FaShippingFast />
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Free Delivery</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">We offer free delivery on special products.</p>
    
</div>

<div className="max-w-64 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <MdPayment />
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Secure Payment</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Make secure payment for your products.</p>
    
</div>

<div className="max-w-64 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<MdProductionQuantityLimits />
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Quality Service</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">We sell products from only tested and proven brands</p>
    
</div>

<div className="max-w-64 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<RiCustomerService2Fill />
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">24/7 support</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Get access to support from our expert support team</p>
    
</div>

</div>

    </div>
  )
}

export default HomeInfoBox