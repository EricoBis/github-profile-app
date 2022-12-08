import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { StyledForm, StyledInput, StyledButton } from "./style";
import { UserDataContext } from "../../contexts/UserDataContext";

function UserInput() {
  const [input, setInput] = useState("");
  const {setEmptyState} = useContext(UserDataContext);

  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    setEmptyState();
    navigate(`/user/${input.toLowerCase()}`, { replace: true });
    setInput("");
  };

  return (
    <StyledForm onSubmit={handleForm}>
      <StyledInput
        type="text"
        value={input}
        onChange={handleInput}
        placeholder={'Username'}
      />
      <StyledButton type="submit">
        <FiSearch />
      </StyledButton>
    </StyledForm>
  );
}

export default UserInput;
