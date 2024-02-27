import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";

const Navbar = () => {
  return (
    <Button className="w-full rounded flex justify-between items-center sticky top-2">
      <div className="flex justify-center items-center font-bold md:text-4xl">
       Color <Card className="rounded p-1 shadow-none">Web</Card>
      </div>
    </Button>
    )
}

export default Navbar;