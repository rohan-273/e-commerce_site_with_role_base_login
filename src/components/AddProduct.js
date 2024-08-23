import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    console.log("Final Data:", { ...formData, ...data });
  };

  const renderStepChain = () => {
    return (
      <div className="step-chain mb-4">
        <div className={`step-item ${step === 1 ? "active" : ""}`}>Step 1</div>
        <div className={`step-item ${step === 2 ? "active" : ""}`}>Step 2</div>
        <div className={`step-item ${step === 3 ? "active" : ""}`}>Step 3</div>
      </div>
    );
  };

  return (
    <div className="container mt-5">
      {renderStepChain()}

      {step === 1 && (
        <Form onSubmit={handleSubmit(nextStep)}>
          <div className="d-flex justify-content-between">
            <Form.Group className="w-25">
              <Form.Label>Product Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product title"
                {...register("title", {
                  required: "Product title is required",
                })}
              />
              {errors.title && (
                <span className="text-danger">{errors.title.message}</span>
              )}
            </Form.Group>

            <Form.Group className="w-25">
              <Form.Label>Product Category</Form.Label>
              <Form.Control
                as="select"
                {...register("category", { required: "Category is required" })}
              >
                <option value="">--Select your product category--</option>
                <option value="men's clothing">Men Clothes</option>
                <option value="women's clothing">Women Clothes</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewellery</option>
              </Form.Control>
              {errors.category && (
                <span className="text-danger">{errors.category.message}</span>
              )}
            </Form.Group>

            <Form.Group className="w-25"></Form.Group>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Button
              className="focus-ring py-1 px-2"
              variant="primary"
              type="submit"
              style={{ width: 70, height: 40 }}
            >
              Next
            </Button>
          </div>
        </Form>
      )}

      {step === 2 && (
        <Form onSubmit={handleSubmit(nextStep)}>
          <Form.Group className="d-flex flex-column">
            <Form.Label>Product Description</Form.Label>
            <textarea
              type="text"
              style={{ height: 175 }}
              placeholder="Enter product description"
              {...register("description", {
                required: "Product description is required",
              })}
            />
            {errors.description && (
              <span className="text-danger">{errors.description.message}</span>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter product price"
              {...register("price", {
                required: "product price is required",
              })}
            />
            {errors.price && (
              <span className="text-danger">{errors.price.message}</span>
            )}
          </Form.Group>
          <div className="d-flex justify-content-center mt-5">
            <Button
              className="focus-ring py-1 px-2"
              variant="secondary"
              onClick={prevStep}
              style={{ width: 70, height: 40 }}
            >
              Back
            </Button>
            <Button
              className="focus-ring py-1 px-2"
              variant="primary"
              type="submit"
              style={{ marginLeft: 75, width: 70 }}
            >
              Next
            </Button>
          </div>
        </Form>
      )}

      {step === 3 && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Product Images</Form.Label>
            <Form.Control
              type="file"
              {...register("image", { required: "Product image is required" })}
            />
            {errors.image && (
              <span className="text-danger">{errors.image.message}</span>
            )}
          </Form.Group>

          <div className="d-flex justify-content-center mt-5">
            <Button
              className="focus-ring py-1 px-2"
              variant="secondary"
              onClick={prevStep}
              style={{ width: 70, height: 40 }}
            >
              Back
            </Button>
            <Button
              className="focus-ring py-1 px-2"
              variant="primary"
              type="submit"
              style={{ marginLeft: 75 }}
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default AddProduct;
