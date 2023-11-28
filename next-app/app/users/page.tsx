
import React from 'react'
import UserTable from './[id]/photos/[photoId]/UsersTable'


interface Props {
  searchParams: {sortOrder: string}
}


const usersPage = async ( {searchParams:{sortOrder}}:Props) => {
 
 

 
  return (
    <>

     <h1> Users  </h1>
     <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default usersPage
