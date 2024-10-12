import { React, useState } from "react";
import "./App.css";
import ImageContainer from "../src/components/ImageContainer/ImageContainer";

const App = () => {
  const outdoorImages = [
    "https://5.imimg.com/data5/SELLER/Default/2023/10/353027032/OS/TU/JH/89328219/1408-wht-10-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2022/9/XR/TQ/KY/38630640/casual-shoes-500x500.jpg",
    "https://rukminim2.flixcart.com/image/750/900/xif0q/shoe/x/y/8/7-heart-beat-white-pet-7-lnt-fashion-white-original-imahfnhgcpcjynaz.jpeg?q=20&crop=false",
    "https://hips.hearstapps.com/hmg-prod/images/cushioned-shoes-15407-1632754173.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgZsvypQZoevTXtJpwKoeBVCtFw3ERgug9g&s",
    "https://cdn.thewirecutter.com/wp-content/media/2024/05/runningshoesforyou-2048px-2251.jpg?auto=webp&quality=75&width=1024",
    "https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/5/5-best-basketball-shoes-15275028-main.jpg",
    "https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/d2f615fb16e12fd4751f02bd55671cc6.jpg",
  ];
  const studioImages = [
    "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    "https://images.squarespace-cdn.com/content/v1/5d777de8109c315fd22faf3a/1652899582924-FPWXES6GG7EGOQSRDE16/unsplash-image-pQMM63GE7fo.jpg?format=2500w",
    "https://static.vecteezy.com/system/resources/thumbnails/024/669/489/small_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg",
    "https://png.pngtree.com/thumb_back/fw800/background/20240106/pngtree-mountain-river-beautiful-nature-image_15576027.jpg",
  ];
  const withHumanImages = [
    "human-image1-url",
    "human-image2-url",
    "human-image3-url",
    "",
    "",
    "",
    "",
  ];
  const tryOnImages = [
    "tryon-image1-url",
    "tryon-image2-url",
    "tryon-image3-url",
    "",
    "",
    "",
    "",
  ];
  const characterConsistencyImages = [
    "character-image1-url",
    "character-image2-url",
    "character-image3-url",
    "",
    "",
    "",
    "",
  ];
  const diversityImages = [
    "diversity-image1-url",
    "diversity-image2-url",
    "diversity-image3-url",
    "",
    "",
    "",
    "",
  ];

  const [currentImages, setCurrentImages] = useState(outdoorImages);
  const [activeButton, setActiveButton] = useState("outdoor");

  const handleButtonClick = (imageArray, buttonName) => {
    setCurrentImages(imageArray);
    setActiveButton(buttonName);
  };

  return (
    <div className="app-container">
      <div className="circle1">
        <h1 className="main-heading">
          <span>Bring out the</span> <br />
          <span>beauty of your products.</span>
        </h1>
        <p className="description">
          As your business grows, so do the complexities of managing your
          operations. Genie helps you plan better, launch faster, and focus on
          what matters most—your customers.
        </p>

        <div className="button-group">
          <button
            className={activeButton === "outdoor" ? "active" : ""}
            onClick={() => handleButtonClick(outdoorImages, "outdoor")}
          >
            Outdoor
          </button>
          <button
            className={activeButton === "studio" ? "active" : ""}
            onClick={() => handleButtonClick(studioImages, "studio")}
          >
            Studio
          </button>
          <button
            className={activeButton === "with Human" ? "active" : ""}
            onClick={() => handleButtonClick(withHumanImages, "with Human")}
          >
            With Human
          </button>
          <button
            className={activeButton === "Try On" ? "active" : ""}
            onClick={() => handleButtonClick(tryOnImages, "Try On")}
          >
            Try On
          </button>
          <button
            className={activeButton === "Character Consistency" ? "active" : ""}
            onClick={() =>
              handleButtonClick(
                characterConsistencyImages,
                "Character Consistency"
              )
            }
          >
            Character Consistency
          </button>
          <button
            className={activeButton === "Diversity" ? "active" : ""}
            onClick={() => handleButtonClick(diversityImages, "Diversity")}
          >
            Diversity
          </button>
        </div>
      </div>
      <ImageContainer images={currentImages} />
    </div>
  );
};

export default App;
