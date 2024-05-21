import Root from "./root";

export default function Home() {
  return (
    <div className="flex-col bg-slate-700 text-slate-100 min-h-screen">
      <Root />
      <h1 className="text-4xl font-bold p-5 m-5 text-center">
        Welcome to Homework 3 for Frontend Web Development!
      </h1>
      <div className="grid grid-rows-3">
        <section className="flex flex-col lg:flex-row m-5 p-5 bg-gradient-to-r from-pink-500 to-pink-900 rounded-md text-slate-100 items-center shadow-lg border border-transparent">
          <h2 className="text-2xl font-semibold text-white p-6 text-left break-words flex-grow">
            Interested in information on a specific country? Find it in the List
            tab. These are cards that showcase some information on each country
            in a consistent format.
          </h2>
          <img
            src="../public/ListPage.png"
            alt="The list page."
            className="h-[200px] lg:self-center"
          />
        </section>
        <section className="flex flex-col lg:flex-row m-5 p-5 bg-gradient-to-r from-cyan-500 to-cyan-900 rounded-md items-center shadow-lg border border-transparent">
          <img
            src="../public/PopulationPage.png"
            alt="An image showing the Population tab"
            className="h-[200px] lg:self-center"
          />
          <h2 className="text-2xl font-semibold p-6 text-left flex-grow">
            How about on information about the populations of the countries?
            Navigate to the population tab to find a bar chart that shows each
            country and their corresponding population. This helps visualize the
            diversity in size of South American countries.
          </h2>
        </section>
        <section className="flex flex-col lg:flex-row m-5 p-5 bg-gradient-to-r from-slate-500 to-slate-900 rounded-md items-center shadow-lg border border-transparent">
          <h2 className="text-2xl font-semibold p-6 flex-grow">
            Lastly, find a chart displaying information on the Languages spoken
            in these countries in the Languages tab. Each language is a section
            on the pie chart, and the size is determined by how many countries
            speak that language.
          </h2>
          <img
            src="../public/LanguagePage.png"
            alt="The Languages Chart Page"
            className="h-[200px] lg:self-center"
          />
        </section>
      </div>
    </div>
  );
}
