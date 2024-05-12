import { FormTeacher } from '../../components/FormTeacher/FormTeacher';
import { TeacherList } from '../../components/TeacherList/TeacherList';
import { Header } from '../../components/Header/Header';
import './ListPage.css';

export const ListPage = () => {
  return (
    <>
      <Header />
      <FormTeacher />
      <TeacherList />
    </>
  );
};
