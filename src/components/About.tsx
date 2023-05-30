import React from "react";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-myBlack from-darkRed">
          About
        </span>
      </h1>
      <p className="text-lg lg:text-xl text-myBlack  mb-8">
        On this page, we would like to provide you with some additional
        information about Cocktail Compass and the data API that we used to
        power this website.
      </p>

      <p className="text-lg lg:text-xl text-myBlack  mb-6">
        With the help of The Cocktail DB API, we can showcase an extensive
        collection of cocktails, including classic favorites and innovative
        creations. You can explore our vast library of drinks, search for
        specific cocktails, and even discover new recipes based on your favorite
        ingredients.
      </p>

      <p className="text-lg lg:text-xl text-myBlack  mb-6">
        By leveraging the capabilities of The Cocktail DB API, Cocktail Compass
        can provide users with a wide range of cocktail recipes, ingredient
        details, and drink images. It enables users to search for specific
        drinks, discover new recipes, and explore different ingredients to
        create their own signature cocktails.
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-4">
          <strong className="font-semibold">
            Endpoints and Functionality:
          </strong>
        </p>

        <ul className="list-disc list-inside">
          <li className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-2">
            <span className="font-semibold">/filter.php?i=ingredient:</span>{" "}
            Retrieves a list of drinks based on a specific ingredient.
          </li>
          <li className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-2">
            <span className="font-semibold">/lookup.php?i=id:</span> Retrieves
            details of a specific drink by its unique ID.
          </li>
          <li className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-2">
            <span className="font-semibold">/search.php?s=term:</span> Searches
            for drinks based on a keyword or term.
          </li>
          <li className="text-lg lg:text-xl text-gray-700 dark:text-gray-300">
            <span className="font-semibold">/random.php:</span> Retrieves a
            random drink from the database.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default About;
