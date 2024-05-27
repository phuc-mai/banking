import HeaderBox from "@/components/HeaderBox";
import RigthSidebar from "@/components/RigthSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Phuc",
    lastName: "Mai",
    email: "phucmai@email.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RigthSidebar user={loggedIn} transactions={[]} banks={[{}, {}]} />
    </section>
  );
};

export default Home;
