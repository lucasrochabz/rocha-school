import { TeacherList } from '../../components/TeacherList/TeacherList';
import { Header } from '../../components/Header/Header';
import './ListPage.css';
import { useEffect, useState } from 'react';

export const ListPage = () => {
  const [teachers, setTeachers] = useState([]);

  const loadTeachers = async () => {
    const response = await fetch('http://localhost:3000/school');
    const data = await response.json();
    setTeachers(data);
    console.log(teachers);
  };
  
  useEffect(() => {
    loadTeachers();
  }, []);

  
  return (
    <>
      <Header />
      <TeacherList teachers={teachers} />
    </>
  );
};
