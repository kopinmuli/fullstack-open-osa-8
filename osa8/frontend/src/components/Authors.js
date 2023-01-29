import { gql, useQuery } from '@apollo/client'
import EditAuthor from './EditAuthor'
import { ALL_AUTHORS } from '../queries'





const Authors = (props) => {
  const result = useQuery(ALL_AUTHORS)
  
  if (result === undefined) {
    return null
  }
  if (result.loading) {
    return <div>loading...</div>
  }
  const authors = result.data.allAuthors || []

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditAuthor authorsNames={authors.map((a) => a.name)} />
    </div>
  )
}

export default Authors
