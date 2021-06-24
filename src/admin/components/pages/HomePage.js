import React from 'react';
import { MDBCardBody, MDBCard, MDBBreadcrumb, MDBBreadcrumbItem, MDBDataTableV5 } from 'mdbreact';
import SectionContainer from '../sectionContainer';
import '../style.css'
import API_URL from '../constants';


class HomePage extends React.Component {


  scrollToTop() {
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);

    this.state = {
      rows: [],
      etat: [],
      openNodes: [],
      closeNodes: [],
      columns: [
        {
          label: 'Nom',
          field: 'node_name',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Date',
          },
        },
        {
          label: 'Adresse IP',
          field: 'ip_address',
          width: 200,
        },
        {
          label: 'Longitude',
          field: 'longitude',
          width: 200,
        },
        {
          label: 'Latitude',
          field: 'latitude',
          width: 100,
        },
        {
          label: 'Date de creation',
          field: 'date_creation',
          width: 100,
        }
      ],
      closeNodes: [],

    };
  }

  async componentDidMount() {

    await fetch(API_URL + "node/", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({ rows: responseJson });
      })
    this.setState({ isLoading: false })

    await fetch(API_URL + "state/", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }).then((response) => response.json())
      .then((responseJson) => {

        this.setState({ etat: responseJson });
        var open = []
        var closed = []
        for (var i = this.state.rows.length - 1; i >= 0; i--) {
          for (var j = this.state.etat.length - 1; j >= 0; j--) {

            if (this.state.rows[i].ip_address == this.state.etat[j].ip_address) {

              if ((-new Date(this.state.etat[j].date_on).getTime() + new Date().getTime()) < 1000 * 60 * 5) {
                open.push(this.state.rows[i])
              } else {

                fetch(API_URL + 'notif/', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                  },
                  body: JSON.stringify(
                    {
                      "name": this.state.rows[i].node_name,
                      "ip_address": this.state.rows[i].ip_address,
                      "type": "Down"
                    }
                  )
                })


                closed.push(this.state.rows[i])

              }
              break;

            }
          }
        }

        this.setState({ openNodes: open })
        this.setState({ closeNodes: closed })

      })


  }



  render() {

    return (

      <SectionContainer>
        <MDBCard className="mb-5">
          <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
              <MDBBreadcrumbItem>Noeuds</MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Liste</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="mb-5">
          <MDBCardBody id="breadcrumb" className="align-items-center justify-content-between">
            <MDBDataTableV5
              hover
              // exportToCSV
              // proSelect
              entriesOptions={[10, 20, 25]}
              entries={10}
              pagesAmount={5}
              data={this.state}
              searchTop
              searchBottom={false}
              barReverse
              //data={badgesData}
              sortRows={['badge']}

            /></MDBCardBody>
        </MDBCard>
      </SectionContainer>


    )
  };
};

export default HomePage;
