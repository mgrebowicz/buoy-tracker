import { useLocation } from 'react-router-dom';
import BuoyCard from '../../components/BuoyCard/BuoyCard'

export default function BuoyDetailPage({ newBuoy, setNewBuoy}) {
    
    console.log(useLocation().state.buoy);
    const { state : {buoy} } = useLocation();
    
    //need to reformat, add buoy services module for business logic

    return (
        <>
            <h1>Buoy Detail Page</h1>
            {buoy.entries.map((entry, i) => {
                return (
                    <>
                        <div key={i}>Station ID: {entry.classifiers.station}</div>
                        <div key={i}>Latitude: {entry.axes.latitude.toFixed(2)}</div>
                        <div key={i}>Longitude: {entry.axes.longitude.toFixed(2)}</div>
                        <div key={i}>Time of Observation: {entry.axes.time}</div>
                        <div key={i}>Station ID: {entry.classifiers.station}</div>
                        <div key={i}>Barometric Pressure: {entry.data.air_pressure.toFixed(2)} mb</div>
                        <div key={i}>Wind Speed: {Math.floor(entry.data.wind_spd)} kts</div>
                        <div key={i}>Wind Direction: {entry.data.wind_dir} degrees</div>
                        <div key={i}>Gusts: {Math.floor(entry.data.wind_spd)} kts</div>
                        <div key={i}>Sea Surface Temperature: {Math.floor(entry.data.sea_surface_temperature)} degrees C</div>
                        <div key={i}>Wave Height: {entry.data.wave_height} meters</div>
                        <div key={i}>Dominant Wave Period: {entry.data.dominant_wpd} kts</div>
                        <div key={i}>Mean Wave Direction: {entry.data.mean_wave_dir} degrees </div>
                    </>
                    )
            })}
        </>
    )

};

