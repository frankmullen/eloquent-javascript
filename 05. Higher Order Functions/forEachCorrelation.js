function gatherCorrelations(journal) {
	var phis = {};
	journal.forEach(function(entry) {
		entry.events.forEach(function(event) {
			if (!(event in phis))
				phis[event] = phi(tableFor(event, journal));
		});
	});
	return phis;
}