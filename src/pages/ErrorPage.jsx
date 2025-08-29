import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full my-20 px-5">
      <img src="error-404.png" className="h-36 sm:h-44 w-auto" alt="404Error" />
      <h2 className="text-lg mt-5 sm:mt-0 sm:text-2xl font-bold text-primary text-center">
        404 - Страницата не е намерена
      </h2>
      <p className="mt-1 text-gray-600 text-sm sm:text-lg text-center">
        Съжаляваме, страницата, която търсите, не съществува или е преместена.
      </p>
    </div>
  );
};

export default ErrorPage;
