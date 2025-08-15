import { Button } from "@mantine/core";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex justify-center pt-6">
      <div className="w-4/5  flex justify-end ">
        <Button
          variant="gradient"
          gradient={{ from: "blue", to: "cyan", deg: 90 }}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Home;
