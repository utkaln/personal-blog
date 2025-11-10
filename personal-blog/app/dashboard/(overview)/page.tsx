import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { lusitana } from "../../ui/fonts";
import { Suspense } from "react";
import { CardsSkeleton, RevenueChartSkeleton, LatestInvoicesSkeleton } from "@/app/ui/skeletons";
import CardWrapper from "../cards";


export default async function Page(props: {
    searchParams?: Promise<{
        query?:string;
        page?:string;
    }>;
}){
    //const revenue = await fetchRevenue();
    //const latestInvoices = await fetchLatestInvoices();
    // const { numberOfCustomers,
    //   numberOfInvoices,
    //   totalPaidInvoices,
    //   totalPendingInvoices,} = await fetchCardData();
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton/>}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton/>}>
                    <LatestInvoices/>
                </Suspense>
                
            </div>
            
        </main>
    )
}