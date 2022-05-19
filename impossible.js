var url1 = 'https://api.opensea.io/api/v1/collection/decentraland/stats'


async function getData1(){
    const response = await fetch(url1);
    const data = await response.json();
    var counter = data.length;
    var i = 0;
    floor_decentraland.push(data.stats.floor_price);
    volume_decentraland.push(data.stats.seven_day_volume);

    volume_decentraland = volume_decentraland[0].toFixed(2);
    floor_decentraland = floor_decentraland[0].toFixed(2);

    document.getElementById('floor_decentraland').innerHTML = floor_decentraland
    document.getElementById('volume_decentraland').innerHTML = volume_decentraland

}

var url2 = 'https://api.opensea.io/api/v1/collection/sandbox/stats'


async function getData2(){
    const response = await fetch(url2);
    const data = await response.json();
    var counter = data.length;
    var i = 0;
    floor_sandbox.push(data.stats.floor_price);
    volume_sandbox.push(data.stats.seven_day_volume);
    
    volume_sandbox = volume_sandbox[0].toFixed(2);
    floor_sandbox = floor_sandbox[0].toFixed(2);

    document.getElementById('floor_sandbox').innerHTML = floor_sandbox
    document.getElementById('volume_sandbox').innerHTML = volume_sandbox

}

var url3 = 'https://api.opensea.io/api/v1/collection/somnium-space/stats'


async function getData3(){
    const response = await fetch(url3);
    const data = await response.json();
    var counter = data.length;
    var i = 0;
    floor_somnium.push(data.stats.floor_price);
    volume_somnium.push(data.stats.seven_day_volume);
    
    volume_somnium = volume_somnium[0].toFixed(2);
    floor_somnium = floor_somnium[0].toFixed(2);

    document.getElementById('floor_somnium').innerHTML = floor_somnium
    document.getElementById('volume_somnium').innerHTML = volume_somnium

}

var url4 = 'https://api.opensea.io/api/v1/collection/cryptovoxels/stats'


async function getData4(){
    const response = await fetch(url4);
    const data = await response.json();
    var counter = data.length;
    var i = 0;
    floor_cryptovoxels.push(data.stats.floor_price);
    volume_cryptovoxels.push(data.stats.seven_day_volume);
    
    volume_cryptovoxels = volume_cryptovoxels[0].toFixed(2);
    floor_cryptovoxels = floor_cryptovoxels[0].toFixed(2);

    document.getElementById('floor_cryptovoxels').innerHTML = floor_cryptovoxels
    document.getElementById('volume_cryptovoxels').innerHTML = volume_cryptovoxels

}

var url5 = 'https://api.opensea.io/api/v1/collection/treeverse-plots/stats'


async function getData5(){
    const response = await fetch(url5);
    const data = await response.json();
    var counter = data.length;
    var i = 0;
    floor_treeverse.push(data.stats.floor_price);
    volume_treeverse.push(data.stats.seven_day_volume);
    
    volume_treeverse = volume_treeverse[0].toFixed(2);
    floor_treeverse = floor_treeverse[0].toFixed(2);

    document.getElementById('floor_treeverse').innerHTML = floor_treeverse
    document.getElementById('volume_treeverse').innerHTML = volume_treeverse

}

var url6 = 'https://api.opensea.io/api/v1/collection/league-of-kingdoms/stats'


async function getData6(){
    const response = await fetch(url6);
    const data = await response.json();
    var counter = data.length;
    var i = 0;
    floor_kingdom.push(data.stats.floor_price);
    volume_kingdom.push(data.stats.seven_day_volume);
    
    volume_kingdom = volume_kingdom[0].toFixed(2);
    floor_kingdom = floor_kingdom[0].toFixed(2);

    document.getElementById('floor_kingdom').innerHTML = floor_kingdom
    document.getElementById('volume_kingdom').innerHTML = volume_kingdom

}

var url7 = 'https://api.opensea.io/api/v1/collection/cyber-curated/stats'


async function getData7(){
    const response = await fetch(url7);
    const data = await response.json();
    var counter = data.length;
    var i = 0;
    floor_curated.push(data.stats.floor_price);
    volume_curated.push(data.stats.seven_day_volume);
    
    volume_curated = volume_curated[0].toFixed(2);
    floor_curated = floor_curated[0].toFixed(2);

    document.getElementById('floor_curated').innerHTML = floor_curated
    document.getElementById('volume_curated').innerHTML = volume_curated

}

getData1()
getData2()
getData3()
getData4()
getData5()
getData6()
getData7()

var floor_decentraland = []
var volume_decentraland = []

var floor_sandbox = []
var volume_sandbox = []

var floor_somnium = []
var volume_somnium = []

var floor_cryptovoxels = []
var volume_cryptovoxels = []

var floor_treeverse = []
var volume_treeverse = []

var floor_kingdom = []
var volume_kingdom = []

var floor_curated = []
var volume_curated = []
