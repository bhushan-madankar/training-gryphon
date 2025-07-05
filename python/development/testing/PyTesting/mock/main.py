import requests

def get_weather(city):
    """
    Fetches the weather for a given city.
    """
    response = requests.get(f'https://api.weather.com/v1/{city}')
    if response.status_code == 200:
        return response.json()
    else:
        raise ValueError({"error": "Unable to fetch weather data"})