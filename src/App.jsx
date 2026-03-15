import React from 'react'
import Lading from './pages/Lading'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './AuthPage'
import StudentAuth from './auth/StudentAuth'
import TeacherAuth from './auth/TeacherAuth'
import LoginAdmin from './auth/adminAuth/LoginAdmin'
import RegisterAdmin from './auth/adminAuth/RegisterAdmin'
import DasBord from './pages/admin/DasBord'
import HomeAdmin from './pages/admin/HomeAdmin'
import StudentAdmin from './pages/admin/student/StudentAdmin'
import TeacherAdmin from './pages/admin/teacher/TeacherAdmin'
import UploadResult from './pages/admin/student/UploadResult'
import TeacherDasbord from './pages/teacher/TeacherDasbord'
import TeacherHome from './pages/teacher/TeacherHome'
import TeacherClassDetail from './pages/teacher/TeacherClassDetail'
import TeacherSubject from './pages/teacher/TeacherSubject'
import TeacherAttendance from './pages/teacher/TeacherAttendance'
import StudentDasBord from './pages/student/StudentDasBord'
import StudentHome from './pages/student/StudentHome'
import StudentAttendance from './pages/student/StudentAttendance'
import StudentResult from './pages/student/StudentResult'
import StudentFees from './pages/student/StudentFees'
import StudentAssignment from './pages/student/StudentAssignment'
import StudentProfile from './pages/student/StudentProfile'
import StudentSyllabus from './pages/student/StudentSyllabus'
import StudentTimetable from './pages/student/StudentTimetable'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Lading></Lading>} />
        <Route path='/auth-page' element={<AuthPage></AuthPage>} />
        <Route path='/student-login' element={<StudentAuth></StudentAuth>} />
        <Route path='/teacher-login' element={<TeacherAuth></TeacherAuth>} />
        <Route path='/admin-login' element={<LoginAdmin></LoginAdmin>} />
        <Route path='/admin-register' element={<RegisterAdmin></RegisterAdmin>} />
        <Route path='/das-bord' element={<DasBord></DasBord>}>
          <Route path='home' element={<HomeAdmin></HomeAdmin>} />
          <Route path='student' element={<StudentAdmin></StudentAdmin>} />
          <Route path='upload-result' element={<UploadResult></UploadResult>} />
          <Route path='teacher' element={<TeacherAdmin></TeacherAdmin>} />
        </Route>

        <Route path='/teacher-dasbord' element={<TeacherDasbord></TeacherDasbord>}>
          <Route path='home' element={<TeacherHome></TeacherHome>} />
          <Route path='class' element={<TeacherClassDetail></TeacherClassDetail>} />
          <Route path='subject' element={<TeacherSubject></TeacherSubject>} />
          <Route path='attendance' element={<TeacherAttendance></TeacherAttendance>} />
        </Route>


        <Route path='/student-Dasbord' element={<StudentDasBord></StudentDasBord>}>
          <Route path='home' element={<StudentHome></StudentHome>} />
          <Route path='attendance' element={<StudentAttendance></StudentAttendance>} />
          <Route path='results' element={<StudentResult></StudentResult>} />
          <Route path='fees' element={<StudentFees></StudentFees>} />
          <Route path='assignments' element={<StudentAssignment></StudentAssignment>} />
          <Route path='syllabus' element={<StudentSyllabus></StudentSyllabus>} />
          <Route path='timetable' element={<StudentTimetable></StudentTimetable>} />
          <Route path='profile' element={<StudentProfile></StudentProfile>} />
        </Route>
      </Routes>


    </div>
  )
}
