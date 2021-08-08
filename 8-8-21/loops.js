var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
];

// for (var i = 0; i < players.length; i++) { // Traditional way
//     console.log(players[i]);
// }

// for (player in players) { // Modern way
//     console.log(player);
//     console.log(players[player]);
// }

players.forEach(function(element) { // Newer to JS - Used more
    console.log(element);
});