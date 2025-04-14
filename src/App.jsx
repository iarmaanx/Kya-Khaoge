import { useState, useEffect } from 'react';
import vegLogo from './veg-logo.png';
import nonVegLogo from './non-veg-logo.jpg';

function App() {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [name1, setName1] = useState(null);
  const [name2, setName2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const vegItems = ['pasta', 'salad', 'dessert', 'rice'];

  const isVeg = (name) => vegItems.includes(name?.toLowerCase());

  const getData = async (clickedImage = null) => {
    setLoading(true);
    const url = "https://foodish-api.com/api/";
    
    if (clickedImage === null) {
      // Initial load - fetch both images
      const [res1, res2] = await Promise.all([fetch(url), fetch(url)]);
      const [data1, data2] = await Promise.all([res1.json(), res2.json()]);
      setImg1(data1);
      setImg2(data2);
    } else {
      // Update only the unselected image
      const res = await fetch(url);
      const data = await res.json();
      
      if (clickedImage === 1) {
        setImg2(data);
      } else {
        setImg1(data);
      }
      setSelectedImage(clickedImage);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData(); // This will now load both images initially
  }, []);

  const extractFoodName = (url) => {
    try {
      const urlString = String(url);
      const parts = urlString.split('/');
      const lastPart = parts[parts.length - 1];
      const nameWithExt = lastPart.split('.').slice(0, -1).join('.');
      const foodName = nameWithExt.replace(/\d+/g, '');
      return foodName;
    } catch (error) {
      console.log('Food name could not be extracted.', error);
      return null;
    }
  };

  useEffect(() => {
    if (img1) setName1(extractFoodName(img1.image));
    if (img2) setName2(extractFoodName(img2.image));
  }, [img1, img2]);

  return (
    <div className='bg-gray-900 min-h-screen px-4 py-2'>
      <h1 className='text-yellow-500 text-4xl mb-10 font-bold text-center'>Kya Khaoge 😋?</h1>

      

      <div className='flex flex-col md:flex-row items-center justify-center gap-12'>
        {/* First Image */}
        <div className='text-center'>
          {loading || !img1 ? (
            <p className='text-white h-96 w-80 flex items-center justify-center'>Loading...</p>
          ) : (
            <div>
              <img
                src={img1.image}
                alt='Food 1'
                className={`h-96 w-80 object-cover border-4 ${selectedImage === 1 ? 'border-green-500' : 'border-yellow-300'} rounded-lg cursor-pointer shadow-lg`}
                onClick={() => getData(1)}
              />
              <div className='flex justify-center items-center mt-2'>
                <p className='text-white mr-2 capitalize'>{name1}</p>
                <img src={isVeg(name1) ? vegLogo : nonVegLogo} className='h-5 w-5' alt='Type' />
              </div>
            </div>
          )}
        </div>

        <h2 className='text-white text-xl font-bold'>OR</h2>

        {/* Second Image */}
        <div className='text-center'>
          {loading || !img2 ? (
            <p className='text-white h-96 w-80 flex items-center justify-center'>Loading...</p>
          ) : (
            <div>
              <img
                src={img2.image}
                alt='Food 2'
                className={`h-96 w-80 object-cover border-4 ${selectedImage === 2 ? 'border-green-500' : 'border-yellow-300'} rounded-lg cursor-pointer shadow-lg`}
                onClick={() => getData(2)}
              />
              <div className='flex justify-center items-center mt-2'>
                <p className='text-white mr-2 capitalize'>{name2}</p>
                <img src={isVeg(name2) ? vegLogo : nonVegLogo} className='h-5 w-5' alt='Type' />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* How to Play */}
      <div className='bg-yellow-100 text-gray-800 p-4 mt-24 rounded shadow-md max-w-xl mx-auto mb-8'>
        <h2 className='text-xl font-semibold mb-2'>How to Play 🍽️</h2>
        <p>Select one of the two food items. A new image will replace the unselected one. Keep playing and discover what you love to eat!</p>
      </div>
    </div>
  );
}

export default App;