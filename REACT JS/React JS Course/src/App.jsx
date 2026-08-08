// import DisplayBlog from "../Lessons/Lesson-1/Blog";
// import LayoutAll from "../Lessons/Lesson-1/Layouts";

// import Greeting from "../Lessons/Lesson-2/Props";


import UserCard from "../Exercises/Exercise-3/PropsExercise";

function DisplayMessage (){

  const UserName = ""
  const Email = ""
  const Role = ""
  
  return (
    <>
      <UserCard
    UserName = {"Abdirahman"}
    Email = {"abdirahmanali@gmail.com"}
    Role = {"software engineer"}
    />
      <UserCard
    UserName = {"Aish"}
    Email = {"aishaabdi@gmail.com"}
     Role = {"student"}
    />
      <UserCard
    UserName = {"najma"}
    Email = {"najmaqurux@gmail.com"}
     Role = {"graphic designer"}
    />
      <UserCard
    UserName = {"Abdiqudus"}
    Email = {"abdiqudusabdi@gmail.com"}
     Role = {"student"}
    />

    </>
  
  )

}

export default DisplayMessage;

