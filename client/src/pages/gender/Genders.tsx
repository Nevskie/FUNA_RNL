import AddGenderform from "../../components/forms/AddGenderform";
import GendersTables from "../../components/tables/GendersTables";
import MainLayout from "../layout/MainLayout";

const Genders = () => {
  const content = (
    <>
      <div className="row">
        <div className="col-md-4">
          <AddGenderform />
        </div>
        <div className="col-md-8">
          <GendersTables />
        </div>
      </div>
    </>
  );
  return <MainLayout content={content} />;
};

export default Genders;
