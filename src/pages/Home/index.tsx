import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Header homePage={true} />
      <RestaurantList restaurants={restaurants} isLoading={isLoading} />
    </>
  )
}

export default Home
