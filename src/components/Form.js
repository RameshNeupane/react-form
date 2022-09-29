import { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  // const [sports, setSports] = useState("");
  const [checkedSports, setCheckedSports] = useState(false);
  const [checkedSinging, setCheckedSinging] = useState(false);
  const [checkedDancing, setCheckedDancing] = useState(false);
  const [checkedCooking, setCheckedCooking] = useState(false);
  const [country, setCountry] = useState("");
  const [comment, setComment] = useState("");

  console.log(comment);
  return (
    <form
      action="#"
      className="col-lg-8 col-md-8 col-sm-12 shadow p-3 mb-5 bg-body rounded border border-1 border-dark"
    >
      {/* Full Name */}
      <div className="mb-3">
        <label htmlFor="full-name" className="form-label fw-bold">
          Full Name
        </label>
        <input
          type="text"
          name="full-name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          id="full-name"
          placeholder="Ramesh Neupane"
          className="form-control bg-light"
          required
        />
      </div>

      {/* Email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-bold">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          id="email"
          placeholder="ramesh@example.com"
          className="form-control bg-light"
          required
        />
      </div>

      {/* Designation */}
      <div className="mb-3">
        <label htmlFor="designation" className="form-label fw-bold">
          Designation
        </label>
        <input
          type="text"
          name="designation"
          value={designation}
          onChange={(event) => setDesignation(event.target.value)}
          id="designation"
          placeholder="Software Engineer"
          className="form-control bg-light"
          required
        />
      </div>

      {/* Contact */}
      <div className="mb-3">
        <label htmlFor="contact" className="form-label fw-bold">
          Contact
        </label>
        <input
          type="text"
          name="contact"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          id="contact"
          placeholder="0123456789"
          className="form-control bg-light"
          required
        />
      </div>

      {/* Gender */}
      <div className="mb-3">
        <span className="me-3 fw-bold">Gender:</span>
        <div className="form-check-inline">
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={(event) => setGender(event.target.value)}
            className="form-check-input"
            required
          />
          <label htmlFor="male" className="form-check-label ms-1">
            Male
          </label>
        </div>
        <div className="form-check-inline">
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(event) => setGender(event.target.value)}
            class="form-check-input"
            required
          />
          <label htmlFor="female" className="form-check-label ms-1">
            Female
          </label>
        </div>
        <div className="form-check-inline">
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            checked={gender === "other"}
            onChange={(event) => setGender(event.target.value)}
            class="form-check-input"
            required
          />
          <label htmlFor="other" className="form-check-label ms-1">
            Other
          </label>
        </div>
      </div>

      {/* Hobbies */}
      <div className="mb-3">
        <span className="me-3 fw-bold">Hobbies:</span>
        <div className="form-check-inline">
          <input
            type="checkbox"
            name="sports"
            id="sports"
            value="sports"
            checked={checkedSports}
            onChange={(event) => setCheckedSports(!checkedSports)}
            className="form-check-input"
          />
          <label for="sports" className="form-check-label ms-1">
            Sports
          </label>
        </div>
        <div className="form-check-inline">
          <input
            type="checkbox"
            name="singing"
            id="singing"
            value="singing"
            checked={checkedSinging}
            onChange={(event) => setCheckedSinging(!checkedSinging)}
            className="form-check-input"
          />
          <label for="singing" className="form-check-label ms-1">
            Singing
          </label>
        </div>

        <div className="form-check-inline">
          <input
            type="checkbox"
            name="dancing"
            id="dancing"
            value="dancing"
            checked={checkedDancing}
            onChange={(event) => setCheckedDancing(!checkedDancing)}
            className="form-check-input"
          />
          <label for="dancing" className="form-check-label ms-1">
            Dancing
          </label>
        </div>

        <div className="form-check-inline">
          <input
            type="checkbox"
            name="cooking"
            id="cooking"
            value="cooking"
            checked={checkedCooking}
            onChange={(event) => setCheckedCooking(!checkedCooking)}
            className="form-check-input"
          />
          <label for="cooking" className="form-check-label ms-1">
            Cooking
          </label>
        </div>
      </div>

      {/* Country */}
      <div className="mb-3">
        <label htmlFor="country" className="form-label fw-bold">
          Country
        </label>
        <select
          name="country"
          id="country"
          className="form-select bg-light"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="Nepal">Nepal</option>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="Bhutan">Bhutan</option>
        </select>
      </div>

      {/* Comment */}
      <div className="mb-3">
        <label htmlFor="comment" className="form-label fw-bold">
          Comment
        </label>
        <br />
        <textarea
          name="comment"
          id="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          cols="30"
          rows="5"
          placeholder="leave a message"
          className="form-control bg-light"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary px-3 py-2">
        Submit
      </button>
    </form>
  );
};

export default Form;
