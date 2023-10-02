import Sidenav from "../components/sidenav"
import Header from "../components/header"
import Buttons from "../components/buttons"
import Inbox from "../components/inbox"
import RecentActivity from "../components/recent-activity"
import Layout from "../components/Layout"

const Desktop = () => {
  return (
    <Layout>
      <Header />
      <Buttons />
      <Inbox />
      <RecentActivity />
    </Layout>
  )
}

export default Desktop
