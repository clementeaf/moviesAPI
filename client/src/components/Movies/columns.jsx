import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();
//Columns
const columns = [
  columnHelper.accessor((row) => row.title, {
    id: "title",
    header: () => "Title",
    cell: (props) => (
      <div>{props.getValue()}</div>
    )
  }),
columnHelper.accessor((row) => row.description, {
      id: "description",
      header: () => "Description",
      cell: (props) => (
        <div>{props.getValue()}</div>
      )
    }),
  columnHelper.accessor((row) => row.genre, {
      id: "genre",
      header: () => "Genre",
      cell: (props) => (
        <div>{props.getValue()}</div>
      )
    }),
    columnHelper.accessor((row) => row.actors, {
      id: "actors",
      header: () => "Actors",
      cell: (props) => {
        return (
        <div>{props.getValue().map(({id, name}) => (
          <div key={id}>
            <p>{name}</p>
          </div>
        ))}</div>
      )}
    }),
      columnHelper.accessor((row) => row.productionCompany, {
      id: "productionCompany",
      header: () => "Production-Company",
      cell: (props) => (
        <div>{props.getValue()}</div>
      )
    }),
        columnHelper.accessor((row) => row.year, {
      id: "year",
      header: () => "Year",
      cell: (props) => (
        <div>{props.getValue()}</div>
      )
    }),
]

export default columns;