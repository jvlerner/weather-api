import React from "react";
import PropTypes from 'prop-types';
import { LottieFile } from '../LottieFile'
import lottieSun from '../../assets/lotties/sun.json'
import lottieMoon from '../../assets/lotties/moonclear.json'

const allWeathers = [
    {
        weather: "Sunny",
        icon: <LottieFile animationData={lottieSun}/>,
    },
    {
        weather: "Clear",
        icon: <LottieFile animationData={lottieMoon}/>
    },
    {
        weather: "Partly cloudy",
        icon: ""
    },
    {
        weather: "Cloudy",
        icon: ""
    },
    {
        weather: "Overcast",
        icon: ""
    },
    {
        weather: "Mist",
        icon: "Mist"
    },
    {
        weather: "Patchy rain possible",
        icon: "Patchy rain possible"
    },
    {
        weather: "Patchy snow possible",
        icon: "Patchy snow possible"
    },
    {
        weather: "Patchy sleet possible",
        icon: "Patchy sleet possible"
    },
    {
        weather: "Patchy freezing drizzle possible",
        icon: "Patchy freezing drizzle possible"
    },
    {
        weather: "Thundery outbreaks possible",
        icon: "Thundery outbreaks possible"
    },
    {
        weather: "Blowing snow",
        icon: "Blowing snow"
    },
    {
        weather: "Blizzard",
        icon: "Blizzard"
    },
    {
        weather: "Fog",
        icon: "Fog"
    },
    {
        weather: "Freezing fog",
        icon: "Freezing fog"
    },
    {
        weather: "Patchy light drizzle",
        icon: "Patchy light drizzle"
    },

    {
        weather: "Light drizzle",
        icon: "Light drizzle"
    },

    {
        weather: "Freezing drizzle",
        icon: "Freezing drizzle"
    },
    {
        weather: "Heavy freezing drizzle",
        icon: "Heavy freezing drizzle"
    },
    {
        weather: "Patchy light rain",
        icon: "Patchy light rain"
    },
    {
        weather: "Light rain",
        icon: "Light rain"
    },
    {
        weather: "Moderate rain at times",
        icon: "Moderate rain at times"
    },

    {
        weather: "Moderate rain",
        icon: "Moderate rain"
    },
    {
        weather: "Heavy rain at times",
        icon: "Heavy rain at times"
    },
    {
        weather: "Heavy rain",
        icon: "Heavy rain"
    },
    {
        weather: "Light freezing rain",
        icon: "Light freezing rain"
    },
    {
        weather: "Moderate or heavy freezing rain",
        icon: "Moderate or heavy freezing rain"
    },
    {
        weather: "Light sleet",
        icon: "Light sleet"
    },
    {
        weather: "Moderate or heavy sleet",
        icon: "Moderate or heavy sleet"
    },
    {
        weather: "Patchy light snow",
        icon: "Patchy light snow"
    },
    {
        weather: "Light snow",
        icon: "Light snow"
    },
    {
        weather: "Patchy moderate snow",
        icon: "Patchy moderate snow"
    },
    {
        weather: "Moderate snow",
        icon: "Moderate snow"
    },
    {
        weather: "Patchy heavy snow",
        icon: "Patchy heavy snow"
    },
    {
        weather: "Heavy snow",
        icon: "Heavy snow"
    },
    {
        weather: "Ice pellets",
        icon: "Ice pellets"
    },
    {
        weather: "Light rain shower",
        icon: "Light rain shower"
    },
    {
        weather: "Moderate or heavy rain shower",
        icon: "Moderate or heavy rain shower"
    },
    {
        weather: "Torrential rain shower",
        icon: "Torrential rain shower"
    },
    {
        weather: "Light sleet showers",
        icon: "Light sleet showers"
    },
    {
        weather: "Moderate or heavy sleet showers",
        icon: "Moderate or heavy sleet showers"
    },
    {
        weather: "Light snow showers",
        icon: "Light snow showers"
    },
    {
        weather: "Moderate or heavy snow showers",
        icon: "Moderate or heavy snow showers"
    },
    {
        weather: "Light showers of ice pellets",
        icon: "Light showers of ice pellets"
    },
    {
        weather: "Moderate or heavy showers of ice pellets",
        icon: "Moderate or heavy showers of ice pellets"
    },
    {
        weather: "Patchy light rain with thunder",
        icon: "Patchy light rain with thunder"
    },
    {
        weather: "Moderate or heavy rain with thunder",
        icon: "Moderate or heavy rain with thunder"
    },
    {
        weather: "Patchy light snow with thunder",
        icon: "Patchy light snow with thunder"
    },
    {
        weather: "Moderate or heavy snow with thunder",
        icon: "Moderate or heavy snow with thunder"
    }
]

export function IconCurrent({ condition }) {
    const weather = allWeathers.find((element) => element.weather === condition)

    return weather.icon

    console.log(weather)
}

IconCurrent.propTypes = {
    condition: PropTypes.string.isRequired
}