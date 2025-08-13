import React, {useState} from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Slider from '../../components/Slider/Slider'
import AppDownload from '../../components/AppDownload/AppDownload'

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
