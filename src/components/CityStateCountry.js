import React, { useEffect, useState } from 'react';
import { Country, State, City } from "country-state-city";
import { Link } from 'react-router-dom';
    
function FindyourWorld(){
    
      const [countries, setCountries] = useState([]);
      const [statesList, setStatesList] = useState([]);
      const [cityList, setCityList] = useState([]);
      const [selectedCountry, setSelectedCountry] = useState(null);
      const [selectedState, setSelectedState] = useState(null);
    
      useEffect(() => {
        let country = Country.getAllCountries().map((val)=>{
          console.log(val,'val');
          return val
        })
        setCountries(country)
      }, []);
    
      const onClickSelectCountry=(val)=>{
        setSelectedCountry(val);
        let state = State?.getStatesOfCountry(val?.isoCode);
        setStatesList(state);
      }

      const onClickSelectState=(val)=>{
        console.log(selectedCountry,'selected country')
        setSelectedState(val);
        let city = City?.getCitiesOfState(selectedState?.countryCode,selectedState?.isoCode);
        setCityList(city);
      }
      
    return (
        <>

      <div className="container" style={{fontSize:'15px', cursor:'pointer'}}>
        <Link to="/Box">UI Task</Link>
      <div className="row">
        <div className="col-sm-3 divhead">
            <label>Country</label>
              {countries.map((val,i)=>(<div className='divbox' onClick={()=>onClickSelectCountry(val)}>
                            {val.name}
                        </div>))}
            </div>
            
            <div className="col-sm-3 divhead">
            <label>State</label>
            {statesList.map((val)=>(<div className='divbox' onClick={()=>onClickSelectState(val)}>
                            {val.name}
                        </div>))}
            </div>

            <div className="col-sm-3 divhead">
            <label>City</label>
            {cityList.map((val)=>(<div className='divbox'>
                            {val.name}
                        </div>))}
            </div>
        </div>
        </div>
    </>
)
}

export default FindyourWorld;