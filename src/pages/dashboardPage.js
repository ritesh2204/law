import React from "react";
import { Grid, GridColumn, Image } from "semantic-ui-react";

const DashboardPage = () => (
  <React.Fragment>
    <div className="flex-container" style={{ marginTop: "150px" }}>
      <div className="d-flex" style={{ flex: 2 }}>
        <div style={{ lineHeight: 1 }}>
          <p className="profilenamestyle">
            {" "}
            Hello, <br />
            <b className="profilenamestyle">Elon Musk</b>
          </p>
        </div>
        <div>
          <Image
            src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
            style={{ width: 110, float: "right" }}
            circular
          />
        </div>
      </div>

      <div style={{ flex: 2 }}>
        <div className="d-flex">
          <div>
            <p className="projectsStyle">Total Clients:</p>
            <p className="numbers">
              &nbsp; <b>82</b>
            </p>
          </div>
          <div>
            <p className="projectsStyle">Total Cases (On going):</p>
            <p className="numbers">
              &nbsp; <b>1</b>
            </p>
          </div>
        </div>

        <div className="d-flex" style={{ paddingTop: 30 }}>
          <div>
            <p className="projectsStyle">Total Advocates:</p>
            <p className="numbers">
              &nbsp; <b>12</b>
            </p>
          </div>
          <div>
            <p className="projectsStyle">Total Cases (On going):</p>
            <p className="numbers">
              &nbsp; <b>82</b>
            </p>
          </div>
        </div>
      </div>
    </div>

    <h2 className="text-center" style={{ marginTop: 100 }}>
      Case Diary
    </h2>

    <div style={{ overflowX: "auto" }}>
      <table>
        <tr>
          <th>By</th>
          <th>Court Name</th>
          <th>LHD</th>
          <th>Case Name</th>
          <th>By</th>
          <th>For</th>
          <th>NHD</th>
          <th>For</th>
        </tr>
        <tr>
          <td>Ankush</td>
          <td>High court</td>
          <td>12/05/2020</td>
          <td>Accident case</td>
          <td>Ankush</td>
          <td>evidence</td>
          <td>18/05/2020</td>
          <td>evidence 1</td>
        </tr>
        <tr>
          <td>Ankush</td>
          <td>High court</td>
          <td>12/05/2020</td>
          <td>Accident case</td>
          <td>Ankush</td>
          <td>evidence</td>
          <td>18/05/2020</td>
          <td>evidence 1</td>
        </tr>
      </table>
    </div>

    {/* <div style={{ marginTop: 20 }}>
      <div className="panel">
        <div className="panel-head flex-container space-evenly">
          <p className="mb-0">By</p>
          <p className="mb-0">Court Name</p>
          <p className="mb-0">LHD</p>
          <p className="mb-0">Case Name</p>
          <p className="mb-0">By</p>
          <p className="mb-0">For</p>
          <p className="mb-0">NHD</p>
          <p className="mb-0">For</p>
        </div>
      </div>
    </div> */}

    {/* <div style={{ marginTop: 2 }}>
      <div className="panel-table">
        <div
          className="panel-head flex-container space-evenly"
          style={{ fontWeight: "inherit" }}
        >
          <p className="mb-0">Ankush</p>
          <p className="mb-0">High court</p>
          <p className="mb-0">12/05/2020</p>
          <p className="mb-0">Accident case</p>
          <p className="mb-0">Ankush</p>
          <p className="mb-0">evidence</p>
          <p className="mb-0">18/05/2020</p>
          <p className="mb-0">evidence 1</p>
        </div>
      </div>
    </div> */}

    {/* <div className="flex-container" style={{ marginTop: 60 }}>
      <div style={{ flex: 2 }} className="p-10">
        <div className="trackbox">
          <div className="d-flex">
            <div style={{ flex: 2 }}>
              <Image
                src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
                aly="dds"
                className="avatar"
                circular
              />
            </div>
            <div style={{ flex: 2 }}>
              <p className="mb-0 desc">394</p>
              <p className="desc1">Advocate</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: 2 }} className="p-10">
        <div className="trackbox">
          <div className="d-flestylex" style={{ flex: 2 }}>
            <div>
              <Image
                src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
                aly="dds"
                className="avatar"
                circular
              />
            </div>
            <div style={{ flex: 2 }}>
              <p className="mb-0 desc">394</p>
              <p className="desc1">Advocate</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: 2 }} className="p-10">
        <div className="trackbox">
          <div className="d-flex" style={{ flex: 2 }}>
            <div>
              <Image
                src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
                aly="dds"
                className="avatar"
                circular
              />
            </div>
            <div style={{ flex: 2 }}>
              <p className="mb-0 desc">394</p>
              <p className="desc1">Advocate</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: 2 }} className="p-10">
        <div className="trackbox">
          <div className="d-flex" style={{ flex: 2 }}>
            <div>
              <Image
                src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
                aly="dds"
                className="avatar"
                circular
              />
            </div>
            <div style={{ flex: 2 }}>
              <p className="mb-0 desc">394</p>
              <p className="desc1">Advocate</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    {/* <div>
      <Grid style={{ marginTop: 100, marginLeft: "100px" }} columns={3}>
        <GridColumn>
          <br />
          <br />
          <div className="d-flex">
            <div style={{ lineHeight: 1 }}>
              <p className="profilenamestyle">
                {" "}
                Hello, <br />
                <b className="profilenamestyle">Elon Musk</b>
              </p>
            </div>
            <div>
              <Image
                src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
                style={{ width: 110, float: "right" }}
                circular
              />
            </div>
          </div>
        </GridColumn>
        <GridColumn>
          <div className="d-flex">
            <div>
              <p className="projectsStyle">Total Projects:</p>
              <p className="numbers">
                &nbsp; <b>182</b>
              </p>
            </div>
            <div>
              <p className="projectsStyle">Completed:</p>
              <p className="numbers">
                &nbsp; <b>182</b>
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="d-flex">
            <div>
              <p className="projectsStyle">Total Projects:</p>
              <p className="numbers">
                &nbsp; <b>182</b>
              </p>
            </div>
            <div>
              <p className="projectsStyle">Completed:</p>
              <p className="numbers">
                &nbsp; <b>182</b>
              </p>
            </div>
          </div>
        </GridColumn>
      </Grid> */}
    {/* 
      <Grid style={{ marginLeft: 50, marginTop: 20 }}>
        <GridColumn width={4}>
          <div className="trackbox">
            <div className="d-flex">
              <div>
                <Image
                  src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
                  aly="dds"
                  className="avatar"
                  circular
                />
              </div>
              <div>
                <p className="mb-0 desc">394</p>
                <p className="desc1">Advocate</p>
              </div>
            </div>
          </div>
        </GridColumn>
        <GridColumn width={4}>
          <div className="trackbox">
            <div className="d-flex">
              <div>
                <Image
                  src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
                  aly="dds"
                  className="avatar"
                  circular
                />
              </div>
              <div>
                <p className="mb-0 desc">394</p>
                <p className="desc1">Advocate</p>
              </div>
            </div>
          </div>
        </GridColumn>

        <GridColumn width={4}>
          <div className="trackbox">
            <div className="d-flex">
              <div>
                <Image
                  src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
                  aly="dds"
                  className="avatar"
                  circular
                />
              </div>
              <div>
                <p className="mb-0 desc">394</p>
                <p className="desc1">Advocate</p>
              </div>
            </div>
          </div>
        </GridColumn>

        <GridColumn width={4}>
          <div className="trackbox">
            <div className="d-flex">
              <div>
                <Image
                  src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
                  aly="dds"
                  className="avatar"
                  circular
                />
              </div>
              <div>
                <p className="mb-0 desc">394</p>
                <p className="desc1">Advocate</p>
              </div>
            </div>
          </div>
        </GridColumn>
      </Grid> */}

    {/* card */}

    {/* 
        <div className="roundcard">
          <p className="mb-0" style={{ fontSize: "20px", color: "#6D6A74" }}>
            <b>Today Earning</b>
          </p>
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>$200</p>
          <img
            src="
        https://www.vippng.com/png/detail/21-216007_svg-graph-business-growing-stock-icon.png
        "
            alt="stock"
            style={{ width: 100 }}
          />
        </div> */}
  </React.Fragment>
);

export default DashboardPage;
