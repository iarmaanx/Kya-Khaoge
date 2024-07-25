import { useState, useEffect } from 'react';

function App() {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);

  //Food Names
  const [name1, setName1] = useState(null);
  const [name2, setName2] = useState(null);


  // Logo Image source
  const nonVegLogo = "./src/non-veg-logo.jpg";
  const vegLogo = "./src/veg-logo.png";

  async function getData1() {
    const url = "https://foodish-api.com/api/";
    let response = await fetch(url);
    let data = await response.json();
    setImg1(data);
    console.log(data);
  }

  async function getData2() {
    const url = "https://foodish-api.com/api/";
    let response = await fetch(url);
    let data = await response.json();
    setImg2(data);
    console.log(data);
  }

  useEffect(() => {
    getData1();
  }, []); // Empty dependency array ensures useEffect runs only once

  useEffect(() => {
    getData2();
  }, []); // Empty dependency array ensures useEffect runs only once

  // Function to extract the name from the API output
  const extractFoodName = (url) => {
    try {
      const urlString = String(url); // Ensure url is a string
      const parts = urlString.split('/');
      const lastPart = parts[parts.length - 1];
      const nameWithExt = lastPart.split('.').slice(0, -1).join('.'); // Remove the file extension
  
      // Remove numbers from the food name
      const foodName = nameWithExt.replace(/\d+/g, ''); // Regular expression to remove all digits
  
      console.log('Extracted food name:', foodName);
      return foodName;
    } catch (error) {
      console.log('Food name could not be extracted.', error);
      return null;
    }
  };


  // Extract food names when img1 or img2 changes
useEffect(() => {
    if (img1) {
      setName1(extractFoodName(img1.image));
    }
  }, [img1]);

console.log(name1)

  useEffect(() => {
    if (img2) {
      setName2(extractFoodName(img2.image));
    }
  }, [img2]);
  console.log(name2)

let logo1 = "";
let logo2 = "";

if(name1 == 'biryani'| name1 == 'butter-chicken'){
   logo1 = nonVegLogo;
}
else{
  logo1 = vegLogo;
}

if(name2 == 'biryani'| name2 == 'butter-chicken'){
  logo2 = nonVegLogo;
}
else{
  logo2 = vegLogo;
}




  return (
    <>
      <h1 className='text-yellow-700 text-6xl font-bold text-center dancing-script-bold -mt-2'>
        Kya Khaoge 😋?
      </h1>
      <div className='flex items-center justify-center gap-24 mt-16 flex-wrap'>
        <div>
          {img1 ? (
            <div className='flex flex-col items-center'>
              <img
                src={img1.image}
                alt="Food"
                className='h-96 w-96 border-slate-800 border-2 rounded cursor-pointer'
                onClick={() => getData2()}
              />
             <div className='flex mt-4 items-center'>
                <p className='text-white mr-2'>{name1}</p>
                <img src={logo1} className='h-4 w-4 mt-0.5' /></div>
            </div>
          ) : (
            <p className='text-white h-96 w-96 text-center pt-48'>Loading...</p>
          )}
        </div>
        <h2 className='text-white text-xl font-bold'>Or</h2>
        <div>
          {img2 ? (
            <div className='flex flex-col items-center'>
              <img
                src={img2.image}
                alt="Food"
                className='h-96 w-96 border-slate-800 border-2 rounded cursor-pointer'
                onClick={() => getData1()}
              />
              <div className='flex mt-4 items-center'>
                <p className='text-white mr-2'>{name2}</p>
                <img src={logo2} className='h-4 w-4 mt-0.5' /></div>
            </div>
          ) : (
            <p className='text-white h-96 w-96 text-center pt-48'>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
