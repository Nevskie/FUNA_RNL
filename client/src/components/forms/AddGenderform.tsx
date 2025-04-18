import { ChangeEvent, FormEvent, useState } from "react";
import GenderServices from "../../services/GendersServices";
import ErrorHandler from "../../handler/ErrorHandler";
import GenderFieldErrors from "../../interfaces/GenderFieldErrors";

interface AddGenderformProps {
  onGenderAdded: (message: string) => void;
}

const AddGenderform = ({ onGenderAdded }: AddGenderformProps) => {
  const [state, setState] = useState({
    loadingStore: false,
    gender: "",
    errors: {} as GenderFieldErrors,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleStoreGender = (e: FormEvent) => {
    e.preventDefault();

    setState((prevState) => ({
      ...prevState,
      loadingStore: true,
    }));

    GenderServices.storeGender(state)
      .then((res) => {
        if (res.status === 200) {
          setState((prevState) => ({
            ...prevState,
            gender: "",
            errors: {} as GenderFieldErrors,
          }));

          onGenderAdded(res.data.message);
        } else {
          console.error(
            "unexpected status error during storing gender: ",
            res.status
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          setState((prevState) => ({
            ...prevState,
            errors: error.response.data.errors,
          }));
        } else {
          ErrorHandler(error, null);
        }
      })
      .finally(() => {
        setState((prevState) => ({
          ...prevState,
          loadingStore: false,
        }));
      });
  };
  return (
    <>
      <form onSubmit={handleStoreGender}>
        <div className="form-group">
          <div className="mb-3">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              className={`form-control ${
                state.errors.genders ? "is-invalid" : ""
              }`}
              id="gender"
              name="gender"
              value={state.gender}
              onChange={handleInputChange}
            />
            {state.errors.genders && (
              <p className="text-danger">{state.errors.genders[0]}</p>
            )}
          </div>
          <div className="d-flex justify-content-end">
            {state.loadingStore ? (
              <button className="btn btn-primary" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
                <span role="status">Loading...</span>
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                SAVE
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default AddGenderform;
