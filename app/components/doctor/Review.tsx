import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";

const Review = () => {
  const data = [
    {
      id: 0,
      image:
        "https://github.com/ProgrammingHero1/B11A08-router-warrior/blob/main/C001-assets/success-doctor.png?raw=true",
      count: 199,
      title: "Total doctor",
    },
    {
      id: 1,
      image:
        "https://github.com/ProgrammingHero1/B11A08-router-warrior/blob/main/C001-assets/success-review.png?raw=true",
      count: 467,
      title: "Total Reviews",
    },
    {
      id: 2,
      image:
        "https://github.com/ProgrammingHero1/B11A08-router-warrior/blob/main/C001-assets/success-patients.png?raw=true",
      count: 1900,
      title: "Patients",
    },
    {
      id: 3,
      image:
        "https://github.com/ProgrammingHero1/B11A08-router-warrior/blob/main/C001-assets/success-staffs.png?raw=true",
      count: 467,
      title: "Total Staffs",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-y-5 my-6">
      <CardContent className="space-y-6 text-center px-4">
        <CardHeader className="text-3xl md:text-5xl font-bold">
          We Provide Best Medical Services
        </CardHeader>
        <CardDescription className="text-lg md:text-xl">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </CardDescription>
      </CardContent>
      <CardContent className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 my-9">
        {data.map((item) => (
          <Card key={item.id} className="flex flex-col p-4 w-46">
            <CardContent className="">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-20 h-20 object-contain"
              />
            </CardContent>
            <CardHeader className="text-2xl md:text-3xl font-bold mt-4">
              {item.count}+
            </CardHeader>
            <CardDescription className="text-sm md:text-base">
              {item.title}
            </CardDescription>
          </Card>
        ))}
      </CardContent>
    </div>
  );
};

export default Review;
