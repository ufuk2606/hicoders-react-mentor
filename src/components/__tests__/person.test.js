import {render,screen,cleanup,fireEvent } from "@testing-library/react";
import App from "../../App";
import PersonInformation from "../PersonInformation";
import Student from "../Student";
import Teacher from "../Teacher";


//App.js test
test("App rendered",()=>{
    render(<App/>)

    const buttonStudent = screen.getByTestId("button-students");
    expect(buttonStudent).toBeInTheDocument()
    

    const buttonTeacher = screen.getByTestId("button-teachers");
    expect(buttonTeacher).toBeInTheDocument()
   

})

//teacher componenet test
test("Tacher component rendered",() =>{
  const person ={
    "name": "Maxwell",
    "profession": "Teacher"
  }
  
  render(<Teacher person={person} />)
  const teacher = screen.getByTestId("teacher");
  expect(teacher).toBeInTheDocument()
  expect(screen.getByText("I am a Teacher, my name is Maxwell" )).toBeInTheDocument();

})

// Student componenet test
test("Student component rendered",() =>{
  const person ={
    "name": "Glen",
    "profession": "Student"
  }
 
  render(<Student person={person}/>)
  const student = screen.getByTestId("student");
  expect(student).toBeInTheDocument()
  expect(screen.getByText("I am a Student, my name is Glen" )).toBeInTheDocument();
})
   
// toggles student test
it('toggles the student list when the show/hide student button is clicked', () => {
  const personList = [ 
    {
      "name": "Georgie",
      "profession": "Teacher"
    },
    {
      "name": "Glen",
      "profession": "Student"
    }
    ];
  const { getByTestId } = render(<PersonInformation personList={personList} />);

  // initially, the student list should not be present
  expect(() => getByTestId('student-list')).toThrow();

  // clicking the button should show the student list
  fireEvent.click(getByTestId('button-students'));
  expect(getByTestId('student-list')).toBeInTheDocument();
  expect(getByTestId('button-students').textContent).toBe(' Hide Students');

  // clicking the button again should hide the student list
  fireEvent.click(getByTestId('button-students'));
  expect(() => getByTestId('student-list')).toThrow();
  expect(getByTestId('button-students').textContent).toBe(' Show Students');
});

//toggles teacher test
it('toggles the teacher list when the show/hide teacher button is clicked', () => {
  const personList = [ 
    {
      "name": "Georgie",
      "profession": "Teacher"
    },
    {
      "name": "Glen",
      "profession": "Student"
    }
    ];
  const { getByTestId } = render(<PersonInformation personList={personList} />);

  // initially, the teacher list should not be present
  expect(() => getByTestId('teacher-list')).toThrow();

  // clicking the button should show the teacher list
  fireEvent.click(getByTestId('button-teachers'));
  expect(getByTestId('teacher-list')).toBeInTheDocument();
  expect(getByTestId('button-teachers').textContent).toBe('Hide Teachers');

  // clicking the button again should hide the teacher list
  fireEvent.click(getByTestId('button-teachers'));
  expect(() => getByTestId('teacher-list')).toThrow();
  expect(getByTestId('button-teachers').textContent).toBe('Show Teachers');
});
