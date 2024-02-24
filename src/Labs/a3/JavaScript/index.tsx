import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import FunctionDestructing from "./functions/FunctionDestructing";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import ImpliedReturn from "./functions/ImpliedReturn";
import Destructing from "./json/Destructing";
import House from "./json/House";
import Spreading from "./json/Spreading";
import TemplateLiterals from "./string/TemplateLiterals";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants />
          <VariableTypes />
          <BooleanVariables />
          <ES5Functions />
          <ArrowFunctions />
          <ImpliedReturn />
          <FunctionParenthesisAndParameters />
          <WorkingWithArrays />
          <TemplateLiterals />
          <House />
          <Spreading />
          <Destructing />
          <FunctionDestructing />
       </div>
    );
 }
 export default JavaScript