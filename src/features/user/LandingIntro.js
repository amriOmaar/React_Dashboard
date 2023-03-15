import TemplatePointers from "./components/TemplatePointers"



function LandingIntro(){

    return(
        <div className="hero min-h-full rounded-l-xl bg-base-200">
            <div className="hero-content py-12">
              <div className="max-w-md">

              <h1 className='text-6xl text-center font-bold '>
              PetHub
              </h1>

                <div className="text-center mt-12">
                <img src="/pethublogo.png" className="w-24 inline-block mr-0" alt="PetHub-logo" /></div>
              
              {/* Importing pointers component */}
              <TemplatePointers />
              
              </div>

            </div>
          </div>
    )
      
  }
  
  export default LandingIntro