const Contact = () => {


  return(

<div class="flex flex-col items-center mt-8 justify-center light">
  <div class="w-full  bg-white rounded-[2rem] shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>

    <form className="flex flex-col">
      <input placeholder="Enter your email address" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email"
      />

      <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">
        Subscribe
      </button>
    </form>

    <div class="flex justify-center mt-4">
      <a class="text-sm text-gray-600 hover:underline" href="#">
        Privacy Policy
      </a>
    </div>
  </div>
</div>


  )
  
}; 
export default Contact; 

