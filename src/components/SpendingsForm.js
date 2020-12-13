import { FieldArray, Formik } from "formik";
import validationSchema from "./spendingFormValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewSpending,
  getCurrentNumberOfSpendings,
  getSpendingById,
} from "../store/spendingsSlice";
import React, { Fragment } from "react";
import withSizes from "../hocs/withSizes";

const SpendingsForm = ({ id, isMobile }) => {
  const dispatch = useDispatch();
  const currentNumberOfSpendings = useSelector(getCurrentNumberOfSpendings);
  const initialValues = useSelector(getSpendingById(id)) || {
    date: "",
    category: {
      name: "",
      subcategoryName: "",
    },
    spendingValues: [""],
  };

  const submit = (values, { resetForm }) => {
    const newId = id || currentNumberOfSpendings + 1;
    dispatch(addNewSpending({ ...values, id: newId }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => submit(values, actions)}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className="form">
          {!isMobile && <h1>FILL THE FORM</h1>}
          <label htmlFor="date" className="form__label">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.date}
            className="form__input"
          />
          {errors.date && touched.date && (
            <p className="form__error">{errors.date}</p>
          )}
          <label htmlFor="category" className="form__label">
            Category
          </label>
          <input
            id="category"
            name="category.name"
            type="text"
            className="form__input"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.category.name}
          />
          {errors.category?.name && touched.category?.name && (
            <p className="form__error">{errors.category.name}</p>
          )}
          <label htmlFor="subcategory" className="form__label">
            Subcategory
          </label>
          <input
            id="subcategory"
            className="form__input"
            name="category.subcategoryName"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.category.subcategoryName}
          />
          {errors.category?.subcategoryName &&
            touched.category?.subcategoryName && (
              <p className="form__error">{errors.category.subcategoryName}</p>
            )}
          <FieldArray
            name="spendingValues"
            render={(arrayHelpers) => (
              <div>
                {values.spendingValues.map((value, index) => (
                  <Fragment key={index}>
                    <label
                      htmlFor={`spendingValues.${index}`}
                      className="form__label"
                    >
                      Value
                    </label>
                    <input
                      id={`spendingValues[${index}]`}
                      name={`spendingValues[${index}]`}
                      type="number"
                      className="form__input"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={value}
                    />
                    {errors.spendingValues &&
                      errors.spendingValues[index] &&
                      touched.spendingValues &&
                      touched.spendingValues[index] && (
                        <p className="form__error">
                          {errors.spendingValues[index]}
                        </p>
                      )}
                  </Fragment>
                ))}
                <button
                  onClick={() => arrayHelpers.push("")}
                  className="form__button"
                >
                  Add new value
                </button>
              </div>
            )}
          />

          <button type="submit" className="form__button">
            SAVE
          </button>
        </form>
      )}
    </Formik>
  );
};

export default withSizes(SpendingsForm);
