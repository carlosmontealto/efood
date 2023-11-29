import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

const Home = () => {
  return (
    <>
      <Header homePage={true} />
      <RestaurantList />
    </>
  )
}

export default Home
