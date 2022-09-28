import React, { useState } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

// Models
import LEVELS from "../models/levels";

const FormFormik = () => {
  const taskSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Min 3 characters")
      .max(10, "Max 10 characters")
      .required("Name is required"),
    lastName: Yup.string()
      .min(3, "Min 3 characters")
      .max(20, "Max 20 characters")
      .required("Last Name is required"),
  });

  const taskDefault = {
    name: "afg",
    lastName: "Fuentes",
    level: LEVELS.NORMAL,
  };

  const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);

    // Push new value to list
    const push = (element) => {
      setValue((oldValue) => [...oldValue, element]);
    };

    // Remove value from list
    const remove = (index) => {
      setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    };

    // List is Empty ? true / false
    const isEmpty = () => value.length === 0;

    return {
      value,
      setValue,
      push,
      remove,
      isEmpty,
    };
  };

  const tasks = useList([taskDefault]);

  return (
    <div className="form">
      <h1>Task List</h1>
      <Formik
        initialValues={{
          name: "",
          description: "",
          level: LEVELS.NORMAL,
          done: false,
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            tasks.push(values);
            actions.resetForm({});
            actions.setSubmitting(false);
          }, 500);
        }}
        validationSchema={taskSchema}
      >
        {({ errors }) => (
          <Form>
            <Field name="name" placeholder="Task Name" />
            {errors && errors.name}
            <Field name="lastName" placeholder="Task Description" />
            {errors && errors.lastName}

            <Field as="select" name="level">
              <option value={LEVELS.NORMAL}>Normal</option>
              <option value={LEVELS.URGENT}>Urgent</option>
              <option value={LEVELS.BLOCKING}>Blocking</option>
            </Field>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      {tasks.isEmpty() ? (
        <p>Task List is Empty</p>
      ) : (
        tasks.value.map((task, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center" }}>
            <div>
              <i
                onClick={() => tasks.remove(index)}
                className="bi-trash contact-action"
                style={{ color: "tomato" }}
              ></i>
            </div>
            <p
              style={{
                fontWeight: "bold",
                marginLeft: "10px",
                marginTop: ".7rem",
              }}
            >
              {task.name}
            </p>
            <p style={{ marginLeft: "10px", marginTop: ".7rem" }}>
              {task.lastName}
            </p>
          </li>
        ))
      )}
    </div>
  );
};

export default FormFormik;
