const boxarts = [
    {
      width: 200,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
    }, 
    {
      width: 150,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
    }, 
    {
      width: 300,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
  }, 
    {
      width: 425,
      height: 150,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
    }
  ];

const box = boxarts.reduce((result, boxart) => {
    if (result.width * result.height < boxart.width * boxart.height) {
        return boxart;
    }
    return result;
}, boxarts[0]);

console.log(box.url);