export default function HeroBox() {
    return (
    <div className="container bg-hero-pattern min-w-full h-60 mb-20">
        <div id="hero" className="grid grid-rows-2 content-end">
          <div
            id="heroTitle"
            className="text-white place-self-center mr-5 mb-5 mt-5 text-3xl"
          >
            All your needed supplies in one spot
          </div>
          <button
            id="findOut"
            className=" bg-red-500 p-2 rounded text-white place-self-center mr-5"
          >
            Find out more
          </button>
        </div>
      </div>
    );
}