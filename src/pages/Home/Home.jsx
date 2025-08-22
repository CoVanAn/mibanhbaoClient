import {useState} from 'react'
import './Home.scss'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Slider from '../../components/Slider/Slider'

const Home = () => {

    const [category, setCategory] = useState('All')

  return (
    <div>
      <Slider />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />

      {/* <AppDownload /> */}
    </div>
  )
}

export default Home
