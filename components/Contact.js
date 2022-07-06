import React, { useState } from "react";
import styles from "./../styles/Contact.module.scss";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const [error, setError] = useState("");
  const [answer, setAnswer] = useState("");

  const initialValues = { name: "", user_email: "", message: "" };
  const onSubmit = (values) => {
    emailjs
      .send("service_bgig7wr", "template_583ull7", values, "0q9Qq6J4YNwgvgs0t")
      .then((res) => {
        if (res.status === 200) {
          setAnswer("Your message was sended");
        }
      })
      .catch((err) => {
        setError(err.text);
      });
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    user_email: Yup.string().email("Invalid email format").required("Required"),
    message: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <div className={styles.contactHeader}>Contact</div>
        <div className={styles.questionText}>
          Have a question or want to work together?
        </div>
        <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
          <input
            type="text"
            className={styles.formItem}
            placeholder="Name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <div className="error">
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <input
            type={"email"}
            className={styles.formItem}
            placeholder="Enter your Email"
            name="user_email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.user_email}
          />
          <div className="error">
            {formik.touched.user_email && formik.errors.user_email ? (
              <div className="error">{formik.errors.user_email}</div>
            ) : null}
          </div>
          <textarea
            className={`${styles.formItem} ${styles.textAreaItem}`}
            placeholder="Your message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          <div className="error">
            {formik.touched.message && formik.errors.message ? (
              <div className="error">{formik.errors.message}</div>
            ) : null}
          </div>
          <div>
            <div className="error">{error ? error : null}</div>
            <div className="confirm">{answer ? answer : null}</div>
            <button className={styles.buttonSubmit} type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
