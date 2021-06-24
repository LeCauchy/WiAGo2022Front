import React from 'react'
import { MDBCardBody, MDBCard, MDBBreadcrumb, MDBBreadcrumbItem, MDBDataTableV5 } from 'mdbreact';
import SectionContainer from '../sectionContainer';
import API_URL from '../constants';


class NotificationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [],
      columns: [
        {
          label: 'Operation',
          field: 'type',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Date',
          },
        },
        {
          label: 'Noeud',
          field: 'name',
          width: 100,
        },
        {
          label: 'Adresse IP',
          field: 'ip_address',
          width: 200,
        },
        {
          label: 'Date',
          field: 'date_on',
          sort: 'asc',
          width: 100,
        }
      ],
    }
  }

  async componentDidMount() {

    await fetch(API_URL+"notif/", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ rows: responseJson });
      })

  }

  render() {
    return (
      <SectionContainer>
        <MDBCard className="mb-5">
          <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
              <MDBBreadcrumbItem>Notifications</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="mb-5">
          <MDBCardBody id="breadcrumb" className="align-items-center justify-content-between">
            <MDBDataTableV5
              hover
              entriesOptions={[10, 20, 25]}
              entries={10}
              pagesAmount={4}
              data={this.state}
              searchTop
              searchBottom={false}
              barReverse
              order={['date_on', 'asc' ]}
            />
          </MDBCardBody>
        </MDBCard>

      </SectionContainer>
    )
  }
}

export default NotificationPage;