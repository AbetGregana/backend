import { InputText } from "@/components/helpers/FormInputs";
import ModalSideWrapper from "@/components/partials/modal/ModalSideWrapper";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";
import { setError, setIsAdd, setMessage } from "@/store/storeAction";
import { StoreContext } from "@/store/storeContext";

const ModalAddDepartments = ({ dataEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        dataEdit ? `/v2/children/${dataEdit.children_aid}` : "/v2/children",
        dataEdit ? "PUT" : "POST",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["children"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        console.log("Success");
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Successful!"));
      }
    },
  });

  const initVal = {
    department_aid: dataEdit ? dataEdit.department_aid : "",
    department_name: dataEdit ? dataEdit.department_name : "",
    department_supervisor_name: dataEdit
      ? dataEdit.department_supervisor_name
      : "",
    department_supervisor_email: dataEdit
      ? dataEdit.department_supervisor_email
      : "",
    department_name_old: dataEdit ? dataEdit.department_name : "",
  };
  const yupSchema = Yup.object({
    department_name: Yup.string().required("Required"),
    department_supervisor_name: Yup.string().required("Required"),
    department_saupervisor_email: Yup.string()
      .required("Required")
      .email("Invalid Email"),
  });

  return (
    <ModalSideWrapper>
      <main className="flex flex-col  mb-5 max-w-[400px] w-full bg-white p-5">
        <div className="flex justify-between items-center mb-5">
          <h2>Add Department</h2>
          <button onClick={handleClose}>
            <MdOutlineClose />
          </button>
        </div>

        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // mutate data
            mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
              <Form className="h-full flex flex-col">
                <div className="grow">
                  <div className="input-wrapper">
                    <InputText
                      label="Department Name"
                      name="department_name"
                      type="text"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Supervisor"
                      name="department_supervisor_name"
                      type="text"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Supervisor Email "
                      name="department_supervisor_email"
                      type="email"
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
        <div className="form-action flex gap-2">
          <button className="px-5 py-2 bg-red-600 text-white" type="submit">
            Save
          </button>
          <button
            className="px-5 py-2 bg-gray-200 text-gray-900"
            type="reset"
            onClick={handleClose}
          >
            Discard
          </button>
        </div>
      </main>
    </ModalSideWrapper>
  );
};

export default ModalAddDepartments;
