import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Smallcard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";

export default async function Home() {
  // const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
  //   (res) => res.json()
  // );

  // const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
  //   (res) => res.json()
  // );
  const exploreData = [
    {
      img: "https://rb.gy/fcqwkm",
      location: "London",
      distance: "45-minute drive",
    },
    {
      img: "https://rb.gy/24pfsp",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      img: "https://rb.gy/mfyvbh",
      location: "Liverpool",
      distance: "4.5-hour drive",
    },
    {
      img: "https://rb.gy/hqhi2w",
      location: "York",
      distance: "4-hour drive",
    },
    {
      img: "https://rb.gy/h5mhvg",
      location: "Cardiff",
      distance: "45-minute drive",
    },
    {
      img: "https://rb.gy/swzyav",
      location: "Birkenhead",
      distance: "4.5-hour drive",
    },
    {
      img: "https://rb.gy/dskrxv",
      location: "Newquay",
      distance: "6-hour drive",
    },
    {
      img: "https://rb.gy/9vgcyw",
      location: "Hove",
      distance: "2-hour drive",
    },
  ];

  const cardData = [
    {
      img: "https://links.papareact.com/2io",
      title: "Outdoor getaways",
    },
    {
      img: "https://links.papareact.com/q7j",
      title: "Unique stays",
    },
    {
      img: "https://links.papareact.com/s03",
      title: "Entire homes",
    },
    {
      img: "https://links.papareact.com/8ix",
      title: "Pet allowed",
    },
  ];
  return (
    <div>
      <Head>
        <title>Airbnb clone</title>
        <meta name="google-site-verification" content="tLeNIrZpNS21aggfJeVIAJmRHHWCONpCdfNHpgb6BzQ" />
      </Head>
      <Header></Header>
      <Banner></Banner>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>

          {/* Pull data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ img, distance, location }) => (
              <Smallcard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Whishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
