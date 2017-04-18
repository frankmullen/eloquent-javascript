// use what_weather_like.html to run in browser
switch (prompt("What is the weather like?")) {
	case "rainy":
		alert("Remember to bring an umbrella!");
		break;
	case "sunny":
		alert("Go to the beach!");
		break;
	case "cloudy":
		alert("Go outside");
		break;
	default:
		alert("Unknown weather type");
		break;
}