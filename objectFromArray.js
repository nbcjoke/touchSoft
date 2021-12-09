const videos = [{
    id: 65432445,
    title: "The Chamber"
   }, {
    id: 675465,
    title: "Fracture"
   }, {
    id: 70111470,
    title: "Die Hard"
   }, {
    id: 654356453,
    title: "Bad Boys"
}];

let obj = videos.reduce(function(result, video)  {
return {...result, [video.id.toString()]: video.title};
}, {});

console.log(obj);