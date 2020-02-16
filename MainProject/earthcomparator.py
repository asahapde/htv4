import pandas as pd
import random

df1 = pd.read_csv('planets_space.csv')
df2 = df1.dropna()
df3 = df2.reset_index()
df4 = df3.drop(df3.columns[[1]], axis=1)

print(df4)

planet_mass = 0
planet_radius = 0
planet_temperature = 0
planet_distance = 0
orbital_days = 0
num_planets_galaxy = 0
planet_name = ""
publish_date = ""

# on click function



print(planet_mass)
print(planet_radius)
print(planet_temperature)
print(planet_distance)
print(orbital_days)
print(num_planets_galaxy)
print(planet_name)
print(publish_date)

earth_mass = 1
earth_radius = 1
earth_efft = 252
earth_year = 365
solar_system_planets = 8

error_array = []

for x in range(0,523):
    planet_mass = df4.iloc[x,df4.columns.get_loc('pl_masse')]
    planet_radius = df4.iloc[x,df4.columns.get_loc('pl_rade')]
    planet_temperature = df4.iloc[x,df4.columns.get_loc('st_teff')]
    orbital_days = df4.iloc[x,df4.columns.get_loc('pl_orbper')]
    num_planets_galaxy = df4.iloc[x,df4.columns.get_loc('pl_pnum')]

    error_mass = (planet_mass-earth_mass)/earth_mass
    error_radius = (planet_radius-earth_radius)/earth_radius
    error_temperature = (planet_temperature-earth_efft)/earth_efft
    error_orbit_days = (orbital_days-earth_year)/earth_year
    error_num_planets = (num_planets_galaxy-earth_year)/earth_year

    error_average = (error_mass+error_num_planets+error_orbit_days+error_radius+error_temperature)/5
    error_array.append(error_average)

df4["Planet_Error"] = error_array

df4.to_json('space_planets.json')

print('My name is Jeff')

print(df4)


