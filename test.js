var crossfilter = require("./");

var data = crossfilter([
    {date: "2011-11-14T16:17:54Z", quantity: 2, total: 190, tip: 100, type: "tab"},
    {date: "2011-11-14T16:20:19Z", quantity: 2, total: 190, tip: 100, type: "tab"},
    {date: "2011-11-14T16:28:54Z", quantity: 1, total: 300, tip: 200, type: "visa"},
    {date: "2011-11-14T16:30:43Z", quantity: 2, total: 90, tip: 0, type: "tab"},
    {date: "2011-11-14T16:48:46Z", quantity: 2, total: 90, tip: 0, type: "tab"},
    {date: "2011-11-14T16:53:41Z", quantity: 2, total: 90, tip: 0, type: "tab"},
    {date: "2011-11-14T16:54:06Z", quantity: 1, total: 100, tip: null, type: "cash"},
    {date: "2011-11-14T17:02:03Z", quantity: 2, total: 90, tip: 0, type: "tab"},
    {date: "2011-11-14T17:07:21Z", quantity: 2, total: 90, tip: 0, type: "tab"},
    {date: "2011-11-14T17:22:59Z", quantity: 2, total: 90, tip: 0, type: "tab"},
    {date: "2011-11-14T17:25:45Z", quantity: 2, total: 200, tip: null, type: "cash"},
    {date: "2011-11-14T17:29:52Z", quantity: 1, total: 200, tip: 100, type: "visa"},
    {date: "2011-11-14T17:33:46Z", quantity: 2, total: 190, tip: 100, type: "tab"},
    {date: "2011-11-14T17:33:59Z", quantity: 2, total: 90, tip: 0, type: "tab"},
    {date: "2011-11-14T17:38:40Z", quantity: 2, total: 200, tip: 100, type: "visa"},
    {date: "2011-11-14T17:52:02Z", quantity: 2, total: 90, tip: 0, type: "tab"},
    {date: "2011-11-14T18:02:42Z", quantity: 2, total: 190, tip: 100, type: "tab"},
    {date: "2011-11-14T18:02:51Z", quantity: 2, total: 190, tip: 100, type: "tab"},
    {date: "2011-11-14T18:12:54Z", quantity: 1, total: 200, tip: 100, type: "visa"},
    {date: "2011-11-14T18:14:53Z", quantity: 2, total: 100, tip: null, type: "cash"},
    {date: "2011-11-14T18:45:24Z", quantity: 2, total: 90, tip: 0, type: "tab"},
    {date: "2011-11-14T19:00:31Z", quantity: 2, total: 190, tip: 100, type: "tab"},
    {date: "2011-11-14T19:04:22Z", quantity: 2, total: 90, tip: 0, type: "tab"},
    {date: "2011-11-14T19:30:44Z", quantity: 2, total: 90, tip: 0, type: "tab"},
    {date: "2011-11-14T20:06:33Z", quantity: 1, total: 100, tip: null, type: "cash"},
    {date: "2011-11-14T20:49:07Z", quantity: 2, total: 290, tip: 200, type: "tab"},
    {date: "2011-11-14T21:05:36Z", quantity: 2, total: 90, tip: 0, type: "tab"},
    {date: "2011-11-14T21:18:48Z", quantity: 4, total: 270, tip: 0, type: "tab"},
    {date: "2011-11-14T21:22:31Z", quantity: 1, total: 200, tip: 100, type: "visa"},
    {date: "2011-11-14T21:26:30Z", quantity: 2, total: 190, tip: 100, type: "tab"},
    {date: "2011-11-14T21:30:55Z", quantity: 2, total: 190, tip: 100, type: "tab"},
    {date: "2011-11-14T21:31:05Z", quantity: 2, total: 90, tip: 0, type: "tab"},
    {date: "2011-11-14T22:30:22Z", quantity: 2, total: 89, tip: 0, type: "tab"},
    {date: "2011-11-14T22:34:28Z", quantity: 2, total: 190, tip: 100, type: "tab"},
    {date: "2011-11-14T22:48:05Z", quantity: 2, total: 91, tip: 0, type: "tab"},
    {date: "2011-11-14T22:51:40Z", quantity: 2, total: 190, tip: 100, type: "tab"},
    {date: "2011-11-14T22:58:54Z", quantity: 2, total: 100, tip: 0, type: "visa"},
    {date: "2011-11-14T23:06:25Z", quantity: 2, total: 190, tip: 100, type: "tab"},
    {date: "2011-11-14T23:07:58Z", quantity: 2, total: 190, tip: 100, type: "tab"},
    {date: "2011-11-14T23:16:09Z", quantity: 1, total: 200, tip: 100, type: "visa"},
    {date: "2011-11-14T23:21:22Z", quantity: 2, total: 190, tip: 100, type: "tab"},
    {date: "2011-11-14T23:23:29Z", quantity: 2, total: 190, tip: 100, type: "tab"},
    {date: "2011-11-14T23:28:54Z", quantity: 2, total: 190, tip: 100, type: "tab"}
]);


var dim = data.dimension(function (d) {
    return d.type
});


//var group = dim.group().reduce2D("tip");

var group = dim.group().reduce2D("tip", ["total", "quantity"]);



//var g2 = dim.group().reduceMetrics(["tip"]);

//console.log(g2.top(Infinity));


////dim.filter("cash");
//dim.filterValues(["cash"]);
//
//dim.filterValues(["tab"]);
//
//dim.filterValues(["cash", "tab"]);
//
//dim.filterValues(["cash"]);
//
//
//console.log(dim.group().top(10));
////
//console.log(dim.top(5));

var res = group.top(Infinity);


//var oldRange = [[0, 100]];
//var newRange = [[0, 0]];

//console.log(data.subtractRanges([[0,100]], [[0,0], [110, 120]]));
//console.log(data.subtractRanges([[0,100]], [[100,100]]));
//
//console.log(data.subtractRanges([[0,100]], [[100,100]]));
//console.log(data.subtractRanges([[0,100]], [[0,0]]));
//console.log(data.subtractRanges([[0,100]], []));