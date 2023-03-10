import { Input } from "../form/Input";
import { REDUCER_ACTIONS, useForm, useFormDispatch  } from "../../state/FormContext";

export function Step1Form() {
  const formState = useForm();
  const dispatch = useFormDispatch();

  const handleTextChange = (e) => {
    dispatch({
      type: REDUCER_ACTIONS.UPDATE_INPUT,
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h2>Personal info</h2>
      <p className="mb-1">
        Please provide your name, email, address, and phone number
      </p>
      <Input
        label="Name"
        error={formState.errors.name}
        type="text"
        name="name"
        placeholder="e.g. Stephen King"
        onChange={(e) => handleTextChange(e)}
        value={formState.name}
      />
      <Input
        label="Email Address"
        error={formState.errors.email}
        type="email"
        name="email"
        placeholder="e.g. stephenking@lorem.com"
        onChange={(e) => handleTextChange(e)}
        value={formState.email}
      />
      <Input
        label="Phone Number"
        error={formState.errors.phone}
        type="tel"
        name="phone"
        placeholder="e.g. +1234567890"
        onChange={(e) => handleTextChange(e)}
        value={formState.phone}
      />
    </div>
  );
}
