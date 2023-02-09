import { useEffect, useState } from "react";
import ParticipantForm from "./components/ParticipantForm";
import ParticipantTable from "./components/ParticipantTable";
import { BASE_URL } from "./config/config";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

function App() {
  const [participants, setParticipants] = useState([]);//used to store the data received from the API request
  const [error, setError] = useState(null);//is used to store any errors that occur during the API request
  const [loading, setLoading] = useState(true);// is used to indicate whether the data is currently being loaded from the API request
  const [id, setId] = useState();
  const [isUpdate, setIsUpdate] = useState(false);


  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      first_name: Yup.string()
        .max(15, "First name must be 15 characters or less")
        .required("Required"),
      last_name: Yup.string()
        .max(15, "Last name must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      addParticipent(values);
      resetForm();
      if (!isUpdate) {
        addParticipent(values);

      } else {
        handleUpdate(values);
        setIsUpdate(false);
      }
    },
  });


  // getData makes an HTTP get request to the Hicoders-API to get all existing participants 
  const getData = async () => {
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      if (response.ok) {
        setParticipants(json);// store participants if the server's response is ok to our request
      }
    } catch (error) {
      setError(error);
      console.error(participants)
    } finally {
      setLoading(false);
    }
  };

  //this fetches the data when the page loads
  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const confirmDialog = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    return result.isConfirmed;
  }

  const handleDelete = async (pId) => {
    if (await confirmDialog()) {
      const selectedParticipant = `${BASE_URL}/${pId}`;
      try {
        const response = await fetch(selectedParticipant, {
          method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
        getData();
      } catch (error) {
        console.error(error);
      }
      await Swal.fire("Deleted!", "the user has been deleted.", "success");
    }
  };

  const addParticipent = async (values) => {
    const participant = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(participant),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(BASE_URL, options);
    const json = await response.json();
    if (response.ok) {
      console.log(json);
      getData();
    } else {
      console.error(json);
    }
  };

  const handleUpdate = async (updatedParticipant) => {
    const updatedPerson = {
      first_name: updatedParticipant.first_name,
      last_name: updatedParticipant.last_name,
      email: updatedParticipant.email,
    };

    const selectedParticipant = `${BASE_URL}/${id}`;
    try {
      const response = await fetch(selectedParticipant, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPerson),
      });
      const data = await response.json();
      console.log(data);
      getData();
    } catch (error) {
      console.error(error);
    }
    await Swal.fire("Updated!", "The participant has been updated.", "success");
  };

  const editButtonClick = (pPerson) => {
    setIsUpdate(true);
    formik.setValues({
      first_name: pPerson.first_name,
      last_name: pPerson.last_name,
      email: pPerson.email,
    });
  };

  const cancelUpdate = () => {
    setIsUpdate(false);
    formik.resetForm();
  }


  ///loading screen
  if (loading) {
    return <p style={{ color: "white" }}>Loading...</p>;
  }
  ////show error
  if (error) {
    return <p style={{ color: "white" }}>An error occurred: {error.message}</p>;
  }

  return (
    <div className="App m-5 p-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12  text-start ">
            <ParticipantForm getData={getData} isUpdate={isUpdate}
              cancelUpdate={cancelUpdate}
              formik={formik} />
          </div>
          <div className="col-lg-7  col-12">
            <ParticipantTable participants={participants} getData={getData}
              handleDelete={handleDelete} handleUpdate={handleUpdate}
              setId={setId} editButtonClick={editButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;