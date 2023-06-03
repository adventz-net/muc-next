import { Container, Row, Col } from 'react-bootstrap';

export default function CampusSlider() {
  return (
    <section className="student-slider-sec">
      <div className="sec-bg-graphics">
        <div className="social-shape"></div>
        <div className="slider-d-shape"></div>
      </div>

      <section className="sec-con-cover">
        <section className="student-intro-vid-sec">
          <div className="student-intro-vid">
            <img src="images/student-sup-slider-01.jpg" alt="Student Support" />
          </div>
        </section>

        <section className="student-into-sec">
          <Container fluid className="px-0">
            <Row className="gx-0">
              <Col className="col-12 col-stud-con">
                <div className="student-intro">
                  <h3>
                    <span>Student Services and Alumni Relations</span>
                  </h3>
                  <p>
                    What the center is doing is a true embodiment of the goals
                    of the vision and mission of the college, as we seek to help
                    students in having a distinguished learning experience by
                    providing an appropriate environment that includes providing
                    accommodation, transportation, health and psychological
                    care, and helping students in solving their problems and
                    difficulties that they face, whether psychological or social
                    and creating the appropriate conditions to adapt to the
                    college environment and its requirements. This is in
                    addition to the great role in developing the student's
                    personality and working on refining it by providing a
                    distinguished social environment equipped with the necessary
                    services. We also care about preparing students for the
                    future in terms of training and holding workshops to prepare
                    students for the labor market according to planned
                    activities and programs.
                  </p>
                  <p>
                    The center also undertakes, in cooperation with the Student
                    Advisory Council, the management and planning of student
                    activities with the aim of developing students' talents and
                    abilities, refining their personalities and encouraging them
                    to contribute to decision-making, problem-solving and
                    leadership through the formation and management of the
                    Student Council, student groups and clubs, as the student
                    learns during this experience teamwork, good citizenship,
                    voluntary work, and respect for the cultures and opinions of
                    others.
                  </p>
                  <h5>The services provided by the center are as follows:</h5>

                  <ul>
                    <li>Student Hostel</li>
                    <li>Clinic and Health Care</li>
                    <li>Career & Industry Engagement Office (C&IEO)</li>
                    <li>Counselling</li>
                    <li>International students</li>
                    <li>Private transportation</li>
                    <li>Student activities and Student Advisory Council </li>
                    <li>Shopping and leisure trips</li>
                    <li>Helping low income student </li>
                    <li>Disciplinary Action</li>
                  </ul>
                </div>
              </Col>
              <Col className="col-12 col-stud-img">
                <div className="student-intro-img">
                  <img src="images/student-slider-img.jpg" alt="Image" />
                  <div className="student-img-shape">
                    <svg height={0} width={0}>
                      <defs />
                    </svg>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="stud-hos-sec px-4 px-lg-6 px-xl-6 py-5 py-lg-5 py-xl-6">
          <div className="sec-bg-graphics">
            <div className="stud-hos-shape"></div>
          </div>
          <section className="sec-con-cover">
            <div className="stud-hos-cover">
              <div className="stud-hos-item">
                <h3>Student Hostel</h3>
                <p>
                  The center provides two residences, one for males and the
                  other for females. Any student registered in the college has
                  the right to register in the hostels, where a suitable flats
                  system is provided, and each room contains a bed and a
                  wardrobe, with a kitchen that contains a cooker, a
                  refrigerator, and free cooking gas. There are other features
                  for residents of the hostels, where water, electricity and
                  transportation are provided free of charge, and they also get
                  free high-speed Wi-Fi service.
                </p>
                <p>
                  The Hostels are managed by wardens who are present 24hours in
                  order for the students to feel comfortable and reassured
                </p>
              </div>
              <div className="stud-hos-item">
                <h3>Clinic and Health Care</h3>
                <p>
                  There is a clinic on the college campus that undertakes the
                  task of taking care of the health of students, where there is
                  a nurse from 7 am to 7:30 pm who can deal with common
                  diseases, and serious cases can be transferred to local
                  hospitals.
                </p>
                <p>
                  Student Health is taken care of by sending students to local
                  hospitals from the college or from the hostel, with
                  transportation provided in emergency cases.
                </p>
              </div>
            </div>
          </section>
        </section>

        <section className="stud-coun-sec">
          <div className="stud-coun-cover">
            <div className="stud-coun-img">
              <img src="images/student-counselling.jpg" alt="Image" />
            </div>
            <div className="stud-coun-body">
              <h3>Career & Industry Engagement Office (C&IEO)</h3>
              <p>
                The office helps students and graduates to plan their career
                successfully, seeking to establish a close relationship with the
                sectors of work and communicating with the college's graduates
                on an ongoing basis.
              </p>
              <p>
                An integrated plan of courses, workshops and training is made
                for students, and different speakers in different fields of
                business are invited to train students and graduates.
              </p>
            </div>
          </div>
        </section>

        <section className="stud-intern-sec px-4 px-lg-6 px-xl-6 py-5 py-lg-5 py-xl-7">
          <div className="sec-bg-graphics">
            <div className="stud-intern-shape"></div>
          </div>
          <section className="sec-con-cover">
            <Container fluid className="px-0">
              <Row className="gx-0">
                <Col className="col-12 col-lg-6">
                  <div className="stud-intern-info">
                    <h4>Counselling</h4>
                    <p>
                      Counseling is an opportunity to talk confidentially with a
                      counselor about personal concerns and to facilitate
                      personal growth and decision-making, preparing for exams,
                      exam anxiety, and developing various life and social
                      skills. The counselor and client work together to define
                      and discuss personal issues and to reach mutually agreed
                      upon goals.. If needed, a referral toother service
                      agencies will be made.
                    </p>
                    <h4>International Students office</h4>
                    <p>
                      International Student Office aims to recruit students from
                      outside the country, According to a specific strategy and
                      marketing plan.
                    </p>
                    <p>
                      The International Student office has implemented a plan
                      and got amazing results. The focus has been on high
                      service, speed of response, starting from candidate query
                      till obtaining the student visa, and supporting the
                      current international students.
                    </p>
                  </div>
                </Col>
                <Col className="col-12 col-lg-6">
                  <div className="stud-intern-img">
                    <img src="images/student-intern-img.jpg" alt="Image" />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>

        <section className="stud-trans-sec px-4 px-lg-6 px-xl-6 py-5 py-lg-5 py-xl-7">
          <Container fluid>
            <Row>
              <Col xs={12}>
                <div className="des-slider-cover">
                  <h4>Private transportation</h4>
                  <p>
                    Private transportation is arranged for students who live in
                    Muscat.
                  </p>
                  <h4>Student extracurricular activities</h4>
                  <p>
                    The center, in cooperation with the Student Advisory
                    Council, plans extra-curricular student activities by
                    presenting Calendar at the beginning of each semester. There
                    are various activities such as sports, artistic and cultural
                    activities and competitions. There are annual events that
                    most students are keen to participate in, such as the open
                    day and the National Day.
                  </p>
                  <p>
                    The Student Advisory Council is the student organization
                    elected by students to manage student activities, groups and
                    clubs. Members of the Student Council are elected annually.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="stud-cere-sec">
          <Container fluid className="px-0">
            <Row className="gx-0">
              <Col className="col-12 col-cere-con">
                <div className="stud-cere-intro">
                  <h3>Shopping and leisure trips</h3>
                  <p>
                    Female students that reside in the hostel can enjoy shopping
                    and leisure trips accompanied by wardens to guarantee their
                    safety and comfort.
                  </p>
                  <h3>Helping low income student </h3>
                  <p>
                    The center tries to help insolvent and low-income students,
                    where this service can be provided in cooperation with some
                    associations and charitable institutions and some donors.
                  </p>
                  <h3>Disciplinary Action </h3>
                  <p>
                    The center is responsible for applying disciplinary code of
                    conduct and taking the necessary measures to ensure a safe
                    environment for all students. Students can file a complaint
                    directly at the center about any matter that bothers them,
                    and then the appropriate action is taken. The matter may
                    require that the complaint or violation be transferred to
                    the Disciplinary Committee, where it can Take stricter
                    measures.
                  </p>
                </div>
              </Col>
              <Col className="col-12 col-cere-img">
                <div className="stud-cere-intro-img">
                  <img src="images/stud-ceremony-img.jpg" alt="Image" />
                  <div className="stud-cere-img-shape">
                    <svg height={0} width={0}>
                      <defs />
                    </svg>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </section>
  );
}
