import React from 'react'
import Member from './components/Member';
import './App.css'
const members = [
  {
    name: "Park Jisung",
    image:"https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/02/05/2742415725.png",
    description: "Main Dancer"
  },
  {
    name: "Haechan",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6u_zrSm2HSNXIdQ5-EKSqVxsHabiPIvU_g&usqp=CAU",
    description: "Rapper"
  },
  {
    name: "Na Jaemin",
    image:"https://asset-a.grid.id/crop/0x260:750x811/945x630/photo/2023/01/31/310870095_508162927836668_106695-20230131093837.jpg",
    description: "Main Dancer"
  },
  {
    name: "Lee Je-No",
    image:"https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/04/01/1228096690.jpg",
    description: "Dancer"
  },
  {
    name: "Renjun",
    image:"https://media.matamata.com/thumbs/2022/03/24/69410-transformasi-renjun-nct-instagramatyellow-3to3/745x489-img-69410-transformasi-renjun-nct-instagramatyellow-3to3.jpg",
    description: "Main Vokal"
  },
  {
    name: "Zhong Chenle",
    image:"https://beritajatim.com/wp-content/uploads/2021/11/IMG_9561.jpg",
    description: "Main Vokal"
  },
  {
    name: "Mark Lee",
    image:"https://e0.pxfuel.com/wallpapers/705/692/desktop-wallpaper-nct-127-%EC%97%94%EC%94%A8%ED%8B%B0-127-kpop-k-pop-punch-neo-zone-the-final-round-album-mark-%EB%A7%88%ED%81%AC-mark-lee-lee-min-hyung-%EC%9D%B4%EB%AF%BC%ED%98%95-mocah-mark-lee-pc.jpg",
    description: "Main Rapper"
  }
];

const App = () => {
  return (
    <div className="wrapper">
      {
        members.map((value, index) => {
          return <Member key={index} name={value.name} src={value.image} desc={value.description}/>
        })
      }
    </div>
  )
}

export default App