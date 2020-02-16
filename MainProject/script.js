let test_data = data;
console.log(data);

let index = data['index'];
let planet_name = data['pl_name'];
let planet_number = data['pl_pnum'];
let num_days_orbit = data['pl_orbper'];
let planet_distance = data['st_dist'];
let planet_temperature = data['st_teff'];
let planet_mass = data['pl_masse'];
let planet_radius = data['pl_rade'];
let pub_date = data['pl_publ_date'];
let planet_error = data['Planet_Error'];

let curr_index = 0;

let rand_btn = document.getElementById('rand-btn');
let prev_btn = document.getElementById('prev-btn');
let next_btn = document.getElementById('next-btn');
let planet_name_display = document.getElementById('planet-name');
let planet_error_display = document.getElementById('planet-sim-percent');
let planet_number_display = document.getElementById('info1');
let num_days_orbit_display = document.getElementById('info2');
let planet_distance_display = document.getElementById('info3');
let planet_temperature_display = document.getElementById('info4');
let planet_mass_display = document.getElementById('info5');
let planet_radius_display = document.getElementById('info6');
let pub_date_display = document.getElementById('info7');
let planet_image = document.getElementById('planet-image');


rand_btn.onclick = function() {
    curr_index = getRandomInt(523);
    updateValues();
};

prev_btn.onclick = function() {
    if(curr_index != 0){
        curr_index--;
    }
    else curr_index = 522;

    updateValues();
};

next_btn.onclick = function() {
    if(curr_index != 522){
        curr_index++;
    }
    else curr_index = 0;

    updateValues();
};


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function updateValues(){
    planet_name_display.innerHTML = (planet_name[curr_index.toString()]);
    planet_error_display.innerHTML = (planet_error[curr_index.toString()]) + "%";
    planet_number_display.innerHTML = "Planet Number: " + (planet_number[curr_index.toString()]);
    num_days_orbit_display.innerHTML = "Days of orbit: " +(num_days_orbit[curr_index.toString()]);
    planet_distance_display.innerHTML = "Planet Distance: "+ (planet_distance[curr_index.toString()]);
    planet_temperature_display.innerHTML = "Planet Temperature: "+(planet_temperature[curr_index.toString()]);
    planet_mass_display.innerHTML = "Planet Mass: "+(planet_mass[curr_index.toString()]);
    planet_radius_display.innerHTML = "Planet Radius: "+(planet_radius[curr_index.toString()]);
    pub_date_display.innerHTML = "Discovery Date: "+(pub_date[curr_index.toString()]);

    let rand_pic = getRandomInt(3);
    let src = "";

    if(rand_pic==0) src="resources/planet1.jpg";
    else if(rand_pic==1)src="resources/planet2.jpg";
    else src="resources/planet3.jpg";

    planet_image.src = src;
}