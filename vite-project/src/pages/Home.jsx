import NotAuthorised from "../assets/NotAuthorised";
import { isLoggedIn} from "../App";

const Home = () => {
    if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome to My Epic</h1>
      </div>
      )
    }
    return <NotAuthorised />;
  };
  
  export default Home;