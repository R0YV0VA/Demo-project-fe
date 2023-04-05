import React from 'react'
import _map from 'lodash/map'
import _includes from 'lodash/includes'
import _replace from 'lodash/replace'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import { Table as TableBootstrap } from 'reactstrap'

const checkDataRes = ['createdAt', 'updatedAt', 'updated', 'created']

const Table = ({
  results,
  spreadsheetTitles,
  fieldsName,
  editRoutes,
}) => {
  return (
    <div>
      <TableBootstrap striped>
        <thead>
          <tr>
            {_map(spreadsheetTitles, (title) => (
              <th key={title}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {_map(results, (param) => {
            const linkToItem = _replace(editRoutes, ':id', param.id)
            return (
              <tr key={param.id}>
                {_map(fieldsName, (fieldName, index) => {
                  let renderData
                  if (typeof param[fieldName] === 'boolean') {
                    renderData = param[fieldName] ? 'Y' : 'N'
                  } else if (_includes(checkDataRes, fieldName)) {
                    renderData = param[fieldName]
                  } else {
                    renderData = param[fieldName]
                  }
                  return (
                    <td key={index}>
                      {renderData}
                    </td>
                  )
                })}
                <td>
                  <Link to={linkToItem}>
                    <Button primary large className='h-10'>
                      Edit
                    </Button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </TableBootstrap>
    </div>
  )
}
// check this pls, i don't know how did it.
Table.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  spreadsheetTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  fieldsName: PropTypes.arrayOf(PropTypes.string).isRequired,
  editRoutes: PropTypes.string.isRequired,
  hasDeleteMethod: PropTypes.bool,
}

Table.defaultProps = {
  hasDeleteMethod: false,
}

export default Table
