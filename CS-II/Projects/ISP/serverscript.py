import requests

x = requests.get("https://www.codermerlin.academy/users/onik-hoque/Digital%20Portfolio/CS-II/Projects/ISP/features.json")

print(x.text)
