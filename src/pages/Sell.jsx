import React from 'react'
import BannerDescription from '../components/imagegridtext/BannerDescription'
import GetReady from '../components/text/GetReady'
import FilterCardsSakook from '../components/filtercards/FilterCardsSakook'
import BannerDescriptionButton from '../components/imagegridtext/BannerDescriptionButton'
import RealEstateCards from '../components/card/RealEstateCards'
import NeighborhoodDeals from '../components/card/NeighborhoodDeals'

function Sell() {
  return (
    <div>
      <BannerDescriptionButton
        // name={"Sell With US"}
        heading={"The easiest home sale ever"}
        description={
          "We’ll pay market rate for your property, in cash. 1 viewing. 100% closing record"
        }
      />
       <RealEstateCards/>
       <NeighborhoodDeals/>
      <GetReady/>
    </div>
  )
}

export default Sell