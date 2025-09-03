import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MdOutlineMailOutline } from "react-icons/md";

const SubscriptionSection = () => {
  const initialValues = { email: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted:", values);
    resetForm();
    alert("Благодарим ви за абонамента!");
  };

  return (
    <div className="w-full mx-auto pb-4">
        <div className="bg-white flex flex-col lg:flex-row items-center gap-4 justify-center mx-auto">
          <div className="flex items-center gap-2">
          <MdOutlineMailOutline className="w-20 h-20 text-primary" />

          <h2 className="text-2xl font-bold text-black ">
            Абонирайте се и получавайте новини:
          </h2></div>
          {/* Subscription Form */}
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Въведете вашия имейл"
                    className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-primary text-white font-semibold hover:bg-primary/80 transition"
                >
                  Абонирай се
                </button>
              </Form>
            )}
          </Formik>
        </div>
    </div>
  );
};

export default SubscriptionSection;
