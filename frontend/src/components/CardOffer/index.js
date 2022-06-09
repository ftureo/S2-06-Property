import "./CardOffer.css";

const CardOffer = () => {
  const imagesCardOffer = [
    {
      title: "Riders Republic",
      platform: "PC",
      url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EN_MAD_STD_GAME_EPIC_Store_Portrait_1200x1600_EN_1200x1600-ddd4f456e3035ce50ddfa0d358efa208",
      price: 20,
      genre: "sport",
      realPrice: 20
    },
    {
      title: "Far Cry 6",
      platform: "PC",
      url: "https://image.api.playstation.com/vulcan/img/rnd/202106/1514/fkPaEpz998Uu7QaofSj1VIhr.png",
      price: 20,
      genre: "sport",
      realPrice: 20
    },
    {
      title: "Back 4 Blood",
      platform: "PlayStation 4",
      url: "https://cdn1.epicgames.com/57dfd95548214a138218e56cd9e5b9d8/offer/EGS_Back4Blood_TurtleRockStudios_S2-1200x1600-0cd4ac84bb5491a81aa6ebfcbea9dfbf.jpg",
      price: 20,
      genre: "sport",
      realPrice: 20
    },
    {
      title: "God of War",
      platform: "PlayStation 4",
      url: "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
      price: 20,
      genre: "sport",
      realPrice: 20
    }
  ];
  return imagesCardOffer.map((image, index) => {
    return (
      <div className="card-offer" key={index}>
        <div
          className="image-CardOffer"
          style={{ backgroundImage: `url(${image.url})` }}
        ></div>
        <div className='cardinfo'>
        <h2 className='cardinfo-title'>{image.title}</h2>
        <h3 className='cardinfo-description'>{image.platform} / {image.genre}</h3>
        <h4 className='cardinfo-price'>US${image.price}</h4>
        </div>
      </div>
    );
  });
};
export default CardOffer;
