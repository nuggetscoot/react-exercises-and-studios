import SaveButton from "./SaveButton"
import ClickedButton from "./ClickedButton";
import { render } from "@testing-library/react";
function Button(props) {
  const saveButton = props.saveButton;
  return saveButton ? <SaveButton /> : <ClickedButton />;
};

 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 