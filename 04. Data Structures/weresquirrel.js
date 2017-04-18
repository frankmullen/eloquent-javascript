//represent events in an array of objects
var journal = [
	{events: ["work", "touched tree", "pizza", "running", 
			  "television"],
	 squirrel: false},
	{events: ["work", "ice cream", "cauliflower", 
			  "lasagna", "touched tree", "brushed teeth"],
	 squirrel: false},
	{events: ["weekend", "cycling", "break", "peanuts", 
			  "beer"],
	 squirrel: true},
];

function addEntry(events, didTurnIntoASquirrel) {
	journal.push({
		events: events,
		squirrel: didTurnIntoASquirrel
	});
}

// correllation formula
function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt((table[2] + table[3]) *
				  (table[0] + table[1]) *
				  (table[1] + table[3]) *
				  (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

function hasEvent(event, entry) {
	return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
	var table = [0,0,0,0];
	for (var i = 0; i < journal.length; i++) {
		var entry = journal[i];
		var index = 0;
		if (hasEvent(event, entry))
			index +=1;
		if (entry.squirrel) 
			index +=2;
	}
	return table;
}

console.log(tableFor("pizza", journal));

var map = {};

function storePhi(event, phi) {
	map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
console.log(map["touched tree"]);

for (var event in map)
	console.log("The correlation for '" + event + "' is " + map[event]);

function gatherCorrelations(journal) {
	var phis = {};
	for (var entry = 0; entry < journal.length; entry++) {
		var events = journal[entry].events;
		for (var i = 0; i < events.length; i++) {
			var events = events[i];
			if (!(event in phis))
				phis[event] = phi(tableFor(event, journal));
		}
	}
	return phis;
} 

var correlations = gatherCorrelations(journal);
console.log(correlations.pizza);

for (var event in correlations)
	console.log(event + ": " + correlations[event]);