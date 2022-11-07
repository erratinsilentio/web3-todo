import { useState, useEffect } from "react";

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  /// CREATE ONE STRING FROM OUR INPUTS OBJECT ///
  const initialValues = Object.values(initial).join("");

  /// UPDATE STATE WHEN THE VALUES CHANGE ///
  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    let { value, name, type } = e.target;

    if (type === "number") {
      value = parseInt(value);
    }

    setInputs({
      ...inputs,
      [name]: value,
    });

    console.log(inputs)
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    clearForm,
  };
}
