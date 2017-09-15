import requests
import geolocation_pb2

location = geolocation_pb2.GeoLocation()
location.lat = 23.545435435435
location.lng = 53.4453245435345
location.device = 345678

res = requests.post(url='http://localhost:3000',
                    data=location.SerializeToString(),
                    headers={'Content-Type': 'application/octet-stream'})
print(res)
