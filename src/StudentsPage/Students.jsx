import Contatcs from './Contacts';
import Information from './Information';
import BachelorSemesters from './BachelorSemesters';
import MastersSemesters from './MastersSemesters';

const Students = () => {
  return (
    <>
      <div className="students-main">
        <Information />
        <BachelorSemesters />
        <MastersSemesters />
        <Contatcs />
      </div>
    </>
  );
};

export default Students;