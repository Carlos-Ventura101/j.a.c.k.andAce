import React, { useState, useEffect } from "react";
import SneakerCard from "./SneakerCard";

function SneakerBox() {
  const [sneakerData, setSneakerData] = useState({
    sneakers: [
      {
        brand: "Nike",
        model: "Air Max 1",
        type: "Low top",
        nickName: "Concepts Heavy",
        retro: false,
        baseColor: "Multi Color",
        condition: "Deadstock",
        size: 11,
        img: "https://cdn.sanity.io/images/c1chvb1i/production/e58f2b0729ff9382b6971e7d16002262e34e6c2e-1922x1281.jpg/cepts-1.jpg?w=960&fm=webp",
        style: "Running",
      },
      {
        brand: "Air Jordan",
        model: "AJ1",
        type: "High top",
        nickName: "Chicago Lost & Found",
        retro: true,
        baseColor: "Red",
        condition: "Deadstock",
        size: 10.5,
        img: "https://cdn.sanity.io/images/c1chvb1i/production/3f23e1598166086dbca655262ada94049feedde9-960x588.png/image.png?fm=webp",
        style: "Basketball",
      },
      {
        brand: "Nike",
        model: "LD Waffle",
        type: "Low top",
        nickName: "Sacai Green Gusto",
        retro: false,
        baseColor: "Green",
        condition: "Deadstock",
        size: 11,
        img: "	https://i.pinimg.com/736x/29/a6/70/29a670aca94a92eb65a5510281768dbc.jpg",
        style: "Running",
      },
      {
        brand: "Nike",
        model: "Air Max 1",
        type: "Low top",
        nickName: "Concepts Mellow",
        retro: false,
        baseColor: "Green",
        condition: "Deadstock",
        size: 11,
        img: "https://cdn.sanity.io/images/c1chvb1i/production/8eaf91b6415853cb13577a9f49b6e06718927101-1100x735.jpg/concepts-nike-air-max-1-mellow-annnouncement-5.jpg?fm=webp",
        style: "Running",
      },
      {
        brand: "Nike",
        model: "Air Max 1",
        type: "Low top",
        nickName: "Sean Weathersoons",
        retro: false,
        baseColor: "Multi Color",
        condition: "Deadstock",
        size: 11,
        img: "https://cdn.sanity.io/images/c1chvb1i/production/51b9e47a2aeebc7fa014544ba189d1e1909ce130-700x468.jpg/WOTHERSPOON-1.jpg?fm=webp",
        style: "Running",
      },
      {
        brand: "Nike",
        model: "Air Max 1",
        type: "Low top",
        nickName: "Parra '18",
        retro: false,
        baseColor: "Multi Color",
        condition: "Deadstock",
        size: 11,
        img: "https://cdn.sanity.io/images/c1chvb1i/production/542bd59073912cea25db041b588e986797c2b90c-700x468.jpg/parra-nike-air-max-1-at3057-100-1-sneaker-freaker.jpg?fm=webp",
        style: "Running",
      },
      {
        brand: "Nike",
        model: "Air Max 1",
        type: "Low top",
        nickName: "N7",
        retro: false,
        baseColor: "Gray",
        condition: "Deadstock",
        size: 11,
        img: "https://cdn.sanity.io/images/c1chvb1i/production/fb60f4d23417859f070449d21d1e031bd9b01c10-1100x745.jpg/nike-air-max-1-n7-pair.jpg?fm=webp",
        style: "Running",
      },
      {
        brand: "Air Jordan",
        model: "AJ1",
        type: "Low top",
        nickName: "Zion Voodoo",
        retro: true,
        baseColor: "Brown",
        condition: "Deadstock",
        size: 10.5,
        img: "https://cdn.sanity.io/images/c1chvb1i/production/fdaf75cbe8a598112346466030e14a466a531646-1100x735.jpg/298757504_169590895642006_1845588977649528503_n.jpg?fm=webp",
        style: "Basketball",
      },
      {
        brand: "Air Jordan",
        model: "AJ1",
        type: "Mid top",
        nickName: "Fearless Blue the Great",
        retro: true,
        baseColor: "Green",
        condition: "Deadstock",
        size: 11,
        img: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/028/325/959/original/558616_08.jpg.jpeg?1573588832",
        style: "Basketball",
      },
      {
        brand: "Air Jordan",
        model: "AJ3",
        type: "High top",
        nickName: "Cement Reimagined",
        retro: false,
        baseColor: "White",
        condition: "Deadstock",
        size: 11,
        img: "https://cdn.sanity.io/images/c1chvb1i/production/02bb1c606e87be09c36e61ec7f81ea093a135a80-1100x734.jpg/cementt.jpg?fm=webp",
        style: "Basketball",
      },
      {
        brand: "Air Jordan",
        model: "AJ4",
        type: "High top",
        nickName: "Union Desert Moss",
        retro: false,
        baseColor: "Yellow",
        condition: "Deadstock",
        size: 11,
        img: "https://cdn.sanity.io/images/c1chvb1i/production/622a887b26c75366f4d0aa5439f032b506d01084-1280x854.jpg/union-air-jordan-4-tent-and-trail-desert_moss_toe.jpg?w=960&fm=webp",
        style: "Basketball",
      },
      {
        brand: "Air Jordan",
        model: "AJ1",
        type: "High top",
        nickName: "Union Black Toe",
        retro: false,
        baseColor: "Red",
        condition: "Deadstock",
        size: 10.5,
        img: "https://dskicks.ca/wp-content/uploads/2020/04/jordan-1-union-black-toe-2-510x510.jpg",
        style: "Basketball",
      },
      {
        brand: "Nike",
        model: "Dunk",
        type: "Low top",
        nickName: "Concepts Heavy",
        retro: false,
        baseColor: "Multi Color",
        condition: "Deadstock",
        size: 11,
        img: "https://cdn.sanity.io/images/c1chvb1i/production/e58f2b0729ff9382b6971e7d16002262e34e6c2e-1922x1281.jpg/cepts-1.jpg?w=960&fm=webp",
        style: "Running",
      },
      {
        brand: "Air Jordan",
        model: "AJ1",
        type: "High top",
        nickName: "Washed Black",
        retro: true,
        baseColor: "Gray",
        condition: "Deadstock",
        size: 10.5,
        img: "https://cdn.sanity.io/images/c1chvb1i/production/779a0b7d1633b376eb6b7c24ae660ba5105f7cc5-1100x735.jpg/air-jordan-1-washed-black-2.jpg?fm=webp",
        style: "Basketball",
      },
      {
        brand: "Lanvin",
        model: "Clay",
        type: "Low top",
        nickName: "Tan Clay",
        retro: false,
        baseColor: "Green",
        condition: "Deadstock",
        size: 11,
        img: "https://img.ssensemedia.com/images/f_auto,q_auto:best/222254M237007_4/lanvin-tan-clay-sneakers.jpg",
        style: "Running",
      },
      {
        brand: "Lanvin",
        model: "Bumper Sneaker",
        type: "Low top",
        nickName: "Bumper",
        retro: false,
        baseColor: "Black",
        condition: "Deadstock",
        size: 11,
        img: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F03%2Fconcepts-lanvin-bumper-black-yellowa-release-info-fm-skbrun-nylo-e20-1080-001.jpg?q=90&w=1400&cbr=1&fit=max",
        style: "Running",
      },
    ],
    mappedList: [],
  });
  const [isShown, setToggle] = useState(false);

  useEffect(() => {
    console.log(sneakerData.sneakers);
    setSneakerData((prevState) => {
      const newSneaker = { ...prevState };
      newSneaker.mappedList = newSneaker.sneakers.map(mapSneaker);
      return newSneaker;
    });
  }, []);

  const filterSneakers = (filterProperty, filterValue) => {
    setSneakerData((prevState) => {
      const newSneakers = { ...prevState };
      const filteredSneakers = newSneakers.sneakers.filter((sneaker) => {
        if (sneaker[filterProperty] === filterValue) {
          return true;
        }
      });
      console.log(filteredSneakers);
      newSneakers.mappedList = filteredSneakers.map(mapSneaker);
      return newSneakers;
    });
  };

  const mapSneaker = (sneaker, index) => {
    return (
      <SneakerCard key={index} sneaker={sneaker} onClick={filterSneakers} />
    );
  };

  const handleReset = () => {
    setSneakerData((prevState) => {
      const newSneakers = { ...prevState };
      newSneakers.mappedList = newSneakers.sneakers.map(mapSneaker);
      return newSneakers;
    });
  };

  const handleToggle = () => setToggle(!isShown);

  return (
    <React.Fragment>
      <h3>Sneaker Box</h3>
      <div className="container">
        <button type="button" onClick={handleToggle}>
          {isShown ? "Hide All" : "Show All"}
        </button>
        <button
          type="button"
          id="Reset"
          name="Reset"
          filter="test"
          onClick={handleReset}
        >
          {isShown ? "Close" : "Reset"}
        </button>
        <button className="btn" onClick={() => filterSneakers("brand", "Nike")}>
          Nike
        </button>
        <button
          className="btn"
          onClick={() => filterSneakers("brand", "Air Jordan")}
        >
          Air Jordan
        </button>
        <button
          className="btn"
          onClick={() => filterSneakers("type", "High top")}
        >
          High Tops
        </button>
        <button
          className="btn"
          onClick={() => filterSneakers("type", "Low top")}
        >
          Low Tops
        </button>
        <button className="btn" onClick={() => filterSneakers("model", "AJ1")}>
          Jordan 1s
        </button>
        <button
          className="btn"
          onClick={() => filterSneakers("model", "Air Max 1")}
        >
          Air Max 1s
        </button>
        <div className="row">{isShown && sneakerData.mappedList}</div>
        {/*  */}
      </div>
    </React.Fragment>
  );
}
export default SneakerBox;
