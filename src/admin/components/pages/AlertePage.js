import React from 'react';
import { MDBDataTableV5, MDBContainer } from 'mdbreact';
import alertdata from '../data/alertdata.json'

function AlertePage() {
  const [datatable, setDatatable] = React.useState({
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
        label: 'Noeud ID',
        field: 'noeud',
        width: 200,
      },
      {
          label : 'Nom',
          field : 'nom',
          width : 100,
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'asc',
        width: 100,
      }
    ],
    rows : alertdata
  });

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      searchTop
      searchBottom={false}
      barReverse
    />
  );
}

export default AlertePage;