/* 
<div class="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
          <div class="flex items-center">
            <div class="w-12 h-12 flex items-center justify-center mr-3">
              <img
                src="./assets/submarine.svg"
                alt="Submarine Sandwich"
                class="w-10 h-10"
              />
            </div>
            <div>
              <h3 class="font-medium">Submarine Sandwich</h3>
              <p class="text-xs text-gray-400">BDT 300</p>
            </div>
          </div>
          <button class="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
*/
const ChoseItem = () => {
  return (
    <div class="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
      <div class="flex items-center">
        <div class="w-12 h-12   flex items-center justify-center mr-3">
          <img src="./assets/hamburger.svg" alt="Hamburger" class="w-10 h-10" />
        </div>
        <div>
          <h3 class="font-medium">Hamburger</h3>
          <p class="text-xs text-gray-400">BDT 300</p>
        </div>
      </div>
      <button class="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-green-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChoseItem;
