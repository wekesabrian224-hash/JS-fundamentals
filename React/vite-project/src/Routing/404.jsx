import { NavigationType } from "react-router";
import Navigation1 from "./Navigation1";

function Page404() {
  return (
    <div>
      <Navigation1 />
      <b>404</b>
      <h1>
        Sorry we could not find the page that you are lookng for please go back
        to the HomePage.
      </h1>
    </div>
  );
}
export default Page404;

//*-> match everything
// Must come at the bottom
// must be the last route
