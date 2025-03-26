const GendersTables = () => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Male</td>
            <button type="submit" className="btn btn-danger">
              Edit
            </button>{" "}
            <button type="submit" className="btn btn-success">
              Delete
            </button>
          </tr>
          <tr>
            <td>2</td>
            <td>Female</td>
            <button type="submit" className="btn btn-danger">
              Edit
            </button>{" "}
            <button type="submit" className="btn btn-success">
              Delete
            </button>
          </tr>
          <tr>
            <td>3</td>
            <td>Others</td>
            <button type="submit" className="btn btn-danger">
              Edit
            </button>{" "}
            <button type="submit" className="btn btn-success">
              Delete
            </button>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default GendersTables;
