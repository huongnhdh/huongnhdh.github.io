import ResumeLayout from "@layouts/ResumeLayout";

function ResumePage() {
  const data = {
    aboutMe: "",
    education: [
      {
        schoolName: "CanTho University",
        degree: "Bachelor",
        major: "Software Engineering",
        year: "2012-2016"
      }
    ],
    certificates: [
      {
        name: "",
        expireAt: "",
        serialNumber: ""
      }
    ],
    skills: [
      "Web-developement",
      "CI/CD with github action",
      "serverless with AWS lamda, Google Clound Functions",
      "AWS developer",
      "oauth/openID with AWS cognito, Firebase Auth",
      "Payment gateway with Payoo, Momo, Stripe",
      "Ruby on Rails",
      "TypeScript",
      "HTML5/CSS3/JavaScript",
    ],
    experients: [
      {
        company: "Shift Asia",
        title: "Developer",
        time: { fromTime: "", toTime: "" },
        roleAndResponsibility: ""
      },
      {
        company: "Lifull tech VN",
        title: "Developer",
        time: { fromTime: "", toTime: "" },
        roleAndResponsibility: ""
      },
      {
        company: "Topica",
        title: "Developer",
        time: { fromTime: "", toTime: "" },
        roleAndResponsibility: ""
      },
      {
        company: "Ina Labs",
        title: "Developer",
        time: { fromTime: "", toTime: "" },
        roleAndResponsibility: ""
      },
      {
        company: "Evoblable Asia",
        title: "Developer",
        time: { fromTime: "", toTime: "" },
        roleAndResponsibility: ""
      },
      {
        company: "Evoblable Asia",
        title: "Intern Developer",
        time: { fromTime: "", toTime: "" },
        roleAndResponsibility: ""
      }
    ],
    projects: [{
    }],
  }

  return <>
    resume
  </>
}

ResumePage.getLayout = (page: JSX.Element) => (
  <ResumeLayout> {page} </ResumeLayout>
)
export default ResumePage;