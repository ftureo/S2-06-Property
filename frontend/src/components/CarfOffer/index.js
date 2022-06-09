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
      title: "title3",
      platform: "PlayStation 4",
      url: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffar-cry-5%2Fgold-edition%2FGLD_Image_Hero_Carrousel-1920x1080-e640f6f18caff2a624776dc93110aef701c74308.jpg",
      price: 20,
      genre: "sport",
      realPrice: 20
    },
    {
      title: "name4",
      platform: "PlayStation 4",
      url: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffar-cry-5%2Fgold-edition%2FGLD_Image_Hero_Carrousel-1920x1080-e640f6f18caff2a624776dc93110aef701c74308.jpg",
      price: 20,
      genre: "sport",
      realPrice: 20
    }
  ];
  console.log(imagesCardOffer);
  console.table(imagesCardOffer);
  return imagesCardOffer.map((image, index) => {
    return (
      <div className="card-offer" key={index}>
        <div
          className="image-CardOffer"
          style={{ backgroundImage: `url(${image.url})` }}
        ></div>
        <h2>{image.title}</h2>
      </div>
    );
  });
};
export default CardOffer;
