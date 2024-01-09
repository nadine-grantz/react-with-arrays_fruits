import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: "1",
      name: "Banana",
      color: "green",
      reason: "breakfast",
      price: "1 Euro",
    },
    {
      id: "2",
      name: "Kirsche",
      color: "orange",
      reason: "summer",
      price: "3,99 Euro",
    },
  ];

  return (
    <ul className="app">
      {fruits.map((fruit) => {
        return (
          <li key={fruit.id}>
            <Card
              name={fruit.name}
              color={fruit.color}
              reason={fruit.reason}
              price={fruit.price}
            />
          </li>
        );
      })}
    </ul>
  );
}
