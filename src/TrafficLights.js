export default function TrafficLight() {
  const trafficLights = () => {
    setInterval(() => {
      return new Promise((res) => {
        setTimeout(() => {
          console.log("Red");
          res();
        }, 1000);
      }).then(() => {
        setTimeout(() => {
          console.log("Yellow");
        }, 1000);
      });
    }, 2000);
  };
  trafficLights();
  return <div>Render your Traffic Light here.</div>;
}
