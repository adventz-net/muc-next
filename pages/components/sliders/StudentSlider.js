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
                  <h5>
                    The Student Services and Alumni Relations provides a variety
                    of services, namely:
                  </h5>

                  <ul>
                    <li>Student Hostel</li>
                    <li>Clinic and Health Care</li>
                    <li>Guidance & Counselling</li>
                    <li>Services to International students</li>
                    <li>Private transportation</li>
                    <li>Student activities and student council</li>
                    <li>Shopping and leisure trips</li>
                    <li>Graduation ceremony</li>
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

        <section className="stud-hos-sec px-5 px-lg-6 px-xl-6 py-5 py-lg-5 py-xl-6">
          <div className="sec-bg-graphics">
            <div className="stud-hos-shape"></div>
          </div>
          <section className="sec-con-cover">
            <div className="stud-hos-cover">
              <div className="stud-hos-item">
                <h3>Student Hostel</h3>
                <p>
                  Student Hostels are an important service provided. There are
                  two hostels, one for females and other for males. Students
                  registered in the college hostel are expected to follow all
                  rules and regulations stated in the Hostel Regulations
                  booklet. Registered students can take advantage of all
                  services in the hostel, including free transportation (to and
                  from college), free electricity and water, free cooking gas
                  and of course free Wi-Fi high-speed internet access.
                </p>
              </div>
              <div className="stud-hos-item">
                <h3>Students' Clinic & Health Care</h3>
                <p>
                  Students of Majan College receive an initial treatment for
                  some common ailments in the clinic while critical cases are
                  referred to the appropriate hospitals. The number of students
                  that benefit from the services of the clinic has increased
                  over a period of time. Student Health is taken care of by
                  sending students to local hospitals from the college or from
                  the hostel, with transportation provided in emergency cases. A
                  doctor visits the female hostel twice a month.
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
              <h3>Student counselling</h3>
              <p>
                This involves giving students some tips on their studies and how
                to relate to lecturers and their colleagues. Students are
                counselled on the code of conduct, general demeanour and student
                attendance.
              </p>
              <h5>Main Objectives:</h5>
              <ul>
                <li>Provide advice to students.</li>
                <li>Provide solutions for various student problems.</li>
                <li>
                  Help students to understand and handle individual differences
                  and fitting in to the college environment.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="stud-intern-sec px-5 px-lg-6 px-xl-6 py-5 py-lg-5 py-xl-7">
          <div className="sec-bg-graphics">
            <div className="stud-intern-shape"></div>
          </div>
          <section className="sec-con-cover">
            <Container fluid className="px-0">
              <Row className="gx-0">
                <Col className="col-12 col-lg-6">
                  <div className="stud-intern-info">
                    <h4>International Students</h4>
                    <p>
                      Pre-arrival information is made available to international
                      students on some of the practical aspects of living and
                      studying in Majan University College in addition to
                      details about the support provided during study periods.
                    </p>
                    <h5>Process of Enrolment</h5>
                    <p>
                      After all required documents are received by Admissions
                      and initial acceptance given:
                    </p>
                    <ul>
                      <li>
                        An acceptance letter for issuance of approval by
                        Ministry of Higher Education (NOC from giving student
                        visa).
                      </li>
                      <li>
                        HR Department and Admissions make the necessary
                        arrangement to get a student visa.
                      </li>
                      <li>
                        International students are required to stay in the
                        College's hosted where they are made comfortable. They
                        are taken from the airport and an appropriate place
                        found for them in the student hostel. A tour is then
                        arranged for them to get to know their surroundings, and
                        the city.
                      </li>
                    </ul>
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

        <section className="stud-trans-sec px-5 px-lg-6 px-xl-6 py-5 py-lg-5 py-xl-7">
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
                    Extra-curricular activities are organised for students
                    wishing to refine their talents and gain athletic skills and
                    technical and leadership skills.
                  </p>
                  <p>
                    There are sports teams for all games, and any student can
                    register for any activity in which they wish to participate.
                    College teams are also involved in most of the games and
                    local sporting activities, and sometimes international
                    events. There are religious, national and festive occasions,
                    observed annually.
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
                    Female students that reside in the hostel can enjoy the
                    daily shopping and leisure trips service, accompanied by
                    wardens to guarantee their safety and comfort.
                  </p>
                  <h3>Graduation Ceremony</h3>
                  <p>
                    The final stage is no doubt very important! Graduates are
                    kept informed of the graduation ceremony. They need to
                    comply with all necessary measures to ensure attendance at
                    the graduation ceremony.
                  </p>
                  <p>
                    The Student Services Centre works closely with the Registry
                    Department and Postgraduate Centre to make the necessary
                    arrangements for the graduation ceremony.
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
