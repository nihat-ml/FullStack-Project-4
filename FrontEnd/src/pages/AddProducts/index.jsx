import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddProduct.module.css";

const validationSchema = Yup.object({
  title: Yup.string().required("Başlıq mütləqdir").min(3, "Başlıq ən az 3 simvol olmalıdır"),
  price: Yup.number().required("Qiymət mütləqdir").positive("Qiymət müsbət olmalıdır"),
  image: Yup.string().required("Şəkil URL-i mütləqdir").url("Keçərli URL olmalıdır"),
});


const initialValues = {
  title: "",
  price: "",
  image: "",
};

function AddProduct() {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    axios
      .post("http://localhost:3005/products", values)
      .then((response) => {
        alert("Məhsul əlavə edildi!");
        navigate("/"); 
      })
      .catch((error) => {
        alert("Xəta baş verdi. Yenidən cəhd edin.");
      });
  };

  return (
    <div>
      <h2>Məhsul Əlavə Et</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="title">Məhsul Başlığı</label>
              <Field type="text" id="title" name="title" />
              <ErrorMessage name="title" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label htmlFor="price">Məhsul Qiyməti</label>
              <Field type="text" id="price" name="price" />
              <ErrorMessage name="price" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label htmlFor="image">Məhsul Şəkil URL</label>
              <Field type="text" id="image" name="image" />
              <ErrorMessage name="image" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit">Məhsulu Əlavə Et</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddProduct;
