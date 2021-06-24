import React from 'react';
import { MDBDataTableV5, MDBContainer } from 'mdbreact';
import alertdata from '../data/alertdata.json'
import { MDBCardBody, MDBCard, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact';
import SectionContainer from '../sectionContainer';
class AlertePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [],

      columns: [
        {
          label: 'Date',
          field: 'date',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Date',
          },
        },
        {
          label: 'Heure',
          field: 'heure',
          width: 100,
        },
        {
          label: 'Séverité',
          field: 'sévérité',
          width: 270,
        },
        {
          label: 'Noeud',
          field: 'noeud',
          width: 200,
        },
        {
          label: 'Nom',
          field: 'nom',
          width: 100,
        },
        {
          label: 'Description',
          field: 'description',
          sort: 'asc',
          width: 100,
        }
      ],

    };



  }
  async componentDidMount() {

    await fetch(API_URL+'/notif')
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
              <MDBBreadcrumbItem>Alertes</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="mb-5">
          <MDBCardBody id="breadcrumb" className="align-items-center justify-content-between">
            <MDBDataTableV5
              hover
              entriesOptions={[5, 20, 25]}
              entries={5}
              pagesAmount={4}
              data={this.state}
              searchTop
              searchBottom={false}
              barReverse
            />
          </MDBCardBody>
        </MDBCard>

      </SectionContainer>
    );
  }
}

export default AlertePage;