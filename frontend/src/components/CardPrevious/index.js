import "./CardPrevious.css";

const CardPrevious = () => {
  const imagesCardPrevious = [
    {
      name: "name1",
      url: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffar-cry-5%2Fgold-edition%2FGLD_Image_Hero_Carrousel-1920x1080-e640f6f18caff2a624776dc93110aef701c74308.jpg"
    },
    {
      name: "name2",
      url: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffar-cry-5%2Fgold-edition%2FGLD_Image_Hero_Carrousel-1920x1080-e640f6f18caff2a624776dc93110aef701c74308.jpg"
    },
    {
      name: "name3",
      url: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffar-cry-5%2Fgold-edition%2FGLD_Image_Hero_Carrousel-1920x1080-e640f6f18caff2a624776dc93110aef701c74308.jpg"
    },
    {
      name: "name4",
      url: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffar-cry-5%2Fgold-edition%2FGLD_Image_Hero_Carrousel-1920x1080-e640f6f18caff2a624776dc93110aef701c74308.jpg"
    }
  ];
  return imagesCardPrevious.map((image, index) => {
    return (
      <div className="card-previous col-2 mx-3" key={index}>
        <div
          className="image-cardPrevious"
          style={{ backgroundImage: `url(${image.url})` }}
        ></div>
      </div>
    );
  });
};
export default CardPrevious;
