import React from 'react';

const Weather = props => (

<div className="weather__info">
{ 
    props.city && props.country && <p classname="weather__key"> Location: 
    <span classname="weather__value"> { props.city }, { props.country }</span>
    </p>
}
{ 
    props.temprature && <p classname="weather__key"> Temprature: 
    <span classname="weather__value"> { props.temperature }</span>
    </p>
}
{ 
    props.humidity && <p classname="weather__key"> Humidity: 
    <span classname="weather__value"> { props.humidity }</span>
    </p>
}
{ 
    props.description && <p classname="weather__key"> Condition: 
    <span classname="weather__value"> { props.description }</span>
    </p>
}
{ 
    props.error && <p>
    <span className="weather_value">{ props.error }</span>
    </p>
    }

</div>
);


export default Weather;


