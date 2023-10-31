import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const BillPage = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(1);
  function handleTip(val) {
    setTip(val);
  }
  function handleBill(val) {}
  function handlePeople() {}
  return (
    <div className="billbox">
      {/* Add LeftBox and RightBox component here */}
      <LeftBox />
      <RightBox />
    </div>
  );
};

export default BillPage;
