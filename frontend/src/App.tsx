import { Table, Heading, Container } from '@radix-ui/themes';



export default function MyApp() {
const data = {
    rows: [
      {
        name: 'Rogerio',
        email: 'rogerio@bdtec.com.br',
        group: 'Developer'
      },
      {
        name: 'Rodrigo',
        email: 'rodrigo@bdtec.com.br',
        group: 'PO'
      },
      {
        name: 'Rodolfo',
        email: 'rodolfo@bdtec.com.br',
        group: 'Technical leader'
      }
    ]
};
return (
  <div>
    <Heading align='center'>Usuários</Heading>
    <Container>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.rows.map(row  => 
            <Table.Row>
              <Table.RowHeaderCell>{row.name}</Table.RowHeaderCell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.group}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </Container>
  </div>
);
}