import { useState, useEffect } from 'react';

function App() {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);

  async function getData1() {
    const url = "https://foodish-api.com/api/";

    let response = await fetch(url);
    let data = await response.json();
    setImg1(data);
    console.log(data)
  }

  async function getData2() {
    const url = "https://foodish-api.com/api/";

    let response = await fetch(url);
    let data = await response.json();
    setImg2(data);
    console.log(data)
  }

  useEffect(() => {
    getData1();
  }, []); // Empty dependency array ensures useEffect runs only once

  useEffect(() => {
    getData2();
  }, []); // Empty dependency array ensures useEffect runs only once


  return (
    <>
      <h1 className='text-yellow-700 text-6xl font-bold text-center  dancing-script-bold -mt-2'>Kya Khaoge 😋
      ?
      </h1>
  <div className='flex items-center justify-center gap-24 mt-16 flex-wrap'>
      <div>
      {img1 ? (
        <div>
          <img src={img1.image} alt="Food" className='h-96 w-96 border-slate-800 border-2 rounded cursor-pointer'
          onClick={() => getData2()}/>
        </div>
      ) : (
        <p className='text-white h-96 w-96 text-center pt-48'>Loading...</p>
      )}
      </div>
      <h2 className='text-white text-xl font-bold'>Or</h2>
      <div>
      {img2 ? (
        <div>
          <img src={img2.image} alt="Food" className='h-96 w-96 border-slate-800 border-2 rounded cursor-pointer'
          onClick={() => getData1()}/>
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
