import Header from "../components/Header";
import Footer from "../components/Footer";

function HistoryPage() {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <Header />
      <div className='text-center mt-16 p-8'>
        <h1 className='text-yellow-500 text-4xl font-bold'>The Story Behind Kya Khaoge </h1>
        <p className='text-white text-xl mt-6'>
          Every other day, my friends would ask me for treats.
          It became a routine, and soon it turned into a fun challenge. But, as we all know, the treats can become expensive!
        </p>
        <p className='text-white text-xl mt-6'>
          So, being a coder, I thought, "Why not build a virtual treat-giving platform where anyone can enjoy their favorite food without spending a dime?"
          That's how the Virtual Treat System was born. Now, you can choose your favorite food, enjoy the game, and be rewarded with your virtual treats every day!
        </p>
        <p className='text-white text-xl mt-6'>
          Welcome to the world of endless food choices! 🎮🍔🍕
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default HistoryPage;
