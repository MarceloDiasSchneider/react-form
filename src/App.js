import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: false,
    employment: "",
    favColor: "",
  });

  function handleChange(event) {
    const { type, name, value, checked } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="App">
      <form>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First name"
        />
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          placeholder="Comment"
        />
        <input
          id="isFriendly"
          type="checkbox"
          name="isFriendly"
          checked={form.isFriendly}
          onChange={handleChange}
        />
        <label htmlFor="isFriendly">Are you friendly?</label>

        <fieldset>
          <legend>Current employment status</legend>
          <input
            type="radio"
            name="employment"
            id="unemployed"
            value="unemployed"
            checked={form.employment === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <input
            type="radio"
            name="employment"
            id="part-time"
            value="part-time"
            checked={form.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor="part-time">Part-time</label>
          <input
            type="radio"
            name="employment"
            id="full-time"
            value="full-time"
            checked={form.employment === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor="full-time">Full-time</label>
        </fieldset>

        <fieldset>
          <legend>What is your favorite color?</legend>
          <select
            id="favColor"
            onChange={handleChange}
            value={form.favColor}
            name="favColor"
          >
            <option value="">-- Choose --</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
