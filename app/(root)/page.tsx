import HeaderBox from "@/components/HeaderBox"
import TotalBanlancebox from "@/components/TotalBanlancebox"
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: "Ryu"}
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || "Guest"} 
                    subtext="Access and manage your account and transactions efficiently" />
                <TotalBanlancebox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1234.56}
                />
            </header>
        </div>    
    </section>
  )
}

export default Home