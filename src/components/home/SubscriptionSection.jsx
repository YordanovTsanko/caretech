import React from "react";
import { SiMinutemailer } from "react-icons/si";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SubscriptionSection = () => {
  const initialValues = { email: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted:", values);
    resetForm();
    alert("Благодарим ви за абонамента!");
  };

  return (
    <div className="bg-primary w-full mx-auto">
      <div className="pb-8 mx-auto">
        <div className="bg-white px-6 pt-6 pb-12 flex flex-col sm:flex-row items-center gap-10 justify-center shadow-md mx-auto">
          <SiMinutemailer className="w-32 h-32 text-primary" />
          <div>
            <h2 className="text-2xl font-bold text-black mt-4 text-start">
              Абонирайте се и получавайте новини
            </h2>
            <p className="mt-2 text-gray-600 text-sm max-w-[700px] text-start">
              Присъединете се към нашия бюлетин и бъдете сред първите, които
              научават за най-новите продукти, специални оферти и ексклузивни
              промоции. Абонирайте се днес и не пропускайте нито една възможност
              за изгодна покупка или специално събитие.
            </p>
          {/* Subscription Form */}
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form className="mt-6 w-full max-w-md flex flex-col sm:flex-row gap-3">
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
      </div>
    </div>
  );
};

export default SubscriptionSection;
