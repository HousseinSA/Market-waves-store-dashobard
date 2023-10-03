import Header from "../components/header"
import Buttons from "../components/buttons"
import Inbox from "../components/inbox"
import RecentActivity from "../components/recent_activity"
import Layout from "../components/Layout"
import LoginPage from "../components/login_page"

const Desktop = () => {
  const value = true
  if (value) {
    return (
      <Layout>
        <Header />
        <Buttons />
        <Inbox />
        <RecentActivity />
      </Layout>
    )
  } else {
    return <LoginPage />
  }
}

export default Desktop
