import React, { useState, useEffect } from "react";
import PapCard from "./PapCard";

function CarSales() {
  const [vehicleData, setVehicleData] = useState({
    inventory: [
      {
        Make: "Acura",
        Model: "MDX",
        Price: 49550,
        Year: 2023,
        Condition: "New",
        Color: "Grey",
        Type: "SUV",
        Img: "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/110007075/5J8YE1H09PL008011/5e510f27589e1ca5088c8f9fed6ccc4f.jpg",
      },
      {
        Make: "Ford",
        Model: "F150 Lightning",
        Price: 55080,
        Year: 2020,
        Condition: "Used",
        Color: "Blue",
        Type: "Truck",
        Img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2022_Ford_F-150_Lightning_Lariat_in_Atlas_Blue_Metallic%2C_Front_Right%2C_08-06-2022.jpg",
      },
      {
        Make: "Acura",
        Model: "Integra",
        Price: 32800,
        Year: 2023,
        Condition: "New",
        Color: "White",
        Type: "Car",
        Img: "https://www.motorbiscuit.com/wp-content/uploads/2022/04/acura-tlx-type-s.jpg",
      },
      {
        Make: "Audi",
        Model: "A5",
        Price: 44100,
        Year: 2023,
        Condition: "New",
        Color: "White",
        Type: "Car",
        Img: "https://pictures.dealer.com/a/audifletcherjonesaoa/0225/dce1dc38da4321ad9381cfa985005d34x.jpg?impolicy=resize&w=768",
      },
      {
        Make: "Tesla",
        Model: "Model Y Performance",
        Price: 76400,
        Year: 2022,
        Condition: "New",
        Color: "Blue",
        Type: "SUV",
        Img: "https://listings-prod.tcimg.net/listings/1780/61/36/7SAYGDEF5NF343661/D3D5E2Z3EOA4K72OLPGYDQ7AMA-cr-540.jpg",
      },
      {
        Make: "Nissan",
        Model: "Versa",
        Price: 15080,
        Year: 2020,
        Condition: "Used",
        Color: "Black",
        Type: "Car",
        Img: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/13901/2020-Nissan-Versa-front_13901_032_2400x1800_KH3.png",
      },
      {
        Make: "Tesla",
        Model: "Model Y",
        Price: 66695,
        Year: 2023,
        Condition: "New",
        Color: "Grey",
        Type: "SUV",
        Img: "https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/06/Tesla-Model-Y-5.jpg",
      },
      {
        Make: "Mazda",
        Model: "3",
        Price: 22550,
        Year: 2022,
        Condition: "Used",
        Color: "Red",
        Type: "Car",
        Img: "https://www.autotrader.com/wp-content/uploads/2021/12/2022-mazda3-2.5s-carbon-edition.jpg",
      },
      {
        Make: "Ram",
        Model: "1500",
        Price: 33975,
        Year: 2021,
        Condition: "Used",
        Color: "Blue",
        Type: "Truck",
        Img: "https://www.edmunds.com/assets/m/for-sale/64-1c6srfu98mn900882/img-1-600x400.jpg",
      },
      {
        Make: "Hyundai",
        Model: "Tucson",
        Price: 26450,
        Year: 2023,
        Condition: "New",
        Color: "Black",
        Type: "SUV",
        Img: "https://www.motorbiscuit.com/wp-content/uploads/2022/08/Front-angle-view-of-2023-Hyundai-Tucson-with-Phantom-Black-hue.jpg?w=925",
      },
      {
        Make: "BMW",
        Model: "X5",
        Price: 45400,
        Year: 2019,
        Condition: "Used",
        Color: "Gray",
        Type: "SUV",
        Img: "https://www.primemotorz.com/imagetag/727/main/l/Used-2019-BMW-X5-40-M-SPORT-AWD-xDrive40i-1617396071.jpg",
      },
      {
        Make: "Kia",
        Model: "Soul",
        Price: 19790,
        Year: 2023,
        Condition: "New",
        Color: "Red",
        Type: "SUV",
        Img: "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/thumbnails/large/chrome/b20905771cfb3b357a340681bafff32e.png",
      },
      {
        Make: "Chevrolet",
        Model: "Silverado",
        Price: 35600,
        Year: 2023,
        Condition: "New",
        Color: "Black",
        Type: "Truck",
        Img: "https://content.homenetiol.com/2000292/2148321/0x0/570a800eab2846bc9e7ac0cca5ba81f8.jpg",
      },
      {
        Make: "BMW",
        Model: "IX",
        Price: 95600,
        Year: 2023,
        Condition: "New",
        Color: "Black",
        Type: "SUV",
        Img: "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/c51905b0000b639a185eeb080dd879bf007f5604/photos/37wPx2w0-nSoSZo76Jj-(edit).jpg?t=166245235688",
      },
      {
        Make: "Lucid",
        Model: "Air",
        Price: 177600,
        Year: 2023,
        Condition: "New",
        Color: "Gold",
        Type: "Car",
        Img: "https://www.cnet.com/a/img/resize/4bcd023d2d990843a467c15aaba79a64c7348fd0/hub/2022/02/17/baea8a6c-86e7-4dba-834f-896a678a20c5/2022-lucid-air-dream-edition-performance-118.jpg?auto=webp&fit=crop&height=675&width=1200",
      },
      {
        Make: "Tesla",
        Model: "Model X Plaid",
        Price: 135600,
        Year: 2023,
        Condition: "New",
        Color: "Grey",
        Type: "SUV",
        Img: "https://manofmany.com/wp-content/uploads/2022/04/Omaze-Tesla-1200x900.jpg",
      },
    ],
    mappedList: [],
  });
  const [isShown, setToggle] = useState(false);

  const onFilterClicked = (prop, filterValue) => {
    setVehicleData((prevState) => {
      const newInventory = { ...prevState };
      // eslint-disable-next-line array-callback-return
      const filteredInventory = newInventory.inventory.filter((vehicle) => {
        if (vehicle[prop] === filterValue) {
          return true;
        }
      });
      console.log(filteredInventory);
      newInventory.mappedList = filteredInventory.map(mapVehicle);
      return newInventory;
    });
  };

  // const onFilterVehicleClick = (e) => {
  //   console.log(e);
  //   setVehicleData((prevState) => {
  //     const newInventory = { ...prevState };
  //     const filteredInventory = newInventory.inventory.filter((vehicle) => {
  //       if (vehicle.Condition === "New") {
  //         return true;
  //       }
  //     });
  //     console.log(filteredInventory);
  //     newInventory.mappedList = filteredInventory.map(mapVehicle);
  //     return newInventory;
  //   });
  // };

  const filterByCarOnClick = (e) => {
    console.log(e, "In Cars nananana");
    setVehicleData((prevState) => {
      const newInventory = { ...prevState };
      const filteredCars = newInventory.inventory.filter(
        (vehicle) => vehicle.Type === "Car"
      );
      console.log(filterByCarOnClick, "That's My Type");
      newInventory.mappedList = filteredCars.map(mapVehicle);
      return newInventory;
    });
  };
  const filterBySuvOnClick = (e) => {
    console.log(e);
    setVehicleData((prevState) => {
      const newInventory = { ...prevState };
      const filteredSuvs = newInventory.inventory.filter(
        (vehicle) => vehicle.Type === "SUV"
      );
      console.log(filterBySuvOnClick, "Who Got the Keys To my Bimmer");
      newInventory.mappedList = filteredSuvs.map(mapVehicle);
      return newInventory;
    });
  };

  const filterByTruckOnClick = (e) => {
    console.log(e);
    setVehicleData((prevState) => {
      const newInventory = { ...prevState };
      const filteredTrucks = newInventory.inventory.filter(
        (vehicle) => vehicle.Type === "Truck"
      );
      console.log(filterByTruckOnClick, "Keep On Truckin'");
      newInventory.mappedList = filteredTrucks.map(mapVehicle);
      return newInventory;
    });
  };

  const filterByTypeOnClick = (e) => {
    console.log(e, "What's Your Type");
    setVehicleData((prevState) => {
      const newVehicleData = { ...prevState };
      const filteredVehicleData = newVehicleData.inventory.filter((vehicle) => {
        return vehicle.Condition === "Used";
        //   const filteredVehicleData = newVehicleData.inventory.filter((vehicle) => {
        //     return vehicle.Type === type(e.target.name);
      });
      console.log(filterByTypeOnClick);
      newVehicleData.mappedList = filteredVehicleData.map(mapVehicle);
      return newVehicleData;
    });
  };

  const mapVehicle = (vehicle, index) => {
    return <PapCard key={index} vehicle={vehicle} onClick={onFilterClicked} />;
  };

  useEffect(() => {
    console.log(vehicleData.inventory);
    setVehicleData((prevState) => {
      const newInventory = { ...prevState };
      newInventory.mappedList = newInventory.inventory.map(mapVehicle);
      return newInventory;
    });
  }, []);

  const handleReset = (e) => {
    console.log(e, "test");
    setVehicleData((prevState) => {
      const newInventory = { ...prevState };
      newInventory.mappedList = newInventory.inventory.map(mapVehicle);
      return newInventory;
    });
  };

  const handleToggle = () => setToggle(!isShown);

  return (
    <React.Fragment>
      <h3>Filter</h3>
      <div className="row ">
        <div className="container">
          <button
            type="button"
            id="Reset"
            name="Reset"
            filter="test"
            onClick={handleReset}
          >
            Reset
          </button>
          <button type="button" onClick={handleToggle}>
            {isShown ? "Hide All" : "Show All"}
          </button>
          <div id="New">
            <button
              className="btn active"
              // onClick={onFilterVehicleClick}
              onClick={() => {
                onFilterClicked("Condition", "New");
              }}
            >
              {" "}
              New Vehicles
            </button>

            <button className="btn" onClick={filterByTypeOnClick}>
              {" "}
              Used Vehicles
            </button>
            <button
              className="btn"
              id="Car"
              value="Car"
              name="Car"
              onClick={filterByCarOnClick}
            >
              {" "}
              Cars
            </button>
            <button
              className="btn"
              id="SUV"
              name="SUV"
              onClick={filterBySuvOnClick}
            >
              {" "}
              SUVs
            </button>
            <button
              className="btn"
              id="Truck"
              name="Truck"
              onClick={filterByTruckOnClick}
            >
              {" "}
              Trucks
            </button>
          </div>

          <div className="row row-cols-12 d-flex mx-auto justify-content-center">
            {isShown && vehicleData.mappedList}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default CarSales;
