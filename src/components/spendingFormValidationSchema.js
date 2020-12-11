import * as yup from "yup";

const validationSchema = yup.object({
  date: yup.date().required("The date is required"),
  category: yup.object({
    name: yup
      .string()
      .min(5)
      .required(
        "Category name is required & needs to be min 5 characters long"
      ),
    subcategory: yup.string(),
  }),
  spendingValues: yup
    .array()
    .of(yup.number().required().positive())
    .min(1)
    .required("Value is required"),
});

export default validationSchema;
