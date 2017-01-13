import * as d3 from 'd3';

export function drawChart (xDomain, dataset, timeToRetire, totalValue, revisedValue) {
		//Obviously data will change
		//console.log (dataset)
		// dataset.sort(function(a, b) {
		// 			return d3.descending(+a.year, +b.year);
		// 		});
		var margin = {top: 20, right: 10, bottom: 30, left: 88};
		var width = (document.getElementById('areaChart').getBoundingClientRect().width)-margin.left - margin.right;
	    var height = (document.getElementById('areaChart').getBoundingClientRect().height)-margin.top - margin.bottom;
	    d3.select("#areaChart")
	    .html("")
	    //Set up scales
		var x = d3.scale.linear()
			.domain(xDomain)
			.range([margin.left, width+margin.left-margin.right]);

		var y = d3.scale.linear()
			//.domain([0,1000000])
			.domain([0,d3.max(dataset, function(d) { return d.cost2; })])
			.range([height, margin.top]);

		var xAxis = d3.svg.axis()
		    .scale(x)
		    .orient("bottom");

		var yAxis = d3.svg.axis()
		    .scale(y)
		    .orient("left");

		var area = d3.svg.area()
		    .x(function(d) { return x(d.year); })
		    .y0(height)
		    .y1(function(d) { return y(d.cost); });

		var area2 = d3.svg.area()
		    .x(function(d) { return x(d.year); })
		    .y0(height)
		    .y1(function(d) { return y(d.cost2); });

		var svg = d3.select("#areaChart").append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  
		svg.append("path")
			.datum(dataset)
			.attr("class", "area2")
			.attr("d", area2);
		svg.append("path")
			.datum(dataset)
			.attr("class", "area")
			.attr("d", area);

		svg.append("line")
			.attr("x1", function () { return x(timeToRetire)-100})
			.attr("y1", function () { return y(totalValue)})
			.attr("x2", function () { return x(timeToRetire)})
			.attr("y2", function () { return y(totalValue)})
			.attr("stroke-width", 1)
			.attr("stroke", "black");

		svg.append("line")
			.attr("x1", function () { return x(timeToRetire)-100})
			.attr("y1", function () { return y(revisedValue)})
			.attr("x2", function () { return x(timeToRetire)})
			.attr("y2", function () { return y(revisedValue)})
			.attr("stroke-width", 1)
			.attr("stroke", "black");

		svg.append("line")
			.attr("x1", function () { return x(timeToRetire)-100})
			.attr("y1", function () { return y(totalValue)})
			.attr("x2", function () { return x(timeToRetire)-100})
			.attr("y2", function () { return y(revisedValue)})
			.attr("stroke-width", 1)
			.attr("stroke", "black");
		
		svg.append("circle")
			.attr("cx", function () { return x(timeToRetire)})
			.attr("cy", function () { return y(totalValue)})
			.attr("r",8)
			.attr("class", "dots")

		svg.append("circle")
			.attr("cx", function () { return x(timeToRetire)})
			.attr("cy", function () { return y(revisedValue)})
			.attr("r",8)
			.attr("class", "dots")

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis)
		
		svg.append("text")
		    .attr("class", "pressentation")
		    .attr("x", width/2)
		    .attr("y", height+margin.bottom+margin.top-4)
		    .text("Years to retirement");

		svg.append("g")
			.attr("class", "y axis")
			.attr("transform", "translate("+margin.left+",0)")
			.call(yAxis)
			.call(adjustTextLabels);

		var label=d3.select('#areaChart').append("div")
				.attr("id","difLabel")
				.attr("class", "diffLabe")
				.html(function () {
					return `
					<div class="diffLabel">${"Difference"}</div>
					<div class="diffLabel">${"in fees"}</div>
					<div class="diffLabeplus">${"£"+d3.format(",f")(revisedValue-totalValue)}</div>
					`;
					});
		var div=d3.select('#difLabel')
		div.style('left', x(timeToRetire)-180+'px')
			.style('top', y(totalValue+((revisedValue-totalValue)/2))-height-margin.top-margin.bottom-40+'px');

	function adjustTextLabels(selection) {
	    selection.selectAll('.axis text')
	        .attr("transform", "translate(0,-8)");
	}

}