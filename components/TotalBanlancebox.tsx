import AnimatedCounter from "./AnimatedCounter"
import DougnnutChart from "./DougnnutChart"

const TotalBanlancebox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
        <div className="total-balance-chart">
            <DougnnutChart accounts={accounts} />
        </div>
        <div className="flex flex-col gap-6">
            <h2 className="header-2">
                Bank Accounts: {totalBanks}
            </h2>
            <div className="flex flex-col gap-2">
                <p className="total-balance-label">
                    Total Current Banalce
                </p>
                <div className="total-balance-amount flex-center gap-2">
                    <AnimatedCounter amount={totalCurrentBalance}/>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default TotalBanlancebox