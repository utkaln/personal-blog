import { fetchCardData } from "../lib/data";
import { Card } from "../ui/dashboard/cards";
export default async function CardWrapper(){
    const { numberOfCustomers,
          numberOfInvoices,
          totalPaidInvoices,
          totalPendingInvoices,} = await fetchCardData();
    return (
        <>
            <Card title="Total Paid Invoices" value={totalPaidInvoices} type="collected"/>
            <Card title="Total Unpaid Invoices" value={totalPendingInvoices} type="pending"/>
            <Card title="Total Number of Invoices" value={numberOfInvoices} type="invoices"/>
            <Card title="Total Number of Customers" value={numberOfCustomers} type="customers"/>
        </>
    );
}